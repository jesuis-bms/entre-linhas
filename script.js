
(() => {
  "use strict";

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const app = $("#app");
  const lockScreen = $("#lock-screen");
  const messagesScreen = $("#messages-screen");
  const socialScreen = $("#social-screen");
  const endingScreen = $("#ending-screen");
  const transitionScreen = $("#transition-screen");

  if (!app || !window.STORY_DATA) {
    console.error("Não foi possível carregar a história.");
    return;
  }

  const story = window.STORY_DATA;

  let stageIndex = 0;
  let currentScreen = "lock-screen";
  let animationToken = 0;
  let finalReplyShown = false;

  function escapeHTML(value = "") {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function getStage() {
    return story.stages[stageIndex];
  }

  function wait(milliseconds) {
    return new Promise((resolve) =>
      setTimeout(resolve, milliseconds)
    );
  }

  function cancelAnimation() {
    animationToken++;
  }

  function showScreen(screenId) {
    [
      lockScreen,
      messagesScreen,
      socialScreen,
      transitionScreen,
      endingScreen
    ].forEach((screen) => {
      if (!screen) return;

      const active = screen.id === screenId;
      screen.hidden = !active;
      screen.classList.toggle("active", active);
    });

    currentScreen = screenId;
    window.scrollTo(0, 0);
  }

  function avatar(letter, className) {
    return `
      <div class="${className}" aria-hidden="true">
        ${escapeHTML(letter)}
      </div>
    `;
  }

  // ==================================================
  // TELA DE BLOQUEIO
  // ==================================================

  function renderLockScreen() {
    const stage = getStage();
    const notification = stage.notification;

    const statusTime = $("#status-time");
    const lockDate = $("#lock-date");
    const lockTime = $("#lock-time");
    const notifications = $("#notifications");

    if (statusTime) statusTime.textContent = stage.time;
    if (lockDate) lockDate.textContent = stage.date;
    if (lockTime) lockTime.textContent = stage.time;

    if (notifications) {
      notifications.innerHTML = `
        <div
          class="notification"
          role="button"
          tabindex="0"
          data-action="unlock"
        >
          <div class="notification-header">
            <div class="notification-icon">
              ${escapeHTML(notification.icon)}
            </div>

            <span class="notification-app">
              ${escapeHTML(notification.app)}
            </span>

            <span class="notification-time">
              ${escapeHTML(notification.time)}
            </span>
          </div>

          <div class="notification-title">
            ${escapeHTML(notification.title)}
          </div>

          <div class="notification-message">
            ${escapeHTML(notification.message)}
          </div>
        </div>
      `;
    }
  }

  function unlockPhone() {
    cancelAnimation();

    renderConversationList();
    showScreen("messages-screen");
  }

  // ==================================================
  // LISTA DE CONVERSAS
  // ==================================================

  function renderConversationList() {
    const conversation = getStage().conversation;
    const list = $("#conversation-list");
    const view = $("#conversation-view");

    if (!list) return;

    list.hidden = false;

    if (view) view.hidden = true;

    list.innerHTML = `
      <button
        type="button"
        class="conversation-item"
        data-action="open-conversation"
      >
        ${avatar(conversation.avatar, "conversation-avatar")}

        <div class="conversation-info">
          <div class="conversation-name">
            ${escapeHTML(conversation.name)}
          </div>

          <div class="conversation-preview">
            ${escapeHTML(conversation.preview)}
          </div>
        </div>

        <div class="conversation-meta">
          <span class="conversation-time">
            ${escapeHTML(conversation.time)}
          </span>

          ${
            conversation.unread
              ? `<span class="unread-badge">
                  ${conversation.unread}
                </span>`
              : ""
          }
        </div>
      </button>
    `;
  }

  // ==================================================
  // MENSAGENS GRADUAIS
  // ==================================================

  async function renderConversation() {
    cancelAnimation();

    const token = animationToken;
    const conversation = getStage().conversation;

    const list = $("#conversation-list");
    const view = $("#conversation-view");
    const title = $("#conversation-title");
    const description = $("#conversation-description");
    const messageList = $("#message-list");

    if (!view || !messageList) return;

    if (list) list.hidden = true;

    view.hidden = false;

    if (title) title.textContent = conversation.name;

    if (description) {
      description.textContent = conversation.description;
    }

    messageList.innerHTML = "";

    const footer = $(".message-footer", view);

    if (footer) footer.innerHTML = "";

    finalReplyShown = false;

    for (let i = 0; i < conversation.messages.length; i++) {
      if (token !== animationToken) return;

      const message = conversation.messages[i];

      if (i > 0) {
        const typing = document.createElement("div");

        typing.className = "message typing-indicator";
        typing.textContent = "digitando...";
        typing.setAttribute(
          "aria-label",
          "Nova mensagem chegando"
        );

        messageList.appendChild(typing);
        messageList.scrollTop = messageList.scrollHeight;

        const importantMessage =
          /limite|ajuda|não foi do nada|hospitalizada|suicídio/i
            .test(message.text);

        await wait(importantMessage ? 3000 : 1800);

        if (token !== animationToken) return;

        typing.remove();

        await wait(importantMessage ? 1000 : 700);

        if (token !== animationToken) return;
      }

      const element = document.createElement("article");
      const outgoing = message.sender === "Você";

      element.className =
        `message${outgoing ? " outgoing" : ""}`;

      const sender = outgoing
        ? ""
        : `
          <div class="message-sender">
            ${avatar(
              message.avatar || message.sender[0],
              "message-avatar"
            )}
            <span>${escapeHTML(message.sender)}</span>
          </div>
        `;

      const content = message.type === "link"
        ? `
          <button
            type="button"
            class="message-link"
            data-action="open-social"
          >
            ${escapeHTML(message.text)} ↗
          </button>
        `
        : `
          <div class="message-text">
            ${escapeHTML(message.text)}
          </div>
        `;

      element.innerHTML = `
        ${sender}
        ${content}
        <div class="message-time">
          ${escapeHTML(message.time)}
        </div>
      `;

      messageList.appendChild(element);
      messageList.scrollTop = messageList.scrollHeight;
    }

    if (token !== animationToken) return;

    const continueButton = document.createElement("button");

    continueButton.type = "button";
    continueButton.className = "story-continue";
    continueButton.textContent = "Ver as publicações";
    continueButton.dataset.action = "open-social";

    const footerAfterMessages = $(".message-footer", view);

    if (footerAfterMessages) {
      footerAfterMessages.innerHTML = "";
      footerAfterMessages.appendChild(continueButton);
    } else {
      messageList.appendChild(continueButton);
    }
  }

  function backToConversations() {
    cancelAnimation();
    renderConversationList();
  }

  // ==================================================
  // PERFIL E PUBLICAÇÕES
  // ==================================================

  function renderSocialProfile() {
    const profileContainer = $("#social-profile");
    const feed = $("#social-feed");

    if (!profileContainer || !feed) return;

    const profile = story.profile;
    const stage = getStage();

    profileContainer.innerHTML = `
      <div class="profile-top">
        ${avatar("🤟", "profile-avatar")}

        <div>
          <div class="profile-name">
            ${escapeHTML(profile.name)}
          </div>

          <div class="profile-handle">
            ${escapeHTML(profile.handle)}
          </div>
        </div>
      </div>

      <p class="profile-bio">
        ${escapeHTML(profile.bio)}
      </p>

      <div class="profile-stats">
        <span>
          <strong>${profile.stats.posts}</strong> publicações
        </span>
        <span>
          <strong>${profile.stats.followers}</strong> seguidores
        </span>
        <span>
          <strong>${profile.stats.following}</strong> seguindo
        </span>
      </div>
    `;

    feed.innerHTML = stage.posts.map((post) => {
      const comments = post.comments.map((comment) => {
        const tone = ["hostile", "supportive"].includes(
          comment.tone
        )
          ? comment.tone
          : "";

        return `
          <div class="post-comment">
            ${avatar(comment.avatar, "post-avatar")}

            <div>
              <span class="comment-author ${tone}">
                ${escapeHTML(comment.author)}
              </span>

              <span class="comment-time">
                ${escapeHTML(comment.time)}
              </span>

              <div>${escapeHTML(comment.text)}</div>
            </div>
          </div>
        `;
      }).join("");

      return `
        <article
          class="social-post"
          id="${escapeHTML(post.id)}"
        >
          <header class="post-header">
            ${avatar(post.avatar, "post-avatar")}

            <div>
              <div class="post-author">
                ${escapeHTML(post.author)}
              </div>

              <div class="post-date">
                ${escapeHTML(post.date)}
              </div>
            </div>
          </header>

          <div
            class="post-visual"
            role="img"
            aria-label="${escapeHTML(post.visualLabel)}"
          >
            <span aria-hidden="true">
              ${escapeHTML(post.visual)}
            </span>
            <p>${escapeHTML(post.visualLabel)}</p>
          </div>

          <div class="post-caption">
            <strong>${escapeHTML(post.handle)}</strong>
            ${escapeHTML(post.caption)}
          </div>

          <div class="post-actions">
            <span>♡ ${post.likes} curtidas</span>
            <span>${post.comments.length} comentários</span>
          </div>

          <div class="post-comments">${comments}</div>
        </article>
      `;
    }).join("");

    let returnButton = $("#return-to-phone");

    if (!returnButton) {
      returnButton = document.createElement("button");

      returnButton.id = "return-to-phone";
      returnButton.type = "button";
      returnButton.className = "story-continue";
      returnButton.dataset.action = "advance-story";
      returnButton.textContent = "Voltar ao celular";

      feed.after(returnButton);
    }
  }

  function openSocialProfile() {
    cancelAnimation();
    renderSocialProfile();
    showScreen("social-screen");
  }

  // ==================================================
  // MENSAGEM FINAL DO VISITANTE
  // ==================================================

  function showFinalReply() {
    cancelAnimation();

    const list = $("#conversation-list");
    const view = $("#conversation-view");
    const messageList = $("#message-list");
    const footer = $(".message-footer", view);

    if (!view || !messageList) {
      renderEnding();
      showScreen("ending-screen");
      return;
    }

    if (list) list.hidden = true;

    view.hidden = false;

    const title = $("#conversation-title");
    const description = $("#conversation-description");

    if (title) title.textContent = "7º B | conversas";

    if (description) {
      description.textContent = "Grupo da turma";
    }

    if (finalReplyShown) {
      showScreen("messages-screen");
      return;
    }

    finalReplyShown = true;

    if (footer) footer.innerHTML = "";

    const prompt = document.createElement("div");

    prompt.className = "story-transition";
    prompt.innerHTML = `
      <p class="story-date">Alguns segundos depois</p>
      <p>Você decide enviar uma última mensagem.</p>
    `;

    messageList.appendChild(prompt);

    const sentMessage = document.createElement("article");

    sentMessage.className = "message outgoing";
    sentMessage.innerHTML = `
      <div class="message-text">
        Ela tentou cometer suicídio.
      </div>
      <div class="message-time">agora</div>
    `;

    messageList.appendChild(sentMessage);
    messageList.scrollTop = messageList.scrollHeight;

    showScreen("messages-screen");

    const finishButton = document.createElement("button");

    finishButton.className = "story-continue";
    finishButton.type = "button";
    finishButton.textContent = "Finalizar";

    finishButton.addEventListener("click", () => {
      renderEnding();
      showScreen("ending-screen");
    });

    if (footer) {
      footer.appendChild(finishButton);
    } else {
      messageList.appendChild(finishButton);
    }
  }

  // ==================================================
  // ENCERRAMENTO
  // ==================================================

  function renderEnding() {
    const eyebrow = $("#ending-screen .eyebrow");
    const title = $("#ending-message");
    const details = $("#ending-details");

    if (eyebrow) {
      eyebrow.textContent = story.ending.eyebrow;
    }

    if (title) {
      title.textContent = story.ending.title;
    }

    if (details) {
      details.innerHTML = `
        <div class="ending-content">
          ${story.ending.details.map((paragraph) => `
            <p>${escapeHTML(paragraph)}</p>
          `).join("")}

          <h3>${escapeHTML(story.ending.campaignTitle)}</h3>

          <p>
            <strong>
              ${escapeHTML(story.ending.campaignSubtitle)}
            </strong>
          </p>

          <p class="ending-credits">
            ${escapeHTML(story.ending.credits)}
          </p>
        </div>
      `;
    }
  }

  // ==================================================
  // TRANSIÇÕES ENTRE CAPÍTULOS
  // ==================================================

  function advanceStory() {
    const stage = getStage();
    const label = $("#transition-label");
    const text = $("#transition-text");

    if (label) {
      label.textContent =
        stageIndex < story.stages.length - 1
          ? story.stages[stageIndex + 1].date
          : "O que não aparece na tela";
    }

    if (text) {
      text.textContent = stage.transition || "";
    }

    showScreen("transition-screen");
  }

  function continueTransition() {
    if (stageIndex < story.stages.length - 1) {
      stageIndex++;
      finalReplyShown = false;

      renderLockScreen();
      renderConversationList();
      showScreen("lock-screen");
    } else {
      showFinalReply();
    }
  }

  // ==================================================
  // EVENTOS
  // ==================================================

  app.addEventListener("click", (event) => {
    const control = event.target.closest("[data-action]");

    if (!control || !app.contains(control)) return;

    switch (control.dataset.action) {
      case "lock":
        renderLockScreen();
        showScreen("lock-screen");
        break;
        
      case "unlock":
        unlockPhone();
        break;

      case "open-conversation":
        renderConversation();
        break;

      case "open-social":
        openSocialProfile();
        break;

      case "messages":
        if (currentScreen === "social-screen") {
          advanceStory();
        } else {
          backToConversations();
        }
        break;

      case "advance-story":
        advanceStory();
        break;

      case "continue-transition":
        continueTransition();
        break;
    }
  });

  app.addEventListener("keydown", (event) => {
    const notification = event.target.closest(
      '.notification[data-action="unlock"]'
    );

    if (
      notification &&
      (event.key === "Enter" || event.key === " ")
    ) {
      event.preventDefault();
      unlockPhone();
    }
  });

  $("#unlock-button")?.addEventListener(
    "click",
    unlockPhone
  );

  $("#back-to-conversations")?.addEventListener(
    "click",
    backToConversations
  );

  $("#restart-button")?.addEventListener("click", () => {
    cancelAnimation();

    stageIndex = 0;
    finalReplyShown = false;

    renderLockScreen();
    renderConversationList();
    showScreen("lock-screen");
  });

  // ==================================================
  // INICIALIZAÇÃO
  // ==================================================

  document.title = story.appName;

  renderLockScreen();
  renderConversationList();
  showScreen("lock-screen");

  console.info("Entre Linhas iniciado.");
})();
