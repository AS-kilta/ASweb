import type { Language } from "./translations"

type Navi = {
  title: { [K in Language]?: string },
  link: { [K in Language]?: string },
  subnavi?: Navi[]
}

export default <Navi[]> [
  {
    title: {
      fi: "Kilta",
      en: "Guild"
    },
    link: {
      fi: "/guild",
      en: "/en/guild"
    },
    subnavi: [
      {
        title: {
          fi: "Hallitus",
          en: "Board"
        },
        link: {
          fi: "/guild/board",
          en: "/en/guild/board"
        }
      },
      {
        title: {
          fi: "Toimihenkilöt",
          en: "Officials"
        },
        link: {
          fi: "/guild/officials",
          en: "/en/guild/officials"
        }
      },
      {
        title: {
          fi: "Jäsenyys",
          en: "Membership"
        },
        link: {
          fi: "/guild/membership",
          en: "/en/guild/membership"
        }
      },
      {
        title: {
          fi: "Arkisto",
          en: "Archive"
        },
        link: {
          fi: "/guild/archive",
          en: "/en/guild/archive"
        }
      },
      {
        title: {
          fi: "Asiakirjat",
          en: "Documents"
        },
        link: {
          fi: "/guild/documents",
          en: "/en/guild/documents"
        }
      }
    ]
  },
  {
    title: {
      fi: "Abeille"
    },
    link: {
      fi: "/abit"
    }
  },
  {
    title: {
      fi: "Fukseille",
      en: "Fuksis"
    },
    link: {
      fi: "/fuksis",
      en: "/en/fuksis"
    }
  },
  {
    title: {
      fi: "Yrityksille",
      en: "Corporate Relations"
    },
    link: {
      fi: "/partners",
      en: "/en/partners"
    }
  },
  {
    title: {
      fi: "Yhteystiedot",
      en: "Contact"
    },
    link: {
      fi: "/contact",
      en: "/en/contact"
    }
  }
]