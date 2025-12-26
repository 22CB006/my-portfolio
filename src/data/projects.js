// Project data store
// Each project follows the schema defined in the design document

export const projects = [
  {
    id: "ai-chatbot-assistant",
    title: "AI Chatbot Assistant",
    year: 2024,
    type: "ai",
    shortDescription: "Intelligent conversational AI assistant with natural language processing and context awareness",
    fullDescription: "A sophisticated AI-powered chatbot that provides intelligent responses using advanced NLP techniques and maintains conversation context across multiple interactions.",
    problem: "Users need quick, accurate answers to common questions without waiting for human support, but traditional chatbots lack context awareness and natural conversation flow.",
    solution: "Built an AI assistant using transformer-based models with conversation history tracking, intent classification, and dynamic response generation to provide human-like interactions.",
    features: [
      "Natural language understanding with 95% accuracy",
      "Context-aware responses across conversation sessions",
      "Multi-turn dialogue management",
      "Intent classification and entity extraction",
      "Customizable personality and tone"
    ],
    techStack: ["Python", "TensorFlow", "BERT", "FastAPI", "React", "WebSocket"],
    github: "https://github.com/aryalakshmi/ai-chatbot",
    liveDemo: "https://ai-chatbot-demo.vercel.app",
    images: []
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    year: 2023,
    type: "fullstack",
    shortDescription: "Full-featured online shopping platform with payment integration and inventory management",
    fullDescription: "A complete e-commerce solution with user authentication, product catalog, shopping cart, payment processing, and admin dashboard for inventory and order management.",
    problem: "Small businesses need an affordable, easy-to-manage online store without the complexity and cost of enterprise solutions.",
    solution: "Developed a scalable e-commerce platform with intuitive admin interface, secure payment processing, and responsive design that works across all devices.",
    features: [
      "User authentication and profile management",
      "Product catalog with search and filtering",
      "Shopping cart and wishlist functionality",
      "Stripe payment integration",
      "Admin dashboard for inventory and orders",
      "Order tracking and email notifications"
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT", "Tailwind CSS"],
    github: "https://github.com/aryalakshmi/ecommerce-platform",
    liveDemo: "https://ecommerce-demo.netlify.app",
    images: []
  },
  {
    id: "task-management-app",
    title: "Task Management Application",
    year: 2023,
    type: "web",
    shortDescription: "Collaborative task tracking tool with real-time updates and team collaboration features",
    fullDescription: "A modern task management application that enables teams to organize projects, assign tasks, track progress, and collaborate in real-time.",
    problem: "Teams struggle to coordinate tasks across multiple projects and lack visibility into project progress and team workload.",
    solution: "Created a real-time collaborative platform with drag-and-drop task boards, automated notifications, and comprehensive project analytics.",
    features: [
      "Kanban-style task boards with drag-and-drop",
      "Real-time collaboration with WebSocket",
      "Task assignment and priority management",
      "Project timelines and progress tracking",
      "Team activity feed and notifications",
      "File attachments and comments"
    ],
    techStack: ["React", "TypeScript", "Node.js", "Socket.io", "PostgreSQL", "Redux"],
    github: "https://github.com/aryalakshmi/task-manager",
    liveDemo: null,
    images: []
  },
  {
    id: "weather-forecast-app",
    title: "Weather Forecast Application",
    year: 2024,
    type: "web",
    shortDescription: "Real-time weather information with 7-day forecasts and location-based alerts",
    fullDescription: "A responsive weather application that provides current conditions, hourly and weekly forecasts, and severe weather alerts based on user location.",
    problem: "Users need quick access to accurate weather information with visual representations that are easy to understand at a glance.",
    solution: "Built a clean, intuitive weather app with real-time data from multiple APIs, interactive charts, and location-based personalization.",
    features: [
      "Current weather conditions with detailed metrics",
      "7-day forecast with hourly breakdowns",
      "Location search and geolocation support",
      "Weather alerts and notifications",
      "Interactive temperature and precipitation charts",
      "Favorite locations management"
    ],
    techStack: ["React", "OpenWeather API", "Chart.js", "Geolocation API", "CSS3"],
    github: "https://github.com/aryalakshmi/weather-app",
    liveDemo: "https://weather-forecast-app.vercel.app",
    images: []
  },
  {
    id: "ml-image-classifier",
    title: "Image Classification System",
    year: 2023,
    type: "ai",
    shortDescription: "Deep learning model for automated image classification with 98% accuracy",
    fullDescription: "A convolutional neural network-based system that automatically classifies images into predefined categories with high accuracy and real-time processing capabilities.",
    problem: "Manual image categorization is time-consuming and error-prone, especially when dealing with large datasets requiring consistent classification.",
    solution: "Trained a custom CNN model on a large dataset with data augmentation and transfer learning to achieve high accuracy while maintaining fast inference times.",
    features: [
      "Multi-class image classification",
      "Real-time prediction with confidence scores",
      "Batch processing for large datasets",
      "Model retraining interface",
      "Visualization of model predictions",
      "REST API for integration"
    ],
    techStack: ["Python", "PyTorch", "OpenCV", "Flask", "NumPy", "Docker"],
    github: "https://github.com/aryalakshmi/image-classifier",
    liveDemo: null,
    images: []
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    year: 2024,
    type: "web",
    shortDescription: "Modern, responsive portfolio showcasing projects and professional experience",
    fullDescription: "A professional portfolio website built with React, featuring dynamic content loading, SEO optimization, and a clean, modern design.",
    problem: "Need a professional online presence to showcase projects, skills, and experience to potential employers and clients.",
    solution: "Developed a data-driven portfolio with centralized content management, responsive design, and optimized performance for all devices.",
    features: [
      "Dynamic project showcase with filtering",
      "Detailed case study pages",
      "Experience timeline",
      "Contact form with validation",
      "SEO optimization with meta tags",
      "Fully responsive design"
    ],
    techStack: ["React", "React Router", "Tailwind CSS", "Vite"],
    github: "https://github.com/aryalakshmi/portfolio",
    liveDemo: null,
    images: []
  }
];
