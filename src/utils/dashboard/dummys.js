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
    about: "Nothing to show in abouts in about",
    outline: "Nothing to show in outline",
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
