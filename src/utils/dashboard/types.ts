interface MUser {
  id: number;
  firstName: string;
  laststName: string;
  profilePicture: string;
  dateOfBirth: Date;
  phoneNumber: string;
  profession: string;
  address: string;
  linkedIn: string;
  country: string;
  state: string;
  industry: string;
  password: string;
}

interface MUserWithPrivateInfo extends MUser {
    id:number,
    friends: MUser[]
}


interface MAuthor extends MUser {
    id: number,
    courses: MCourse[],
    friends: MUser[]
}

interface MStudent extends MUser {
    id: number
    courses: MCourse[]
    friends: MUser[]
}

interface UserAsNameTag extends MUser {
  initials: string;
  initialsBackground: string;
  extraText?: string;
}
interface UserAsPictureTag extends MUser {
  isFriend: boolean;
}



interface AttachmentItem {
   name: string,
   size: number
}

const example:AttachmentItem = {
  name: '',
  size: 12,
}

interface EventItem {
    time: Date,
    event: UserAsNameTag,
}

interface EventItemWithAttachment {
    time: Date,
    event: UserAsNameTag,
    attach: AttachmentItem[]
}

interface EventItemWithUsers {
    time: Date,
    event: UserAsNameTag,
    users: MUser[]
}


interface TimeLine {
    date: string,
    event: EventItemWithAttachment[]
}
interface MeetingTimeLine {
    date: string,
    event: EventItemWithUsers[]
}





//Courses

interface MCourseReview extends MUser {
    id: number
    comment: string,
    rating: number
}

interface Curriculum {
    id: number
    title: string,
    desc: string
}

interface MCourse {
    id: number,
    name: string,
    shortDesc: string,
    mainDesc: string,
    duration: number,
    rating: number,
    reveiws: MCourseReview[],
    authors: MAuthor[],
    students: MUser[]
    slots: number,
    curriculum: Curriculum[],
    objective: string,
    about: string,
    outline: string,
    discussion: string,
    location: string,
    introVideo: string,
    thingsToLearn: string[],
    price: number,
    thumbnail: string
}

interface MExam extends MCourse {
    id: number,
    
}





// {
//     date: "Today",
//     events: [
//       {
//         time: "10:10 AM",
//         event: {
//           initials: "KH",
//           initialsBackground: "bg-[#ffbabf]",
//           name: "Pro. Ken Humphrey",
//           extraText: `attach two files to ${categories[0].name}`,
//         },
//         users: [
//           {
//             name: "Module1_GraphicDesign.doc",
//             size: "1.5mb",
//           },
//           {
//             name: "Module2_GraphicDesign.doc",
//             size: "1.5mb",
//           },
//         ],
//       },
//       {
//         time: "9:30 AM",
//         event: {
//           initials: "JN",
//           initialsBackground: "bg-[#fec64f]",
//           name: "Jordan Nico",
//           extraText: `invited you to ${categories[0].name} Group Chat`,
//         },
//         attachments: [],
//       },
//       {
//         time: "9:10 AM",
//         event: {
//           initials: "JA",
//           initialsBackground: "bg-[#3cc2e0]",
//           name: "Johny Ahmed",
//           extraText: `accepted your invitation to ${categories[1].name} Courses`,
//         },
//         attachments: [],
//       },
//       {
//         time: "8:45 AM",
//         event: {
//           initials: "SW",
//           initialsBackground: "bg-[#fc6b57]",
//           name: "Samantha William",
//           extraText: `removed you from ${categories[2].name} Courses groups`,
//         },
//         attachments: [],
//       },
//     ],
//   },