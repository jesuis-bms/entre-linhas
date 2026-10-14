
window.STORY_DATA = {
  appName: "Entre Linhas",

  // Personagem central da história
  profile: {
    name: "Coraline 💯 Cor",
    handle: "@coracoraline",
    avatar: "🤟",
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
        app: "Mensagens",
        icon: "📞",
        time: "agora",
        title: "Sala 4 | conversas",
        message: "gente, olha isso KKKKKKK"
      },

      conversation: {
        id: "turma",
        name: "Sala 4 | conversas",
        avatar: "📙",
        description: "Grupo da turma",
        preview: "gente, olha isso KKKKKKK",
        time: "09:41",
        unread: 1,

        messages: [
          {
            sender: "Ju",
            avatar: "J",
            time: "09:41",
            text: "gente, olha isso KKKKKKK"
          },
          {
            sender: "Rafa",
            avatar: "💅",
            time: "09:41",
            text: "Júlia, apaga isso. Ela vai ver."
          },
          {
            sender: "Ju",
            avatar: "J",
            time: "09:42",
            text: "ué, eu só compartilhei"
          },
          {
            sender: "Heitor",
            avatar: "😴",
            time: "09:44",
            text: "ae, o perfil dela tá aqui"
          },
          {
            sender: "Heitor",
            avatar: "😴",
            time: "09:44",
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
              author: "Jujuba",
              handle: "@jujuxyz",
              avatar: "🤩",
              text: "credo, alguém tira essa menina da minha tela",
              time: "há 2 horas",
              tone: "hostile"
            },
            {
              author: "thr",
              handle: "@heithorr244",
              avatar: "😴",
              text: "KKKKKKKKKK",
              time: "há 2 horas",
              tone: "hostile"
            },
            {
              author: "Bia",
              handle: "@bia",
              avatar: "🎸",
              text: "Já pensou em ser fotógrafa?",
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
        app: "Mensagens",
        icon: "📞",
        time: "agora",
        title: "Sala 704 | conversas",
        message: "Você tem mensagens não lidas."
      },

      conversation: {
        id: "turma",
        name: "Sala 4 | conversas",
        avatar: "📙",
        description: "Grupo da turma",
        preview: "Ju enviou 1 mensagem(s)",
        time: "18:27",
        unread: 8,

        messages: [
          {
            sender: "Ju",
            avatar: "J",
            time: "18:19",
            text: "aiai, ela me bloqueou KKKKK"
          },
          {
            sender: "Heitor",
            avatar: "😴",
            time: "18:20",
            text: "depois do que a gente comentou, surpresa nenhuma"
          },
          {
            sender: "Ju",
            avatar: "J",
            time: "18:21",
            text: "vou postar outra coisa então"
          },
          {
            sender: "Rafa",
            avatar: "💅",
            time: "18:22",
            text: "isso já passou do limite."
          },
          {
            sender: "Ju",
            avatar: "J",
            time: "18:23",
            text: "podia ser pior pq podia ser problema meu"
          },
          {
            sender: "Bia",
            avatar: "🎸",
            time: "18:24",
            text: "vocês sabem que isso machuca, né?"
          },
          {
            sender: "Heitor",
            avatar: "😴",
            time: "18:25",
            text: "então por que ela não desativa o perfil?"
          },
          {
            sender: "Ju",
            avatar: "J",
            time: "18:26",
            text: "Olha a nova publicação",
          },
          {
            sender: "Ju",
            avatar: "J",
            time: "18:26",
            type: "link",
            text: "social.app/coracoraline",
            target: "social",
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
              author: "Jujuba",
              handle: "@jujuxyz",
              avatar: "🤩",
              text: "credo, alguém tira essa coisa da minha tela",
              time: "há 2 dias",
              tone: "hostile"
            },
            {
              author: "thr",
              handle: "@heitorr244",
              avatar: "😴",
              text: "KKKKKKKKKK",
              time: "há 2 dias",
              tone: "hostile"
            },
            {
              author: "Bia",
              handle: "@bia",
              avatar: "🎸",
              text: "Já pensou em ser fotógrafa?",
              time: "há 2 dias",
              tone: "supportive"
            }
          ]
        },
        {
          id: "post-2",
          author: "Coraline 💯 Cor",
          handle: "@coracoraline",
          avatar: "🤟",
          date: "16 de outubro",
          visual: "🎥",
          visualLabel: "Um vídeo gravado no corredor da escola",
          caption: "não sabia que estavam gravando. apaguei o vídeo original, mas parece que não adiantou.",
          likes: 42,

          comments: [
            {
              author: "Jujuba",
              handle: "@jujuxyz",
              avatar: "🤩",
              text: "o melhor é a cara dela no final KKKKKKKK",
              time: "há 15 minutos",
              tone: "hostile"
            },
            {
              author: "thr",
              handle: "@heitorr244",
              avatar: "😴",
              text: "a piada já vem pronta",
              time: "há 12 minutos",
              tone: "hostile"
            },
            {
              author: "Bia",
              handle: "@bia",
              avatar: "🎸",
              text: "apaguem isso. ela não deu liberdade pra esse tipo de 'brincadeira'.",
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
      time: "21:12",

      notification: {
        app: "Mensagens",
        icon: "📞",
        time: "agora",
        title: "Bia",
        message: "Você tem mensagens não lidas."
      },

      conversation: {
        id: "turma",
        name: "Sala 4 | conversas",
        avatar: "📙",
        description: "Grupo da turma",
        preview: "Alguém sabe dela?",
        time: "21:12",
        unread: 5,

        messages: [
          {
            sender: "Bia",
            avatar: "🎸",
            time: "21:08",
            text: "gente, vocês têm notícias da Aline?"
          },
          {
            sender: "Rafa",
            avatar: "💅",
            time: "21:09",
            text: "eu tentei falar c ela ontem, mas ela nn respondeu."
          },
          {
            sender: "Heitor",
            avatar: "😴",
            time: "21:10",
            text: "talvez ela passou mal ou só nn qr ir p escola."
          },
          {
            sender: "Bia",
            avatar: "🎸",
            time: "21:11",
            text: "isso não é, porque ela me disse que não queria mais abrir as redes sociais"
          },
          {
            sender: "Bia",
            avatar: "🎸",
            time: "21:12",
            text: "tá vendo o que vocês fizeram?"
          },
          {
            sender: "Ju",
            avatar: "J",
            time: "21:12",
            text: "mas era só brincadeira..."
          },
          {
            sender: "Rafa",
            avatar: "💅",
            time: "21:13",
            text: "'brincadeira' depois que a consciência, pesa, né, anjo?"
          },
          {
            sender: "Bia",
            avatar: "🎸",
            time: "21:15",
            text: "ela claramente não tá bem. Viram o último post?"
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
          likes: 16,

          comments: [
            {
              author: "Jujuba",
              handle: "@jujuxyz",
              avatar: "🤩",
              text: "credo, alguém tira essa menina da minha tela",
              time: "há 7 dias",
              tone: "hostile"
            },
            {
              author: "thr",
              handle: "@heitorr244",
              avatar: "😴",
              text: "KKKKKKKKKK",
              time: "há 7 dias",
              tone: "hostile"
            },
            {
              author: "Bia",
              handle: "@bia",
              avatar: "🎸",
              text: "Já pensou em ser fotógrafa?",
              time: "há 7 dias",
              tone: "supportive"
            }
          ]
        },
        {
          id: "post-2",
          author: "Coraline 💯 Cor",
          handle: "@coracoraline",
          avatar: "🤟",
          date: "16 de outubro",
          visual: "🎥",
          visualLabel: "Um vídeo gravado no corredor da escola",
          caption: "não sabia que estavam gravando. apaguei o vídeo original, mas parece que não adiantou.",
          likes: 37,

          comments: [
            {
              author: "Jujuba",
              handle: "@jujuxyz",
              avatar: "🤩",
              text: "o melhor é a cara dela no final KKKKKKKK",
              time: "há 4 dias",
              tone: "hostile"
            },
            {
              author: "thr",
              handle: "@heitorr244",
              avatar: "😴",
              text: "a piada já vem pronta",
              time: "há 4 dias",
              tone: "hostile"
            },
            {
              author: "Bia",
              handle: "@bia",
              avatar: "🎸",
              text: "apaguem isso. ela não deu liberdade pra esse tipo de 'brincadeira'.",
              time: "há 4 dias",
              tone: "supportive"
            }
          ]
        },
        {
          id: "post-3",
          author: "Coraline 💯 Cor",
          handle: "@coracoraline",
          avatar: "🤟",
          date: "19 de outubro",
          visual: "🌧️",
          visualLabel: "Uma janela em um dia chuvoso",
          caption: "às vezes parece que não importa o que eu faça, nada muda.",
          likes: 6,

          comments: [
            {
              author: "Jujuba",
              handle: "@jujuxyz",
              avatar: "🤩",
              text: "odeio gnt dramática",
              time: "há 1 dia",
              tone: "hostile"
            },
            {
              author: "Bia",
              handle: "@bia",
              avatar: "B",
              text: "Aline, olha o pv depois",
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
