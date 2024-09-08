import semahImage from '../assets/portolio/semah-image.png';
import fistumImage from '../assets/portolio/fitsum-image.jpg';
import tomocaImage from '../assets/portolio/tomoca-image.png';
import angelImage from '../assets/portolio/angel-skin.png';
import lliImage from '../assets/portolio/lli-image.jpg';
import trainmeImage from '../assets/portolio/trainme.png';
import teacherImage from "@/app/assets/portolio/teacher-pro.png";
import ethioSalacyCalculatorImage from "@/app/assets/portolio/ethio-salary-calculator.jpg";

export const websitesProjects = [
    {
        id: 1,
        name: "Trainme",
        color: '#1B1107',
        image: trainmeImage,
        imageDescription: "Trainme Image",
        url: "https://trainme.education/",
        description: "Aprendizaje en línea integral e innovador",
        technologies: ['nextjs', 'nodejs', 'expressjs', 'tailwindcss', 'postgresql', 'nestjs', 'graphql', 'aws']
    },
    {
        id: 2,
        name: "Teacher Pro",
        color: '#EA2829',
        image: teacherImage,
        imageDescription: "Teacher Pro Image",
        url: "https://www.teacherspro.com/",
        description: "La comunidad +PRO de aprendizaje y formación docente",
        technologies: ['nextjs', 'nodejs', 'expressjs', 'tailwindcss', 'postgresql', 'nestjs', 'graphql', 'aws']
    },
    // {
    //     id: 3,
    //     name: "Semah MCH",
    //     color: '#1f65b1',
    //     image: semahImage,
    //     imageDescription: "Semah MCH Image",
    //     url: "https://www.semahmch.com/",
    //     description: "Semah Mother Child Hospital Website for Online Appointment and Medical Information...",
    //     technologies: ['reactjs', 'ts', 'nodejs', 'expressjs', 'tailwindcss', 'mysql']
    // },
    // {
    //     id: 4,
    //     name: "Angel SKin",
    //     color: '#d5ac89',
    //     image: angelImage,
    //     imageDescription: "Angel Skin Image",
    //     url: "https://angelskin.vercel.app/",
    //     description: "Angel Skin is U.S. Based Website for Online Appointment for Skin Care and Waxing Solutions...",
    //     technologies: ['vue.js', 'tailwindcss'],
    // },
    // {
    //     id: 5,
    //     name: "Fitsum Printing and Advert",
    //     color: '#8bc43b',
    //     image: fistumImage,
    //     imageDescription: "Firstum Printing and Advert Image",
    //     url: "https://fitsumpptest.vercel.app/",
    //     description: "Fitsum Printing and Advert website for Advertising Products and Ordering Online...",
    //     technologies: ['reactjs', 'nodejs', 'expressjs', 'tailwindcss', 'mysql']
    // },
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

export const shopifyStores = [
    {
        id: 1,
        name: "Little Luxury Items",
        color: "#615B56",
        image: lliImage,
        imageDescription: "Little Luxury Items Images",
        url: "https://littleluxuryitems.co/",
        description: "Little Luxury Items, your destination for unique and innovative products. As an e-commerce store...",
        technologies: ['shopify']
    }
]

export const personalProjects = [
    {
        id: 1,
        name: "Ethiopia Salary Calculator",
        color: "#074539",
        image: ethioSalacyCalculatorImage,
        imageDescription: "Ethiopia Salary Calculator Image",
        url: "https://ethiopia-salary-calculator.alamondai.com/",
        description: "An App to Calculate Salary Based on Ethiopian Tax Law...",
        technologies: ['reactjs', 'tailwindcss', 'firebase']
    }
]