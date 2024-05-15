import { courses } from "../constants"
import Laptop from '../../assets/jpgs/lappy.jpg'

export const assigentDummy = [
    {
      title: 'Web Design',
      score: 7
    },
    {
      title: 'Graphics Design',
      score: 8
    }
]

export const scheduleDummy = [
    {
        title: 'Web Design',
        date: 'January 5, 2021',
        time: '09.00 - 10.00 AM',
        name: 'Ms. Samantha William',
        tagColor: 'bg-black'
    },
    {
        title: 'Interaction Design',
        date: 'January 17, 2021',
        time: '09.00 - 10.00 AM',
        name: 'Mr. Tony Soap',
        tagColor: 'bg-green'
    },
    {
        title: 'Basic Programming',
        date: 'January 5, 2021',
        time: '09.00 - 10.00 AM',
        name: 'Ms. Samantha William',
        tagColor: 'bg-yellow-400'
    },
]

export const timelineDummy = [
    {
      date: 'Today',
      events: [
        {
            time: '10:10 AM',
            event: {
                initials: 'KH', 
                initialsBackground: 'bg-[#ffbabf]', 
                name: 'Karen Hope', 
                extraText: `attach two files to ${courses[0].name}`},
                attachments: [
                    {
                        name: 'Module1_GraphicDesign.doc',
                        size:'1.5mb'
                    },
                    {
                        name: 'Module2_GraphicDesign.doc',
                        size:'1.5mb'
                    },
                ]
        },
        {
            time: '9:30 AM',
            event: {
                initials: 'JN', 
                initialsBackground: 'bg-[#fec64f]', 
                name: 'Jordan Nico', 
                extraText: `invited you to ${courses[0].name} Group Chat`},
                attachments: []
        },
        {
            time: '9:10 AM',
            event: {
                initials: 'JA', 
                initialsBackground: 'bg-[#3cc2e0]', 
                name: 'Johny Ahmed', 
                extraText: `accepted your invitation to ${courses[1].name} Courses`},
                attachments: []
        },
        {
            time: '8:45 AM',
            event: {
                initials: 'SW', 
                initialsBackground: 'bg-[#fc6b57]', 
                name: 'Samantha William', 
                extraText: `removed you from ${courses[2].name} Courses groups`},
                attachments: []
        },

      ]
    },
    {
      date: 'Yesterday',
      events: [
        {
            time: '12:10 AM',
            event: {
                initials: 'NA', 
                initialsBackground: 'bg-[#ffbabf]', 
                name: 'Nadila Adja', 
                extraText: `mentioned you in a discussion chat in ${courses[3].name} Courses`},
                attachments: []
        },
        {
            time: '10:40 AM',
            event: {
                initials: 'TS', 
                initialsBackground: 'bg-[#374557]', 
                name: 'Tony Soap', 
                extraText: `has commented on your topic in ${courses[0].name} Group Chat`},
                attachments: []
        },
        {
            time: '8:10 AM',
            event: {
                initials: 'DH', 
                initialsBackground: 'bg-[#3cc2e0]', 
                name: 'Dulla Hann', 
                extraText: `joined ${courses[0].name} Courses`},
                attachments: []
        },
    

      ]
    },
   
]


export const coursesContentDummy = [
    {
        name: 'BSc (Hons) Business Psychology',
        shortDesc: 'Learn everything you need to become a secure cyber professional',
        duration: '1 year',
        location: 'Online',
        price: '4000',
        thumbnail:Laptop
    },
    {
        name: 'BSc (Hons) Business Psychology',
        shortDesc: 'Learn everything you need to become a secure cyber professional',
        duration: '1 year',
        location: 'Online',
        price: '4000',
        thumbnail:Laptop
    },
    {
        name: 'BSc (Hons) Business Psychology',
        shortDesc: 'Learn everything you need to become a secure cyber professional',
        duration: '1 year',
        location: 'Online',
        price: '4000',
        thumbnail:Laptop
    },
    {
        name: 'BSc (Hons) Business Psychology',
        shortDesc: 'Learn everything you need to become a secure cyber professional',
        duration: '1 year',
        location: 'Online',
        price: '4000',
        thumbnail:Laptop
    },
    {
        name: 'BSc (Hons) Business Psychology',
        shortDesc: 'Learn everything you need to become a secure cyber professional',
        duration: '1 year',
        location: 'Online',
        price: '4000',
        thumbnail:Laptop
    },
    {
        name: 'BSc (Hons) Business Psychology',
        shortDesc: 'Learn everything you need to become a secure cyber professional',
        duration: '1 year',
        location: 'Online',
        price: '4000',
        thumbnail:Laptop
    },
    {
        name: 'BSc (Hons) Business Psychology',
        shortDesc: 'Learn everything you need to become a secure cyber professional',
        duration: '1 year',
        location: 'Online',
        price: '4000',
        thumbnail:Laptop
    },
    {
        name: 'BSc (Hons) Business Psychology',
        shortDesc: 'Learn everything you need to become a secure cyber professional',
        duration: '1 year',
        location: 'Online',
        price: '4000',
        thumbnail:Laptop
    },
]