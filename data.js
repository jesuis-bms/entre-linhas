
window.STORY_DATA = {
  appName: "Entre Linhas",

  // Personagem central da história
  profile: {
    name: "Coraline 💯 Cor",
    handle: "@coracoraline",
    avatar: "C",
    bio: "fotos, músicas e algumas coisas sobre mim.",
    stats: {
      posts: 12,
      followers: 248,
      following: 193
    }
  },

  // Cada etapa representa uma nova visita ao celular.
  // As datas avançam conforme a história se desenvolve.
  stages: [
    {
      id: 0,
      date: "Quarta-feira, 14 de outubro",
      time: "09:41",

      notification: {
        app: "Papo",
        icon: "P",
        time: "agora",
        title: "7º B | conversas",
        message: "Gente, vocês viram o que postaram da Aline?"
      },

      conversation: {
        id: "turma",
        name: "Sala 4 | conversas",
        avatar: "7B",
        description: "Grupo da turma",
        preview: "Vocês viram o que postaram?",
        time: "09:41",
        unread: 3,

        messages: [
          {
            sender: "Ju",
            avatar: "J",
            time: "09:36",
            text: "gente, olha isso KKKKKKK"
          },
          {
            sender: "Rafa",
            avatar: "R",
            time: "09:37",
            text: "Júlia, apaga isso. Ela vai ver."
          },
          {
            sender: "Ju",
            avatar: "J",
            time: "09:37",
            text: "ué, eu só compartilhei"
          },
          {
            sender: "Nico",
            avatar: "N",
            time: "09:39",
            text: "o perfil dela tá aqui"
          },
          {
            sender: "Nico",
            avatar: "N",
            time: "09:40",
            type: "link",
            text: "social.app/coracoraline",
            target: "social"
          },
          {
            sender: "Você",
            avatar: "V",
            time: "09:41",
            text: "..."
          }
        ]
      },

      posts: [
        {
          id: "post-1",
          author: "Coraline 💯 Cor",
          handle: "@coracoraline",
          avatar: "🤟",
          date: "13 de outubro",
          visual: "📷",
          visualLabel: "Uma foto no pátio da escola",
          caption: "dia comum, gente estranha e uma vontade enorme de ir pra casa.",
          likes: 18,

          comments: [
            {
              author: "Manuela",
              handle: "@manu",
              avatar: "M",
              text: "alguém tira essa menina da minha tela",
              time: "há 2 horas",
              tone: "hostile"
            },
            {
              author: "Nico",
              handle: "@nico",
              avatar: "N",
              text: "KKKKKKKKKK",
              time: "há 2 horas",
              tone: "hostile"
            },
            {
              author: "Bia",
              handle: "@bia",
              avatar: "B",
              text: "Clara, gostei da foto!",
              time: "há 1 hora",
              tone: "supportive"
            }
          ]
        }
      ],

      transition: "Você fecha o perfil. A notificação continua ali."
    },

    {
      id: 1,
      date: "Sexta-feira, 16 de outubro",
      time: "18:27",

      notification: {
        app: "Papo",
        icon: "P",
        time: "agora",
        title: "7º B | conversas",
        message: "Manuela enviou 8 mensagens"
      },

      conversation: {
        id: "turma",
        name: "Sala 4 | conversas",
        avatar: "7B",
        description: "Grupo da turma",
        preview: "Manuela enviou 8 mensagens",
        time: "18:27",
        unread: 8,

        messages: [
          {
            sender: "Manuela",
            avatar: "M",
            time: "18:19",
            text: "ela me bloqueou KKKKK"
          },
          {
            sender: "Nico",
            avatar: "N",
            time: "18:20",
            text: "depois do que vocês comentaram, surpresa nenhuma"
          },
          {
            sender: "Manuela",
            avatar: "M",
            time: "18:21",
            text: "vou postar outra coisa então"
          },
          {
            sender: "Rafa",
            avatar: "R",
            time: "18:22",
            text: "isso já passou do limite."
          },
          {
            sender: "Manuela",
            avatar: "M",
            time: "18:23",
            text: "ninguém te obrigou a olhar"
          },
          {
            sender: "Bia",
            avatar: "B",
            time: "18:24",
            text: "vocês sabem que ela tá lendo essas coisas, né?"
          },
          {
            sender: "Nico",
            avatar: "N",
            time: "18:25",
            text: "então por que ela não desativa o perfil?"
          },
          {
            sender: "Manuela",
            avatar: "M",
            time: "18:26",
            type: "link",
            text: "Olha a nova publicação",
            target: "social"
          }
        ]
      },

      posts: [
        {
          id: "post-1",
          author: "Clara Martins",
          handle: "@claram",
          avatar: "C",
          date: "13 de outubro",
          visual: "📷",
          visualLabel: "Uma foto no pátio da escola",
          caption: "dia comum, gente estranha e uma vontade enorme de ir pra casa.",
          likes: 18,

          comments: [
            {
              author: "Manuela",
              handle: "@manu",
              avatar: "M",
              text: "alguém tira essa menina da minha tela",
              time: "há 2 dias",
              tone: "hostile"
            },
            {
              author: "Nico",
              handle: "@nico",
              avatar: "N",
              text: "KKKKKKKKKK",
              time: "há 2 dias",
              tone: "hostile"
            },
            {
              author: "Bia",
              handle: "@bia",
              avatar: "B",
              text: "Clara, gostei da foto!",
              time: "há 2 dias",
              tone: "supportive"
            }
          ]
        },
        {
          id: "post-2",
          author: "Clara Martins",
          handle: "@claram",
          avatar: "C",
          date: "16 de outubro",
          visual: "🎥",
          visualLabel: "Um vídeo gravado no corredor da escola",
          caption: "não sabia que estavam gravando. apaguei o vídeo original, mas parece que não adiantou.",
          likes: 42,

          comments: [
            {
              author: "Manuela",
              handle: "@manu",
              avatar: "M",
              text: "o melhor é a cara dela no final",
              time: "há 15 minutos",
              tone: "hostile"
            },
            {
              author: "Nico",
              handle: "@nico",
              avatar: "N",
              text: "isso vai ficar famoso na turma",
              time: "há 12 minutos",
              tone: "hostile"
            },
            {
              author: "Bia",
              handle: "@bia",
              avatar: "B",
              text: "apaguem isso. ela não autorizou vocês.",
              time: "há 5 minutos",
              tone: "supportive"
            }
          ]
        }
      ],

      transition: "Dessa vez, você percebe que a publicação já foi compartilhada."
    },

    {
      id: 2,
      date: "Terça-feira, 20 de outubro",
      time: "21:16",

      notification: {
        app: "Papo",
        icon: "P",
        time: "agora",
        title: "Bia",
        message: "Você precisa ver o que aconteceu com a Clara."
      },

      conversation: {
        id: "turma",
        name: "7º B | conversas",
        avatar: "7B",
        description: "Grupo da turma",
        preview: "Alguém sabe dela?",
        time: "21:16",
        unread: 5,

        messages: [
          {
            sender: "Bia",
            avatar: "B",
            time: "21:08",
            text: "gente, a Clara não foi à aula hoje"
          },
          {
            sender: "Rafa",
            avatar: "R",
            time: "21:09",
            text: "nem ontem. eu tentei falar com ela e ela não respondeu"
          },
          {
            sender: "Nico",
            avatar: "N",
            time: "21:10",
            text: "talvez só esteja de saco cheio da escola"
          },
          {
            sender: "Bia",
            avatar: "B",
            time: "21:11",
            text: "ela me disse que não queria mais abrir as redes sociais. vocês viram o que fizeram com ela?"
          },
          {
            sender: "Manuela",
            avatar: "M",
            time: "21:12",
            text: "eu não achei que ia chegar nesse ponto"
          },
          {
            sender: "Rafa",
            avatar: "R",
            time: "21:13",
            text: "mas chegou. e não foi do nada."
          },
          {
            sender: "Bia",
            avatar: "B",
            time: "21:15",
            text: "a mãe dela avisou que ela está recebendo ajuda. por favor, parem de compartilhar as coisas."
          }
        ]
      },

      posts: [
        {
          id: "post-1",
          author: "Clara Martins",
          handle: "@claram",
          avatar: "C",
          date: "13 de outubro",
          visual: "📷",
          visualLabel: "Uma foto no pátio da escola",
          caption: "dia comum, gente estranha e uma vontade enorme de ir pra casa.",
          likes: 18,

          comments: [
            {
              author: "Manuela",
              handle: "@manu",
              avatar: "M",
              text: "alguém tira essa menina da minha tela",
              time: "há 7 dias",
              tone: "hostile"
            },
            {
              author: "Nico",
              handle: "@nico",
              avatar: "N",
              text: "KKKKKKKKKK",
              time: "há 7 dias",
              tone: "hostile"
            },
            {
              author: "Bia",
              handle: "@bia",
              avatar: "B",
              text: "Clara, gostei da foto!",
              time: "há 7 dias",
              tone: "supportive"
            }
          ]
        },
        {
          id: "post-2",
          author: "Clara Martins",
          handle: "@claram",
          avatar: "C",
          date: "16 de outubro",
          visual: "🎥",
          visualLabel: "Um vídeo gravado no corredor da escola",
          caption: "não sabia que estavam gravando. apaguei o vídeo original, mas parece que não adiantou.",
          likes: 42,

          comments: [
            {
              author: "Manuela",
              handle: "@manu",
              avatar: "M",
              text: "o melhor é a cara dela no final",
              time: "há 4 dias",
              tone: "hostile"
            },
            {
              author: "Nico",
              handle: "@nico",
              avatar: "N",
              text: "isso vai ficar famoso na turma",
              time: "há 4 dias",
              tone: "hostile"
            },
            {
              author: "Bia",
              handle: "@bia",
              avatar: "B",
              text: "apaguem isso. ela não autorizou vocês.",
              time: "há 4 dias",
              tone: "supportive"
            }
          ]
        },
        {
          id: "post-3",
          author: "Clara Martins",
          handle: "@claram",
          avatar: "C",
          date: "19 de outubro",
          visual: "🌧️",
          visualLabel: "Uma janela em um dia chuvoso",
          caption: "às vezes parece que não importa o que eu faça, nada muda.",
          likes: 6,

          comments: [
            {
              author: "Nico",
              handle: "@nico",
              avatar: "N",
              text: "lá vem drama",
              time: "há 1 dia",
              tone: "hostile"
            },
            {
              author: "Bia",
              handle: "@bia",
              avatar: "B",
              text: "Clara, estou aqui. pode falar comigo.",
              time: "há 20 horas",
              tone: "supportive"
            }
          ]
        }
      ],

      transition: "A última publicação de Clara foi feita na noite anterior. Ela não voltou à escola."
    }
  ],

  ending: {
    eyebrow: "O que não aparece na tela",

    title: "Uma mensagem que ninguém queria receber.",

    details: [
      "Na manhã seguinte, a turma recebeu a notícia: Clara havia passado por uma crise grave e tentado tirar a própria vida. Ela estava hospitalizada e recebendo cuidados.",

      "O bullying não explica sozinho tudo o que uma pessoa enfrenta. Mas humilhações repetidas, ameaças e ataques públicos podem agravar profundamente o sofrimento de alguém.",

      "As mensagens não desapareceram quando as pessoas fecharam o aplicativo. Os compartilhamentos continuaram circulando. E quem viu o que estava acontecendo também teve escolhas a fazer.",

      "Não compartilhe humilhações. Guarde evidências, denuncie o conteúdo e procure um adulto de confiança. Se alguém estiver em perigo imediato, peça ajuda a um adulto e aos serviços de emergência.",

      "Por trás de cada perfil existe uma pessoa. Na internet, como fora dela, suas escolhas têm consequências."
    ],

    campaignTitle: "Entre Linhas",
    campaignSubtitle: "Antes de compartilhar, pense. Antes de rir, perceba. Antes que piore, intervenha.",

    credits: "Uma campanha de conscientização sobre bullying e cyberbullying."
  }
};
