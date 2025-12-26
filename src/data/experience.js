// Experience data store
// Positions are stored with start/end dates for chronological sorting

export const experiences = [
  {
    id: "fullstack-developer-techcorp",
    company: "TechCorp Solutions",
    role: "Full Stack Developer",
    duration: "Jan 2023 - Present",
    startDate: "2023-01-01",
    endDate: null,
    description: "Leading development of enterprise web applications and microservices architecture for Fortune 500 clients.",
    responsibilities: [
      "Architected and developed scalable microservices using Node.js and React",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with cross-functional teams to deliver features on schedule",
      "Optimized application performance resulting in 40% faster load times"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "TypeScript"]
  },
  {
    id: "ai-engineer-innovate",
    company: "Innovate AI Labs",
    role: "AI/ML Engineer",
    duration: "Jun 2022 - Dec 2022",
    startDate: "2022-06-01",
    endDate: "2022-12-31",
    description: "Developed machine learning models and AI solutions for natural language processing and computer vision applications.",
    responsibilities: [
      "Built and deployed NLP models for sentiment analysis with 92% accuracy",
      "Developed computer vision systems for object detection and tracking",
      "Optimized model training pipelines reducing training time by 50%",
      "Created REST APIs for model inference and integration",
      "Collaborated with data scientists on feature engineering and model selection"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "FastAPI", "Docker"]
  },
  {
    id: "frontend-developer-webstudio",
    company: "WebStudio Creative",
    role: "Frontend Developer",
    duration: "Jan 2021 - May 2022",
    startDate: "2021-01-01",
    endDate: "2022-05-31",
    description: "Created responsive, user-friendly web interfaces for diverse clients across multiple industries.",
    responsibilities: [
      "Developed responsive websites using React and modern CSS frameworks",
      "Implemented pixel-perfect designs from Figma mockups",
      "Ensured cross-browser compatibility and accessibility standards",
      "Integrated RESTful APIs and third-party services",
      "Improved website performance and SEO rankings"
    ],
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Git"]
  },
  {
    id: "intern-software-dev",
    company: "StartupHub Technologies",
    role: "Software Development Intern",
    duration: "Jun 2020 - Dec 2020",
    startDate: "2020-06-01",
    endDate: "2020-12-31",
    description: "Contributed to full-stack development projects and gained hands-on experience with modern web technologies.",
    responsibilities: [
      "Assisted in developing features for web applications using React and Node.js",
      "Fixed bugs and improved code quality through testing",
      "Participated in agile development processes and daily standups",
      "Learned best practices for version control and code collaboration",
      "Documented code and created technical specifications"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Git", "REST APIs"]
  }
];
