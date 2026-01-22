// data/hero.js
export const HeroData = {
  title: "Hi, I'm",
  name: "Sachin Bhadoriya",
  subtitle: "Full-Stack Developer | Creative Designer",
  description: "Passionate about building web apps with great UI and real-world functionality. I blend design with code to create impactful digital experiences.",
  ctaPrimary: "View Projects",
  ctaSecondary: "Contact Me",
};

// data/about.js
export const AboutData = {
  heading: "About Me",
  description: `
I'm Sachin Bhadoriya, a dedicated B.Sc. Computer Science student at Jiwaji University with a strong passion for frontend and backend development.\n 
I specialize in crafting responsive websites and applications using React.js, Node.js, and MongoDB. I also have hands-on experience with design tools like Adobe Photoshop and Canva, making me a creative tech enthusiast.\n
I’ve built and deployed full-stack projects like a hotel booking system with live email notifications. My goal is to keep learning and building impactful projects that combine functionality with clean UI/UX.`,
  education: [
    {
      degree: "Bachelor’s in Computer Science",
      institute: "Jiwaji University, Gwalior, M.P.",
      duration: "2023 – 2026"
    },
    {
      degree: "XIIth – CBSE (79%)",
      institute: "Jawahar Navodaya Vidyalaya, Gwalior",
      duration: "2020 – 2021"
    },
    {
      degree: "Xth – CBSE (74%)",
      institute: "Jawahar Navodaya Vidyalaya, Gwalior",
      duration: "2018 – 2019"
    },
  ]
}

// skills data
export const SkillsData = [
  {
    title: "Frontend",
    skill: [" HTML", " CSS", " JavaScript", " Bootstrap", " React.js", " React Native"]
  },
  {
    title: "Backend & Programming Language",
    skill: [" Node.js", " Express.js"]
  },
  {
    title: "Database",
    skill: [" MongoDB"]
  },
  {
    title: "Tool & Platforms",
    skill: [" VS Code", " Vercel", " Render", " Railway"]
  },
  {
    title: "Other Skills",
    skill: [" MS Office", " Adobe Photoshop", " Canva"]
  },
]

// data/serviceData.js
export const ServiceData = [
  {
    title: "Web Development",
    description: "Building responsive and dynamic websites with modern tech like React, Node.js, and MongoDB."
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive designs using tools like Adobe Photoshop and Canva that enhance user experience."
  },
  {
    title: "Graphic Designing",
    description: "Designing banners, posters, and visual assets for social media, websites, and branding."
  },
  {
    title: "Social Media & Website Handling",
    description: "Managing websites and social platforms to ensure consistent brand presence and user engagement."
  }
]

// data/ContactData.js
export const ContactData = {
  heading: "Contact Me",
  description: "Let’s work together or just have a friendly chat!",
  email: "bhadoriyasachin33@gmail.com",
  phone: "8839190794",
  social: {
    github: "https://github.com/sachin-bhadoriya",
    linkedin: "https://linkedin.com/in/sachin-bhadoriya", // add your LinkedIn if you have one
    portfolio: "https://sachin-bhadoriya.vercel.app"
  }
}

export const WhyHireMeData = {
  heading: "Why Should You Hire Me?",
  points: [
    "A hardworking and passionate developer dedicated to building clean, responsive, and user-friendly web applications.",
    "Strong proficiency in both frontend (React.js, BootStrap) and backend (Node.js, Express.js, MongoDB) technologies.",
    "Proven experience delivering full-stack projects like a hotel booking system with live room availability and email automation.",
    "Creative mindset with hands-on graphic design skills using Adobe Photoshop and Canva to enhance UI/UX.",
    "Excellent communication, leadership, and project management skills developed through academic projects and internship experiences.",
    "Adaptable and quick learner, always eager to explore new technologies and improve coding standards.",
  ],
};
// cv project data
export const CvDataProjects = [
  {
    title: "Hill View Escape – Hotel Booking Website",
    description: "Developed and deployed a full-stack hotel booking website with live room reservation functionality. Integrated email automation to send instant booking confirmations to users. Built using React for the frontend, Node.js/MongoDB for backend APIs, and hosted on Vercel, Render & Railway for seamless deployment.",
    gitHubLink: "https://github.com/sachin-bhadoriya/Hill_View_Escape-Frontend-only",
    liveLink: "https://hill-view-escape-frontend-only.vercel.app"
  },
  {
    title: "Project Portfolio – Sachin Bhadoriya",
    description: "Designed and deployed a project portfolio website to showcase my skills, contact information and other material. Built with React and Bootstrap 5, the site is fully responsive and optimized for all screen sizes. Hosted on Vercel with fast load times and smooth user experience.",
    gitHubLink: "https://github.com/sachin-bhadoriya/my-portfolio",
    liveLink: "http://sachin-bhadoriya.vercel.app"
  },
  {
    title: "My Personal Portfolio Website",
    description: "Designed and deployed a personal portfolio website using React with simple HTML and CSS, featuring an interactive Three.js animated background. The site showcases my projects, skills, contact information and my CV (with printing and export to pdf functionality and also it's created using HTML and CSS.), and includes a fully functional contact form powered by Node.js and Express APIs, with MongoDB used to store submitted data. The site is fully responsive across devices and delivers a smooth, engaging user experience.",
    gitHubLink: "https://github.com/sachin-bhadoriya/sachin_bhadoriya_mern_stack_developer",
    liveLink: "https://sachin-bhadoriya-mern-stack-develop.vercel.app"
  },
  {
    title: "Here are my some Sample designs using Adobe Photoshop.",
    liveLink: "https://drive.google.com/drive/folders/18N9Nh3xejMJWIkM8_rizgCqDR5UmvFX2?usp=sharing"
  },
]

// cv project data
export const CvDataSoftSkills = [
  "Problem Solving & Analytical Thinking",
  "Communication Skill",
  "Leadership & Mentorship",
  "Team Collaboration",
  "Adaptability & Quick Learning",
  "Creativity & Innovation"
];

// cv project education
export const CvDataEducation = [
  {
    university: "Jiwaji University, Gwalior, M.P., India",
    degAndPercentage: "Bachelor’s in Computer Science",
    session: "2023-2026"
  },
  {
    university: "Jawahar Navodaya Vidyalaya, Gwalior, Madhya Pradesh",
    degAndPercentage: "CBSE Board (Class XII), 79%",
    session: "2020-2021"
  },
]
