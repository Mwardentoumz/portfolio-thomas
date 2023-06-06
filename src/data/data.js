// create an array of 12 objects called "data" that contains the following properties: title, description, image, url

export const projects = [
    {
        title: "ArgentBank",
        description: "Authentification et autorisation, redux, redux toolkit et accès protégé, cette application communique avec une API d'authentification et permet à l'utilisatuer de se connecter, et de modifier son profil une fois connecté.",
        image: "/homepage.png",
        stack : ["React", "Redux", "Redux Toolkit", "React Router", "Axios", "JWT", "NodeJS"],
        url: "https://argentbank-front.netlify.app/",
        code: "https://github.com/Mwardentoumz/Argent-Bank-Front/tree/master/argentbank"
    },
    {
        title: "Les petits plats",
        description: "Les petits plats is a project written in vanilla JS, some HMTL and CSS with bootstrap. Its main focus is on an search algorithm. The goal was to propose two different algorithms and to determine which one was faster.",
        image: "/petitplats.png",
        stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        url: "https://thomas-petits-plats.netlify.app/",
        code: "https://github.com/Mwardentoumz/P7-Les-petits-Plats"
    },
    {
        title: "Fisheye App",
        description: "Fisheye App is project written in vanilla JS, some HMTL and CSS. Its main focus is using class, and using a design pattern, the Factory Method. The app browses through data, and return the according objects according to its nature, a video, a photographer, or a picture.",
        image: "/fisheye.png",
        stack: ["HTML", "CSS", "Design Pattern", "JavaScript"],
        url: "https://fisheye-app.netlify.app/",
        code: "https://github.com/Mwardentoumz/Front-End-Fisheye"
    },
    {
        title: "hr-net-app",
        description: "This project showcases the management of forms in React, and the use of Redux Toolkit. It is a simple app that allows the user to create user, then pushes the users into a table, that the user can visit. The state management saves the users and allows to delete the entries in the table. It also showcases the creation of a modal component through npm.",
        image: "/hrnet.png",
        stack: ["TSX", "React", "Redux", "Redux Toolkit", "NextJS", "TailwindCSS"],
        url: "https://hr-net-app.netlify.app/",
        code: "https://github.com/Mwardentoumz/hr-net-app"
    }
];

