export type Internationalization = {
  navigation: {
    about: string;
    projects: string;
    contact: string;
    skills: string;
  },
  hero: {
    about: string;
    skills: string;
  },
  about: {
    title: string,
    content: string,
    button: string
  },
  skills: {
    title: string,
    content: string
  },
  projects: {
    title: string,
    content: string,
    buttons: {
      github: string,
      demo: string
    },
    quizyme: {
      title: string,
      content: string
    },
    trycrypto: {
      title: string,
      content: string
    },
    gptprompts: {
      title: string,
      content: string
    },
    copyContent: {
      login: string,
      password: string
      toastText: string
    }
  },
  contact: {
    title: string,
    content: string,
  }
}