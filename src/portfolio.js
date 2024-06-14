/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Moeez's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Moeez Hayder Portfolio",
    type: "website",
    url: "http://moeezhayder.com/",
  },
};

//Home Page
const greeting = {
  title: "Moeez Hayder",
  logo_name: "MoeezHayder",
  nickname: "dual_star",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/drive/u/0/folders/1l_B_05il43J5Vl65qmDrQbzaYfxvQnT5",
  portfolio_repository: "https://github.com/Moeez37/Portfolio",
  githubProfile: "https://github.com/Moeez37",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "MoeezHayder98@gmail.com",
  // gitlab: "https://gitlab.com/MoeezHayder98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/dual_star/"

  {
    name: "Github",
    link: "https://github.com/Moeez37",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/moeez-hayder/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@MonsterGaming-sb4sd",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:haydermoeez@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/MoeezHayder?t=fkDA41n43FznFZhZ8ohJ1w&s=09",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/moeez.hayder",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/itz_moeezz_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Moeez786/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/haydermoeez",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/haydermoeez",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/Moeezhayder",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@haydermoeez",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Punjab University College Of Information Technology",
      subtitle: "Bachlor of Science in Software Engineering ",
      logo_path: "pucit.png",
      alt_name: "PUCIT",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://pucit.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Web Development with Django",
      subtitle: "- Nick Walter",
      logo_path: "OIP.jpeg",
      certificate_link: "https://www.udemy.com/certificate/UC-12345/",
      alt_name: "Udemy",
      color_code: "#EC525299",
    },
    {
      title: "JavaScript: The Advanced Concepts",
      subtitle: "- Andrei Neagoie",
      logo_path: "advanced_js.jpg",
      certificate_link: "https://www.zerotomastery.io/certificates/UC-54321/",
      alt_name: "Zero To Mastery",
      color_code: "#00000099",
    },
    {
      title: "Python for Everybody",
      subtitle: "- Charles Severance",
      logo_path: "Python.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/ABC123XYZ",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "React - The Complete Guide",
      subtitle: "- Maximilian Schwarzmüller",
      logo_path: "react.jpeg",
      certificate_link: "https://www.udemy.com/certificate/UC-67890/",
      alt_name: "Udemy",
      color_code: "#EC525299",
    },
    {
      title: "MERN Stack Front To Back",
      subtitle: "- Brad Traversy",
      logo_path: "MERN Stack Front To Back.png",
      certificate_link: "https://www.traversymedia.com/certificates/UC-10101/",
      alt_name: "Traversy Media",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced CSS and Sass",
      subtitle: "- Jonas Schmedtmann",
      logo_path: "css and sass.jpg",
      certificate_link: "https://www.udemy.com/certificate/UC-20202/",
      alt_name: "Udemy",
      color_code: "#EC525299",
    },
    {
      title: "Node.js, Express, MongoDB & More",
      subtitle: "- Andrew Mead",
      logo_path: "Building-a-RESTful-API-Using-Node.webp",
      certificate_link: "https://www.udemy.com/certificate/UC-30303/",
      alt_name: "Udemy",
      color_code: "#EC525299",
    },
    {
      title: "Vue - The Complete Guide",
      subtitle: "- Maximilian Schwarzmüller",
      logo_path: "vuecomp.jpeg",
      certificate_link: "https://www.udemy.com/certificate/UC-40404/",
      alt_name: "Udemy",
      color_code: "#EC525299",
    },
    {
      title: "Fullstack Open",
      subtitle: "- University of Helsinki",
      logo_path: "fullstack.jpg",
      certificate_link: "https://fullstackopen.com/en/certificates/UC-50505/",
      alt_name: "University of Helsinki",
      color_code: "#0000FF",
    },
    {
      title: "Django for Everybody",
      subtitle: "- Charles Severance",
      logo_path: "django app.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/DEF456UVW",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      subtitle: "- Colt Steele",
      logo_path: "maxresdefault.jpg",
      certificate_link: "https://www.udemy.com/certificate/UC-60606/",
      alt_name: "Udemy",
      color_code: "#EC525299",
    },
    {
      title: "AWS Certified Solutions Architect",
      subtitle: "- Neal Davis",
      logo_path: "th.jpeg",
      certificate_link: "https://www.udemy.com/certificate/UC-70707/",
      alt_name: "Udemy",
      color_code: "#FF9900",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer",
          company: "Arrivy Inc.",
          company_url: "https://www.linkedin.com/company/arrivy/about",
          logo_path: "Arrivy_new_logo.svg",
          duration: "June 2023 - Present",
          location: "Lahore, Pakistan",
          description:
            "At Arrivy,I Developed dynamic interfaces using ReactJS and React-Bootstrap for an enhanced user experience. Built efficient APIs with Python Django and integrated APIs like Calendly and Nimble for seamless communication. Utilized GCP Cloud services, creating serverless solutions with Cloud Functions to optimize data processing.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer",
          company: "Arrivy Inc.",
          company_url: "https://www.linkedin.com/company/arrivy/about",
          logo_path: "Arrivy_new_logo.svg",
          duration: "April 2023 - june 2023",
          location: "Lahore, Pakistan",
          description:
            "Developed dynamic interfaces with ReactJS and React-Bootstrap, enhancing user experience. Built efficient APIs using Python Django and integrated APIs like Calendly and Nimble for seamless communication. Created solutions to process data effectively without server management.",
          color: "#000000",
        },
        {
          title: "Freelancing",
          company: "Platform: Fiverr",
          company_url: "https://www.fiverr.com/",
          logo_path: "Fiverr.png",
          duration: "May 2021 - April 2023",
          location: "Remote",
          description:
            "As a freelancer on Fiverr, I have successfully developed various projects using the MERN stack (MongoDB, Express.js, React.js, Node.js). My work focuses was on creating efficient and scalable web applications, delivering high-quality results for my clients.i developed i lot of E-Commerece App, CMS and many more.",
          color: "#0071C5",
        },
        {
          title: "Frontend Web Developer",
          company: "Interns Pakistan · Internship",
          company_url:
            "https://www.linkedin.com/company/interns-pakistan/about/",
          logo_path: "internship_pakistan.jpeg",
          duration: "May 2021 - Aug 2022",
          location: "Remote",
          description:
            "During my internship, I mastered essential front-end tools such as HTML, CSS, Bootstrap, JQuery, and JSP, using them to develop cross-platform features with a focus on enhancing user interaction and design flexibility. This experience provided me with practical skills in crafting seamless web experiences and refining user interfaces.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Co-curricular activities",
      experiences: [
        {
          title: "Head of Indoor Games",
          company: "PUCIT",
          company_url: "https://pucit.edu.pk/",
          logo_path: "pucit.png",
          duration: "June 2022 - April-2024 ",
          location: "Lahore, Punjab",
          description:
            "As the Head of Indoor Games at Punjab University College of Information Technology (PUCIT), I spearheaded initiatives to foster engagement and camaraderie among students through a diverse range of indoor activities. Within the vibrant community of PUCIT, I organized and facilitated events designed to cater to various interests and skill levels, promoting inclusivity and teamwork. ",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Punjab, Pakistan",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
};

const publications = {
  data:[],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Moeez-hayder.svg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://medium.com/@haydermoeez",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Lahore, Punjab",
    locality: "Lahore",
    country: "Pakistan",
    region: "Asia",
    postalCode: "37110",
    streetAddress: "Bhatta Chowk",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/PbpYYUS5crXJ2jH9A",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
