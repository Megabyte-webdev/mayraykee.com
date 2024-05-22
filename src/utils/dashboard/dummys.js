import { categories } from "../constants";
import Laptop from "../../assets/jpgs/lappy.jpg";

export const assigentDummy = [
  {
    title: "Web Design",
    score: 7,
  },
  {
    title: "Graphics Design",
    score: 8,
  },
];

export const scheduleDummy = [
  {
    title: "Web Design",
    date: "January 5, 2021",
    time: "09.00 - 10.00 AM",
    name: "Ms. Samantha William",
    tagColor: "bg-black",
  },
  {
    title: "Interaction Design",
    date: "January 17, 2021",
    time: "09.00 - 10.00 AM",
    name: "Mr. Tony Soap",
    tagColor: "bg-green",
  },
  {
    title: "Basic Programming",
    date: "January 5, 2021",
    time: "09.00 - 10.00 AM",
    name: "Ms. Samantha William",
    tagColor: "bg-yellow-400",
  },
];

export const timelineDummy = [
  {
    date: "Today",
    events: [
      {
        time: "10:10 AM",
        event: {
          initials: "KH",
          initialsBackground: "bg-[#ffbabf]",
          name: "Karen Hope",
          extraText: `attach two files to ${categories[0].name}`,
        },
        attachments: [
          {
            name: "Module1_GraphicDesign.doc",
            size: "1.5mb",
          },
          {
            name: "Module2_GraphicDesign.doc",
            size: "1.5mb",
          },
        ],
      },
      {
        time: "9:30 AM",
        event: {
          initials: "JN",
          initialsBackground: "bg-[#fec64f]",
          name: "Jordan Nico",
          extraText: `invited you to ${categories[0].name} Group Chat`,
        },
        attachments: [],
      },
      {
        time: "9:10 AM",
        event: {
          initials: "JA",
          initialsBackground: "bg-[#3cc2e0]",
          name: "Johny Ahmed",
          extraText: `accepted your invitation to ${categories[1].name} Courses`,
        },
        attachments: [],
      },
      {
        time: "8:45 AM",
        event: {
          initials: "SW",
          initialsBackground: "bg-[#fc6b57]",
          name: "Samantha William",
          extraText: `removed you from ${categories[2].name} Courses groups`,
        },
        attachments: [],
      },
    ],
  },
  {
    date: "Yesterday",
    events: [
      {
        time: "12:10 AM",
        event: {
          initials: "NA",
          initialsBackground: "bg-[#ffbabf]",
          name: "Nadila Adja",
          extraText: `mentioned you in a discussion chat in ${categories[3].name} Courses`,
        },
        attachments: [],
      },
      {
        time: "10:40 AM",
        event: {
          initials: "TS",
          initialsBackground: "bg-[#374557]",
          name: "Tony Soap",
          extraText: `has commented on your topic in ${categories[0].name} Group Chat`,
        },
        attachments: [],
      },
      {
        time: "8:10 AM",
        event: {
          initials: "DH",
          initialsBackground: "bg-[#3cc2e0]",
          name: "Dulla Hann",
          extraText: `joined ${categories[0].name} Courses`,
        },
        attachments: [],
      },
    ],
  },
];

export const coursesContentDummy = [
  {
    id: 1,
    name: "BSc (Hons) Business Psychology",
    shortDesc:
      "Learn everything you need to become a secure cyber professional",
    mainDesc:
      "This knowledge can be employed to advance in your current work, to prepare for international jobs and careers, and to generally understand the importance and role of international business practice on globalization and geopolitics",
    duration: "1 year",
    rating: 5.0,
    review: [{}, {}, {}],
    authors: [
      {
        initials: "KH",
        initialsBackground: "bg-[#ffbabf]",
        name: "Karen Hope",
        extraText: null,
      },
      {
        initials: "JN",
        initialsBackground: "bg-[#fec64f]",
        name: "Jordan Nico",
        extraText: `invited you to ${categories[0].name} Group Chat`,
      },
    ],
    slots: 40,
    curriculum: [
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
    ],
    objective: "Nothing to show in objectives",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    outline: "Nothing to show in outline",
    discussion: "Nothing to show in discussion",
    location: "Online",
    introVideo: "",
    students: [{}, {}, {}],
    things_to_learn: [
      "Basic Programming",
      "Wireframe",
      "Create a Website",
      "User Interface Design",
      "Basic HTML and CSS",
      "Create Responsive Website",
    ],
    price: "49",
    thumbnail: Laptop,
  },
  {
    id: 3,
    name: "BSc (Hons) Business Psychology",
    shortDesc:
      "Learn everything you need to become a secure cyber professional",
    mainDesc:
      "This knowledge can be employed to advance in your current work, to prepare for international jobs and careers, and to generally understand the importance and role of international business practice on globalization and geopolitics",
    duration: "1 year",
    rating: 5.0,
    review: [],
    authors: [
      {
        initials: "KH",
        initialsBackground: "bg-[#ffbabf]",
        name: "Karen Hope",
        extraText: null,
      },
    ],
    slots: 40,
    curriculum: [
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
    ],
    objective: "Nothing to show",
    about: "Nothing to show",
    outline: "Nothing to show",
    location: "Online",
    introVideo: "",
    things_to_learn: [
      "Basic Programming",
      "Wireframe",
      "Create a Website",
      "User Interface Design",
      "Basic HTML and CSS",
      "Create Responsive Website",
    ],
    price: "49",
    thumbnail: Laptop,
  },
  {
    id: 4,
    name: "BSc (Hons) Business Psychology",
    shortDesc:
      "Learn everything you need to become a secure cyber professional",
    mainDesc:
      "This knowledge can be employed to advance in your current work, to prepare for international jobs and careers, and to generally understand the importance and role of international business practice on globalization and geopolitics",
    duration: "1 year",
    rating: 5.0,
    review: [],
    authors: [
      {
        initials: "KH",
        initialsBackground: "bg-[#ffbabf]",
        name: "Karen Hope",
        extraText: null,
      },
    ],
    slots: 40,
    curriculum: [
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
    ],
    objective: "Nothing to show",
    about: "Nothing to show",
    outline: "Nothing to show",
    location: "Online",
    introVideo: "",
    things_to_learn: [
      "Basic Programming",
      "Wireframe",
      "Create a Website",
      "User Interface Design",
      "Basic HTML and CSS",
      "Create Responsive Website",
    ],
    price: "49",
    thumbnail: Laptop,
  },
  {
    id: 1,
    name: "BSc (Hons) Business Psychology",
    shortDesc:
      "Learn everything you need to become a secure cyber professional",
    mainDesc:
      "This knowledge can be employed to advance in your current work, to prepare for international jobs and careers, and to generally understand the importance and role of international business practice on globalization and geopolitics",
    duration: "1 year",
    rating: 5.0,
    review: [],
    authors: [
      {
        initials: "KH",
        initialsBackground: "bg-[#ffbabf]",
        name: "Karen Hope",
        extraText: null,
      },
    ],
    slots: 40,
    curriculum: [
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
    ],
    objective: "Nothing to show",
    about: "Nothing to show",
    outline: "Nothing to show",
    location: "Online",
    introVideo: "",
    things_to_learn: [
      "Basic Programming",
      "Wireframe",
      "Create a Website",
      "User Interface Design",
      "Basic HTML and CSS",
      "Create Responsive Website",
    ],
    price: "49",
    thumbnail: Laptop,
  },
  {
    id: 5,
    name: "BSc (Hons) Business Psychology",
    shortDesc:
      "Learn everything you need to become a secure cyber professional",
    mainDesc:
      "This knowledge can be employed to advance in your current work, to prepare for international jobs and careers, and to generally understand the importance and role of international business practice on globalization and geopolitics",
    duration: "1 year",
    rating: 5.0,
    review: [],
    authors: [
      {
        initials: "KH",
        initialsBackground: "bg-[#ffbabf]",
        name: "Karen Hope",
        extraText: null,
      },
    ],
    slots: 40,
    curriculum: [
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
    ],
    objective: "Nothing to show",
    about: "Nothing to show",
    outline: "Nothing to show",
    location: "Online",
    introVideo: "",
    things_to_learn: [
      "Basic Programming",
      "Wireframe",
      "Create a Website",
      "User Interface Design",
      "Basic HTML and CSS",
      "Create Responsive Website",
    ],
    price: "49",
    thumbnail: Laptop,
  },
  {
    id: 6,
    name: "BSc (Hons) Business Psychology",
    shortDesc:
      "Learn everything you need to become a secure cyber professional",
    mainDesc:
      "This knowledge can be employed to advance in your current work, to prepare for international jobs and careers, and to generally understand the importance and role of international business practice on globalization and geopolitics",
    duration: "1 year",
    rating: 5.0,
    review: [],
    authors: [
      {
        initials: "KH",
        initialsBackground: "bg-[#ffbabf]",
        name: "Karen Hope",
        extraText: null,
      },
    ],
    slots: 40,
    curriculum: [
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
    ],
    objective: "Nothing to show",
    about: "Nothing to show",
    outline: "Nothing to show",
    location: "Online",
    introVideo: "",
    things_to_learn: [
      "Basic Programming",
      "Wireframe",
      "Create a Website",
      "User Interface Design",
      "Basic HTML and CSS",
      "Create Responsive Website",
    ],
    price: "49",
    thumbnail: Laptop,
  },
  {
    id: 7,
    name: "BSc (Hons) Business Psychology",
    shortDesc:
      "Learn everything you need to become a secure cyber professional",
    mainDesc:
      "This knowledge can be employed to advance in your current work, to prepare for international jobs and careers, and to generally understand the importance and role of international business practice on globalization and geopolitics",
    duration: "1 year",
    rating: 5.0,
    review: [],
    authors: [
      {
        initials: "KH",
        initialsBackground: "bg-[#ffbabf]",
        name: "Karen Hope",
        extraText: null,
      },
    ],
    slots: 40,
    curriculum: [
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
    ],
    objective: "Nothing to show",
    about: "Nothing to show",
    outline: "Nothing to show",
    location: "Online",
    introVideo: "",
    things_to_learn: [
      "Basic Programming",
      "Wireframe",
      "Create a Website",
      "User Interface Design",
      "Basic HTML and CSS",
      "Create Responsive Website",
    ],
    price: "49",
    thumbnail: Laptop,
  },
  {
    id: 8,
    name: "BSc (Hons) Business Psychology",
    shortDesc:
      "Learn everything you need to become a secure cyber professional",
    mainDesc:
      "This knowledge can be employed to advance in your current work, to prepare for international jobs and careers, and to generally understand the importance and role of international business practice on globalization and geopolitics",
    duration: "1 year",
    rating: 5.0,
    review: [],
    authors: [
      {
        initials: "KH",
        initialsBackground: "bg-[#ffbabf]",
        name: "Karen Hope",
        extraText: null,
      },
    ],
    slots: 40,
    curriculum: [
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
    ],
    objective: "Nothing to show",
    about: "Nothing to show",
    outline: "Nothing to show",
    location: "Online",
    introVideo: "",
    things_to_learn: [
      "Basic Programming",
      "Wireframe",
      "Create a Website",
      "User Interface Design",
      "Basic HTML and CSS",
      "Create Responsive Website",
    ],
    price: "49",
    thumbnail: Laptop,
  },
  {
    id: 9,
    name: "BSc (Hons) Business Psychology",
    shortDesc:
      "Learn everything you need to become a secure cyber professional",
    mainDesc:
      "This knowledge can be employed to advance in your current work, to prepare for international jobs and careers, and to generally understand the importance and role of international business practice on globalization and geopolitics",
    duration: "1 year",
    rating: 5.0,
    review: [],
    authors: [
      {
        initials: "KH",
        initialsBackground: "bg-[#ffbabf]",
        name: "Karen Hope",
        extraText: null,
      },
    ],
    slots: 40,
    curriculum: [
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
    ],
    objective: "Nothing to show",
    about: "Nothing to show",
    outline: "Nothing to show",
    location: "Online",
    introVideo: "",
    things_to_learn: [
      "Basic Programming",
      "Wireframe",
      "Create a Website",
      "User Interface Design",
      "Basic HTML and CSS",
      "Create Responsive Website",
    ],
    price: "49",
    thumbnail: Laptop,
  },
  {
    id: 10,
    name: "BSc (Hons) Business Psychology",
    shortDesc:
      "Learn everything you need to become a secure cyber professional",
    mainDesc:
      "This knowledge can be employed to advance in your current work, to prepare for international jobs and careers, and to generally understand the importance and role of international business practice on globalization and geopolitics",
    duration: "1 year",
    rating: 5.0,
    review: [],
    authors: [
      {
        initials: "KH",
        initialsBackground: "bg-[#ffbabf]",
        name: "Karen Hope",
        extraText: null,
      },
    ],
    slots: 40,
    curriculum: [
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
    ],
    objective: "Nothing to show",
    about: "Nothing to show",
    outline: "Nothing to show",
    location: "Online",
    introVideo: "",
    things_to_learn: [
      "Basic Programming",
      "Wireframe",
      "Create a Website",
      "User Interface Design",
      "Basic HTML and CSS",
      "Create Responsive Website",
    ],
    price: "49",
    thumbnail: Laptop,
  },
  {
    id: 11,
    name: "BSc (Hons) Business Psychology",
    shortDesc:
      "Learn everything you need to become a secure cyber professional",
    mainDesc:
      "This knowledge can be employed to advance in your current work, to prepare for international jobs and careers, and to generally understand the importance and role of international business practice on globalization and geopolitics",
    duration: "1 year",
    rating: 5.0,
    review: [],
    authors: [
      {
        initials: "KH",
        initialsBackground: "bg-[#ffbabf]",
        name: "Karen Hope",
        extraText: null,
      },
    ],
    slots: 40,
    curriculum: [
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
    ],
    objective: "Nothing to show",
    about: "Nothing to show",
    outline: "Nothing to show",
    location: "Online",
    introVideo: "",
    things_to_learn: [
      "Basic Programming",
      "Wireframe",
      "Create a Website",
      "User Interface Design",
      "Basic HTML and CSS",
      "Create Responsive Website",
    ],
    price: "49",
    thumbnail: Laptop,
  },
  {
    id: 12,
    name: "BSc (Hons) Business Psychology",
    shortDesc:
      "Learn everything you need to become a secure cyber professional",
    mainDesc:
      "This knowledge can be employed to advance in your current work, to prepare for international jobs and careers, and to generally understand the importance and role of international business practice on globalization and geopolitics",
    duration: "1 year",
    rating: 5.0,
    review: [],
    authors: [
      {
        initials: "KH",
        initialsBackground: "bg-[#ffbabf]",
        name: "Karen Hope",
        extraText: null,
      },
    ],
    slots: 40,
    curriculum: [
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
    ],
    objective: "Nothing to show",
    about: "Nothing to show",
    outline: "Nothing to show",
    location: "Online",
    introVideo: "",
    things_to_learn: [
      "Basic Programming",
      "Wireframe",
      "Create a Website",
      "User Interface Design",
      "Basic HTML and CSS",
      "Create Responsive Website",
    ],
    price: "49",
    thumbnail: Laptop,
  },
];

export const cartDummy = [
  {
    id: 1,
    name: "BSc (Hons) Business Psychology",
    shortDesc:
      "Learn everything you need to become a secure cyber professional",
    mainDesc:
      "This knowledge can be employed to advance in your current work, to prepare for international jobs and careers, and to generally understand the importance and role of international business practice on globalization and geopolitics",
    duration: "1 year",
    rating: 5.0,
    review: [{}, {}, {}],
    authors: [
      {
        initials: "KH",
        initialsBackground: "bg-[#ffbabf]",
        name: "Karen Hope",
        extraText: null,
      },
      {
        initials: "JN",
        initialsBackground: "bg-[#fec64f]",
        name: "Jordan Nico",
        extraText: `invited you to ${categories[0].name} Group Chat`,
      },
    ],
    slots: 40,
    curriculum: [
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
    ],
    objective: "Nothing to show in objectives",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    outline: "Nothing to show in outline",
    discussion: "Nothing to show in discussion",
    location: "Online",
    introVideo: "",
    students: [{}, {}, {}],
    things_to_learn: [
      "Basic Programming",
      "Wireframe",
      "Create a Website",
      "User Interface Design",
      "Basic HTML and CSS",
      "Create Responsive Website",
    ],
    price: "49",
    thumbnail: Laptop,
  },
  {
    id: 3,
    name: "BSc (Hons) Business Psychology",
    shortDesc:
      "Learn everything you need to become a secure cyber professional",
    mainDesc:
      "This knowledge can be employed to advance in your current work, to prepare for international jobs and careers, and to generally understand the importance and role of international business practice on globalization and geopolitics",
    duration: "1 year",
    rating: 5.0,
    review: [],
    authors: [
      {
        initials: "KH",
        initialsBackground: "bg-[#ffbabf]",
        name: "Karen Hope",
        extraText: null,
      },
    ],
    slots: 40,
    curriculum: [
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
    ],
    objective: "Nothing to show",
    about: "Nothing to show",
    outline: "Nothing to show",
    location: "Online",
    introVideo: "",
    things_to_learn: [
      "Basic Programming",
      "Wireframe",
      "Create a Website",
      "User Interface Design",
      "Basic HTML and CSS",
      "Create Responsive Website",
    ],
    price: "49",
    thumbnail: Laptop,
  },
];
export const relatedCoursesDummy = [
  {
    id: 1,
    name: "BSc (Hons) Business Psychology",
    shortDesc:
      "Learn everything you need to become a secure cyber professional",
    mainDesc:
      "This knowledge can be employed to advance in your current work, to prepare for international jobs and careers, and to generally understand the importance and role of international business practice on globalization and geopolitics",
    duration: "1 year",
    rating: 5.0,
    review: [{}, {}, {}],
    authors: [
      {
        initials: "KH",
        initialsBackground: "bg-[#ffbabf]",
        name: "Karen Hope",
        extraText: null,
      },
      {
        initials: "JN",
        initialsBackground: "bg-[#fec64f]",
        name: "Jordan Nico",
        extraText: `invited you to ${categories[0].name} Group Chat`,
      },
    ],
    slots: 40,
    curriculum: [
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
    ],
    objective: "Nothing to show in objectives",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    outline: "Nothing to show in outline",
    discussion: "Nothing to show in discussion",
    location: "Online",
    introVideo: "",
    students: [{}, {}, {}],
    things_to_learn: [
      "Basic Programming",
      "Wireframe",
      "Create a Website",
      "User Interface Design",
      "Basic HTML and CSS",
      "Create Responsive Website",
    ],
    price: "49",
    thumbnail: Laptop,
  },
  {
    id: 3,
    name: "BSc (Hons) Business Psychology",
    shortDesc:
      "Learn everything you need to become a secure cyber professional",
    mainDesc:
      "This knowledge can be employed to advance in your current work, to prepare for international jobs and careers, and to generally understand the importance and role of international business practice on globalization and geopolitics",
    duration: "1 year",
    rating: 5.0,
    review: [],
    authors: [
      {
        initials: "KH",
        initialsBackground: "bg-[#ffbabf]",
        name: "Karen Hope",
        extraText: null,
      },
    ],
    slots: 40,
    curriculum: [
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
    ],
    objective: "Nothing to show",
    about: "Nothing to show",
    outline: "Nothing to show",
    location: "Online",
    introVideo: "",
    things_to_learn: [
      "Basic Programming",
      "Wireframe",
      "Create a Website",
      "User Interface Design",
      "Basic HTML and CSS",
      "Create Responsive Website",
    ],
    price: "49",
    thumbnail: Laptop,
  },
  {
    id: 1,
    name: "BSc (Hons) Business Psychology",
    shortDesc:
      "Learn everything you need to become a secure cyber professional",
    mainDesc:
      "This knowledge can be employed to advance in your current work, to prepare for international jobs and careers, and to generally understand the importance and role of international business practice on globalization and geopolitics",
    duration: "1 year",
    rating: 5.0,
    review: [{}, {}, {}],
    authors: [
      {
        initials: "KH",
        initialsBackground: "bg-[#ffbabf]",
        name: "Karen Hope",
        extraText: null,
      },
      {
        initials: "JN",
        initialsBackground: "bg-[#fec64f]",
        name: "Jordan Nico",
        extraText: `invited you to ${categories[0].name} Group Chat`,
      },
    ],
    slots: 40,
    curriculum: [
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
    ],
    objective: "Nothing to show in objectives",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    outline: "Nothing to show in outline",
    discussion: "Nothing to show in discussion",
    location: "Online",
    introVideo: "",
    students: [{}, {}, {}],
    things_to_learn: [
      "Basic Programming",
      "Wireframe",
      "Create a Website",
      "User Interface Design",
      "Basic HTML and CSS",
      "Create Responsive Website",
    ],
    price: "49",
    thumbnail: Laptop,
  },
  {
    id: 3,
    name: "BSc (Hons) Business Psychology",
    shortDesc:
      "Learn everything you need to become a secure cyber professional",
    mainDesc:
      "This knowledge can be employed to advance in your current work, to prepare for international jobs and careers, and to generally understand the importance and role of international business practice on globalization and geopolitics",
    duration: "1 year",
    rating: 5.0,
    review: [],
    authors: [
      {
        initials: "KH",
        initialsBackground: "bg-[#ffbabf]",
        name: "Karen Hope",
        extraText: null,
      },
    ],
    slots: 40,
    curriculum: [
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
      {
        title: "Curriculum",
        desc: "Administer and support Linux in your environment",
      },
    ],
    objective: "Nothing to show",
    about: "Nothing to show",
    outline: "Nothing to show",
    location: "Online",
    introVideo: "",
    things_to_learn: [
      "Basic Programming",
      "Wireframe",
      "Create a Website",
      "User Interface Design",
      "Basic HTML and CSS",
      "Create Responsive Website",
    ],
    price: "49",
    thumbnail: Laptop,
  },
];


export const countriesDummy = [
  { id: 2000, name: "--Select Country--" },
  { id: 1, name: "Algeria" },
  { id: 2, name: "Angola" },
  { id: 3, name: "Benin" },
  { id: 4, name: "Botswana" },
  { id: 5, name: "Burkina Faso" },
  { id: 6, name: "Burundi" },
  { id: 7, name: "Cabo Verde" },
  { id: 8, name: "Cameroon" },
  { id: 9, name: "Central African Republic" },
  { id: 10, name: "Chad" },
  { id: 11, name: "Comoros" },
  { id: 12, name: "Congo, Democratic Republic of the" },
  { id: 13, name: "Congo, Republic of the" },
  { id: 14, name: "Djibouti" },
  { id: 15, name: "Egypt" },
  { id: 16, name: "Equatorial Guinea" },
  { id: 17, name: "Eritrea" },
  { id: 18, name: "Eswatini" },
  { id: 19, name: "Ethiopia" },
  { id: 20, name: "Gabon" },
  { id: 21, name: "Gambia" },
  { id: 22, name: "Ghana" },
  { id: 23, name: "Guinea" },
  { id: 24, name: "Guinea-Bissau" },
  { id: 25, name: "Ivory Coast" },
  { id: 26, name: "Kenya" },
  { id: 27, name: "Lesotho" },
  { id: 28, name: "Liberia" },
  { id: 29, name: "Libya" },
  { id: 30, name: "Madagascar" },
  { id: 31, name: "Malawi" },
  { id: 32, name: "Mali" },
  { id: 33, name: "Mauritania" },
  { id: 34, name: "Mauritius" },
  { id: 35, name: "Morocco" },
  { id: 36, name: "Mozambique" },
  { id: 37, name: "Namibia" },
  { id: 38, name: "Niger" },
  { id: 39, name: "Nigeria" },
  { id: 40, name: "Rwanda" },
  { id: 41, name: "Sao Tome and Principe" },
  { id: 42, name: "Senegal" },
  { id: 43, name: "Seychelles" },
  { id: 44, name: "Sierra Leone" },
  { id: 45, name: "Somalia" },
  { id: 46, name: "South Africa" },
  { id: 47, name: "South Sudan" },
  { id: 48, name: "Sudan" },
  { id: 49, name: "Tanzania" },
  { id: 50, name: "Togo" },
  { id: 51, name: "Tunisia" },
  { id: 52, name: "Uganda" },
  { id: 53, name: "Zambia" },
  { id: 54, name: "Zimbabwe" }
];

