import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    campus,
    hackathon,
    cpp,
    ibm,
    youtube,
    shoe,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    bootstrap,
    jquery,
    twitter,
    x_twitter,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: cpp,
        name: "CPP",
        type: " Programming Language",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend Language ",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend Language ",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "CSS Framework ",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend Language",
    },
    {
        imageUrl: jquery,
        name: "JQuery",
        type: " JS Framework",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend Framework",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend JS-Framework",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend JS-Framework",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control System",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control System",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "ReactJS Library",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "ReactJS Framework",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend CSS-Framework",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend Language",
    }
];

export const experiences = [
    {
        title: "SIH-2023 Winner",
        company_name: "PSID-1360",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: " Achievement (Hackathon) ",
        points: [
            'Developed winning solution for SIH2023: "Price Comparison Web App for GeM Portal and Other E-Marketplaces (PSID-1360)."',
            "Leveraged MERN stack, Python, Bootstrap, and EJS for efficient development.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Offers centralized platform for cost-effective procurement, enhancing efficiency.",
        ],
    },
    {
        title: "IBM Front-End Developer",
        company_name: "IBM",
        icon: ibm,
        iconBg: "#accbe1",
        date: "Certification",
        points: [
            "Completed IBM Front-End Developer Professional Certificate.",
            "Developed core skills in HTML, CSS, and JavaScript for web and front-end applications.",
            "Applied UI/UX best practices, managed code with GitHub, and utilized front-end frameworks like React JS.",
            "Tested, debugged, and deployed applications using automated build tools, proficient in creating dynamic front-ends for apps interacting with RESTful APIs.",
        ],
    },
    {
        title: "Technical Team Executive",
        company_name: "OWASP RGIPT",
        icon: hackathon,
        iconBg: " #fbc3bc",
        date: "Work Experience",
        points: [
            "Currently serving as Technical Team Executive at OWASP RGIPT Student Chapter.",
            "Actively contributing to technical initiatives and projects within the organization.",
            "Collaborating with team members to enhance technical capabilities and drive innovation within the student chapter",
        ],
    },
    {
        title: "Campus Ambassador",
        company_name: "IIT Ropar",
        icon: campus,
        iconBg: "#a2d2ff",
        date: "Work Experience",
        points: [
            "Completed 4-week Campus Ambassador internship at Zeitgeist IIT Ropar.",
            "Received certificate for exceptional performance.",
            "Recognized for punctuality, hard work, and communication skills.",
        ],
    },
];

export const socialLinks = [
    // {
    //     name: 'Contact',
    //     iconUrl: contact,
    //     link: '/contact',
    // },
    {
        name: 'Twitter',
        iconUrl: x_twitter,
        link: 'https://twitter.com/a_nywaay'
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/anywaay',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ayush-tripathi-b17250257/',
    }
];

export const projects = [
    {
        gitProject: true,
        iconUrl: pricewise,
        theme: 'btn-back-green',
        color: '#18c501',
        name: 'ShavvyShopper (SIH-2023 Winner)',
        description: 'SavvyShopper is a web application developed as a solution for the problem statement titled "Price comparison website for products on GeM portal with other e-marketplaces" in the Smart India Hackathon 2023.The project won the competition and aims to provide a convenient platform for users to compare prices and specifications of products listed on the Government e-Marketplace (GeM) with those available on other popular e-marketplaces such as Flipkart, eBay, Amazon, Alibaba, etc.',
        link: 'https://github.com/anywaay/SIH2023_LOGIX_PROTOTYPE',
        repo: 'https://github.com/anywaay/SIH2023_LOGIX_PROTOTYPE'
    },
    {
        gitProject: false,
        iconUrl: shoe,
        theme: 'btn-back-blue',
        color: '#1a71fe',
        name: 'Nike Shopping App',
        description: "The NIKE Shopping App Clone is a React application with Vite and Tailwind CSS, offering optimal performance and sleek styling. It replicates NIKE's interface with precision, prioritizing intuitive navigation and responsiveness for an authentic shopping experience.",
        link: 'https://nike-clone-react-app.web.app/',
        repo: 'https://github.com/anywaay/nike-clone-react-app'
    },
    {
        gitProject: false,
        iconUrl: youtube,
        color: '#f80000',
        theme: 'btn-back-deepred',
        name: 'Youtube Clone',
        description: 'The YouTube Clone, developed in React with Rapid API integration, replicates the core features of YouTube, allowing users to browse through various categories, search for videos, and enjoy seamless playback. Prioritizing responsive design and user experience, it offers a versatile platform for video exploration and consumption.',
        link: 'https://yt-web-clone.web.app/',
        repo: 'https://github.com/anywaay/youtube_clone'
    },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];





