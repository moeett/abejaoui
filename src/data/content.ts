import { 
  PersonalInfo, 
  SkillCategory, 
  Education, 
  Award, 
  Project, 
  Testimonial, 
  SocialLink, 
  NavigationItem,
  Statistics 
} from '@/types'

export const personalInfo: PersonalInfo = {
  name: "Ahmed Khalil Bejaoui",
  title: "Tech Lead - Software Engineer",
  description: "High level experience in web design and development knowledge, producing quality work.",
  location: "Munich, Germany",
  email: "ahmed@abejaoui.com",
  calendly: "https://calendly.com/akbejaoui",
  cvUrl: "https://assets.abejaoui.com/pdf/resume/abejaoui-Curriculum_Vitae_en.pdf",
  profileImage: "/images/profile.jpg"
}

export const aboutDescription = "Tech Lead, with extensive knowledge and years of experience, working in web technologies, mobile, and Ui / Ux design, delivering quality work and a solution to every problem."

export const statistics: Statistics = {
  years: "12+",
  projects: "20+",
  companies: "05+"
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Agile & Project Management",
    experience: "8 years",
    skills: [
      { name: "Agile", percentage: 98 },
      { name: "Scrum", percentage: 98 },
      { name: "Planning & estimations", percentage: 100 },
      { name: "Requirement Analysis", percentage: 100 },
      { name: "Problem solving", percentage: 100 }
    ]
  },
  {
    name: "Frontend Developer",
    experience: "More than 10 years",
    skills: [
      { name: "HTML", percentage: 100 },
      { name: "CSS", percentage: 95 },
      { name: "JavaScript / TypeScript", percentage: 95 },
      { name: "React", percentage: 95 },
      { name: "Angular", percentage: 95 }
    ]
  },
  {
    name: "Backend developer",
    experience: "More than 10 years",
    skills: [
      { name: "NodeJs", percentage: 95 },
      { name: "Python", percentage: 75 },
      { name: "Micro Services", percentage: 80 },
      { name: "REST / OpenAPI", percentage: 95 }
    ]
  },
  {
    name: "Data Visualisation & Analysis",
    experience: "2 years",
    skills: [
      { name: "E-Charts", percentage: 80 },
      { name: "D3", percentage: 80 },
      { name: "DataBricks", percentage: 70 }
    ]
  },
  {
    name: "DevOps & Infrastructure",
    experience: "3 years",
    skills: [
      { name: "Docker", percentage: 95 },
      { name: "Kubernetes", percentage: 75 },
      { name: "Micro services", percentage: 80 },
      { name: "DevOps / CI/CD", percentage: 80 }
    ]
  },
  {
    name: "Cloud",
    experience: "4 years",
    skills: [
      { name: "AWS Services", percentage: 90 },
      { name: "Google Cloud", percentage: 50 },
      { name: "Serverless, Lambda", percentage: 90 }
    ]
  },
  {
    name: "Database & Storage",
    experience: "More than 10 years",
    skills: [
      { name: "SQL/NoSQL", percentage: 98 },
      { name: "PostgresSQL", percentage: 98 },
      { name: "DynamoDB", percentage: 90 },
      { name: "Redis", percentage: 95 }
    ]
  },
  {
    name: "Hardware & Prototyping",
    experience: "4 years",
    skills: [
      { name: "Arduino", percentage: 80 },
      { name: "Raspberry PI", percentage: 75 }
    ]
  }
]

export const education: Education[] = [
  {
    degree: "Computer Software Engineer",
    institution: "ESPRIT university",
    location: "Tunis, Tunisia",
    period: "2013 - 2016"
  },
  {
    degree: "License of Computer Science",
    institution: "ENICAR university",
    location: "Tunis, Tunisia",
    period: "2010 - 2013"
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Hannibal High School",
    location: "Tunis, Tunisia",
    period: "2006 - 2010"
  }
]

export const awards: Award[] = [
  {
    title: "Certified Galactic Problem Solver",
    authority: "National Aeronautics and Space Administration - Certification authority NASA"
  },
  {
    title: "Certified Microsoft Specialist",
    authority: "Microsoft - Exam 70-480 - HTML5, CSS3 and JavaScript"
  },
  {
    title: "Software Architecture & Design",
    authority: "Software architecture & design of Modern large scale systems"
  },
  {
    title: "Certified Arduino Specialist",
    authority: "TheBest training center - arduino architecture and development"
  }
]

export const projects: Project[] = [
  {
    id: "oilfox",
    title: "Oilfox Insights",
    description: "Oilfox - A smart and connected iOT device, helps with measurement and tracking different types of tank liquids remotely.",
    technologies: ["IoT", "React", "AWS", "Node.js"],
    featured: true,
    category: "IoT"
  },
  {
    id: "twaice",
    title: "Twaice Technologies GmbH",
    description: "Optimise and maintain a dashboard for Battery KPI analytics and Safety/Performance management",
    technologies: ["React", "TypeScript", "D3.js", "AWS"],
    category: "Analytics"
  },
  {
    id: "finway",
    title: "finway GmbH",
    description: "Building and maintaining a dashboard for invoice processing and expense management.",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Docker"],
    category: "FinTech"
  },
  {
    id: "innosabi-suite",
    title: "innosabi GmbH",
    description: "Developing and maintaining a complex yet big innovation and idea management platform for domestic and international clients.",
    technologies: ["Angular", "Java", "Spring", "MySQL"],
    category: "Enterprise"
  },
  {
    id: "holiday-extras",
    title: "Holiday Extras GmbH",
    description: "Developing and maintaining a complex platform of 480 micro services for booking holidays, airport parkings and lounges, hotels and other services",
    technologies: ["Node.js", "Microservices", "AWS", "Docker"],
    category: "Travel"
  },
  {
    id: "watsomapp",
    title: "WatsomApp Ltd",
    description: "Co-founded as a CTO the one and only AI in the world that helps prevent bullying at schools.",
    technologies: ["AI", "Python", "TensorFlow", "React"],
    featured: true,
    category: "AI/ML"
  },
  {
    id: "flash-to-cloud",
    title: "Flash To Cloud",
    description: "Microsoft Imagine Cup Tunisia winner. A concept of a smart & conected USB drive.",
    technologies: ["Hardware", "IoT", "C++", "Azure"],
    category: "Hardware"
  },
  {
    id: "real-fight",
    title: "Real fight Gloves",
    description: "Smart and connected glove, helps with AR/VR games control.",
    technologies: ["AR/VR", "Unity", "C#", "Hardware"],
    category: "Gaming"
  },
  {
    id: "painting-scanner",
    title: "Painting Scanner",
    description: "With AI and Augmented reality technology we provide information for every famous painting in the world.",
    technologies: ["AI", "AR", "Computer Vision", "Mobile"],
    category: "AI/ML"
  }
]

export const portfolioQuote = {
  text: "The only way to discover the limits of the possible is to go beyond them into the impossible.",
  author: "Arthur C. Clarke"
}

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ahmed-khalil-bejaoui-122a1769/",
    icon: "linkedin",
    color: "#0077B5"
  },
  {
    name: "GitHub",
    url: "https://github.com/akbejaoui",
    icon: "github",
    color: "#333"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCWt9G4UUzHtKqVoeUxWNaGg",
    icon: "youtube",
    color: "#FF0000"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/akbejaoui/",
    icon: "instagram",
    color: "#E4405F"
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/playlist/7vrzSWmC0z2XS6w5BY7WJN?si=2bd271fdca5844df",
    icon: "spotify",
    color: "#1DB954"
  },
  {
    name: "Medium",
    url: "https://medium.com/@ahmedbejaoui",
    icon: "medium",
    color: "#00AB6C"
  }
]

export const navigation: NavigationItem[] = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Portfolio", href: "#portfolio", id: "portfolio" },
  { name: "Contact", href: "#contact", id: "contact" }
]

export const footerNavigation: NavigationItem[] = [
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Awards", href: "#experience", id: "experience" },
  { name: "Portfolio", href: "#portfolio", id: "portfolio" }
]
