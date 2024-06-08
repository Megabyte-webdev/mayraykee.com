import Courses from "../../assets/svgs/courses.svg";
import Clipboard from "../../assets/pngs/clipboard-white.png";
import ThumbsUp from "../../assets/pngs/thumbs-up.png";

export const usersDummyAsStudents = [
  {
    id: 1,
    initials: "AA",
    initialsBackground: "bg-[#e2ebe1]",
    name: "Adepoju Ademola",
    isAFriend: true,
  },
  {
    id: 2,
    initials: "BP",
    initialsBackground: "bg-[#e2ebe1]",
    name: "Badiru Pomile",
    isAFriend: true,
  },
  {
    id: 3,
    initials: "EJ",
    initialsBackground: "bg-[#e2ebe1]",
    name: "Emmanuel John",
    isAFriend: true,
  },

  {
    id: 4,
    initials: "EJ",
    initialsBackground: "bg-[#e2ebe1]",
    name: "Emmanuel John",
    isAFriend: true,
  },

  {
    id: 5,
    initials: "EJ",
    initialsBackground: "bg-[#e2ebe1]",
    name: "Emmanuel John",
    isAFriend: true,
  },
];

export const usersDummyWithReviews = [
  {
    id: 1,
    initials: "AA",
    initialsBackground: "bg-[#4cbc9a]",
    name: "Adepoju Ademola",
    isAFriend: true,
    rating: 4,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
  },
  {
    id: 2,
    initials: "BP",
    initialsBackground: "bg-[#fec64f]",
    name: "Badiru Pomile",
    isAFriend: true,
    rating: 5,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
  },
  {
    id: 3,
    initials: "EJ",
    initialsBackground: "bg-[#fc6b57]",
    name: "Emmanuel John",
    isAFriend: true,
    rating: 5,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
  },
];

export const coursesOverviewDummy = [
  {
    id: 1,
    title: "Total Courses",
    number: 23940,
    backgroundColor: "bg-green",
    progress: 40,
    icon: Courses,
  },
  {
    id: 2,
    title: "Live Classes",
    number: 32567,
    backgroundColor: "bg-[#fec64f]",
    progress: 40,
    icon: Clipboard,
  },
  {
    id: 3,
    title: "Reviews",
    number: 94230,
    backgroundColor: "bg-[#fc6b57]",
    progress: 40,
    icon: ThumbsUp,
  },
];

export const weeksDummy = [
  {
    week: 4,
    last: 30,
    current: 40,
  },
  {
    week: 3,
    last: 50,
    current: 60,
  },
  {
    week: 2,
    last: 70,
    current: 60,
  },
  {
    week: 1,
    last: 60,
    current: 80,
  },
];

export const eventsDummy = [
  {
    title: "UX Research",
    start: new Date(2024, 5, 1, 10, 0),
    end: new Date(2024, 5, 1, 11, 0),
    color: "border-l-[#fc6b57]",
  },
  {
    title: "UX Research",
    start: new Date(2024, 5, 10, 10, 0),
    end: new Date(2024, 5, 10, 11, 0),
    color: "border-l-[#4cbc9a]",
  },
  {
    title: "UX Research",
    start: new Date(2024, 5, 22, 10, 0),
    end: new Date(2024, 5, 22, 11, 0),
    color: "border-l-[#4cbc9a]",
  },
  {
    title: "UX Research",
    start: new Date(2024, 5, 26, 10, 0),
    end: new Date(2024, 5, 26, 11, 0),
    color: "border-l-[#fec64f]",
  },
];
