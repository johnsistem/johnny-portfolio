import semahImage from '../assets/portolio/semah-image.png';
import fistumImage from '../assets/portolio/fitsum-image.jpg';
import tomocaImage from '../assets/portolio/tomoca-image.png';
import angelImage from '../assets/portolio/angel-skin.png';

export const websitesProjects = [
    {
        id: 1,
        name: "Fitsum Printing and Advert ",
        color: '#8bc43b',
        image: fistumImage,
        imageDescription: "Firstum Printing and Advert Image",
        url: "https://fitsumprintandadvertisng.com/",
        description: "Semah Mother Child Hospital Website for Online Appointment and Medical Information...",
        technologies: ['reactjs', 'nodejs', 'expressjs', 'tailwindcss', 'mysql']
    },
    {
        id: 2,
        name: "Semah MCH",
        color: '#1f65b1',
        image: semahImage,
        imageDescription: "Semah MCH Image",
        url: "https://www.semahmch.com/",
        description: "Semah Mother Child Hospital Website for Online Appointment and Medical Information...",
        technologies: ['reactjs', 'ts', 'nodejs', 'expressjs', 'tailwindcss', 'mysql']
    },
    {
        id: 3,
        name: "Angel SKin",
        color: '#d5ac89',
        image: angelImage,
        imageDescription: "Angel Skin Image",
        url: "https://angelskinbyangela.com/",
        description: "Angel Skin is U.S. Based Website for Online Appointment for Skin Care and Waxing Solutions...",
        technologies: ['vue.js', 'tailwindcss'],
    },
]

export const mobileAppsProjects = [
    {
        id: 1,
        name: "Tomoca App",
        color: "#FA8D18",
        image: tomocaImage,
        imageDescription: "Tomoca App Image",
        url: "https://play.google.com/store/apps/details?id=com.tomoca.app&hl=en&gl=US",
        description: "Tomoca App is an app that allows you to order coffee from the nearest Tomoca Coffee Shop.",
        technologies: ['flutter', 'dart', 'firebase', 'nodejs', 'expressjs', 'mysql']
    }
]