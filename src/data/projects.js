// Project data store
// Each project follows the schema defined in the design document

export const projects = [
  {
    id: "linkup-live-video-conferencing",
    title: "LinkUp Live - Video Conferencing Website",
    year: 2024,
    type: "fullstack",
    shortDescription: "Real-time video conferencing platform with 30% reduced bandwidth usage and secure multi-factor authentication",
    fullDescription: "Built a video conferencing platform using Next.js and TypeScript, enabling real-time communication with 30% reduced bandwidth usage. Integrated Clerk for multi-factor authentication and getStream for messaging, focusing on secure access, performance optimization, and seamless UI with Tailwind CSS and Shadcn.",
    problem: "Need for a secure, high-performance video conferencing solution with reduced bandwidth consumption for better accessibility.",
    solution: "Developed a full-stack video conferencing platform with optimized streaming, secure authentication, and real-time messaging capabilities.",
    features: [
      "Real-time video conferencing with optimized bandwidth",
      "Multi-factor authentication via Clerk",
      "Real-time messaging with getStream",
      "Secure access control",
      "Performance-optimized streaming",
      "Responsive UI with Tailwind CSS and Shadcn"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn", "Clerk", "getStream", "Vercel"],
    github: "https://github.com/22CB006/22CB006-LinkUpLive-Video_Conferencing_website.git",
    liveDemo: "http://22-cb-006-link-up-live-video-conferencing-website.vercel.app",
    images: [
      "/projects/linkup-live-video-conferencing/thumbnail.png",
      "/projects/linkup-live-video-conferencing/screenshot-1.jpg",
      "/projects/linkup-live-video-conferencing/screenshot-2.jpg",
      "/projects/linkup-live-video-conferencing/screenshot-3.jpg"
    ],
    caseStudy: "/case-studies/linkup-live-video-conferencing"
  },
  {
    id: "quick-ai-content-generation",
    title: "Quick AI - Content Generation Platform",
    year: 2025,
    type: "ai",
    shortDescription: "AI-powered creative assistant for generating articles, titles, and images with subscription-based access",
    fullDescription: "Built an AI-powered creative assistant using PERN Stack, integrated with OpenAI and ClipDrop APIs for generating articles, titles, and images. Deployed on Vercel, featuring dynamic content generation, image editing, and subscription-based access.",
    problem: "Content creators need efficient tools to generate high-quality articles, titles, and images quickly.",
    solution: "Created an AI-powered platform that leverages OpenAI and ClipDrop APIs to automate content creation with subscription-based access control.",
    features: [
      "AI-powered article generation",
      "Dynamic title suggestions",
      "Image generation and editing",
      "Subscription-based access",
      "Real-time content preview",
      "User authentication and management"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL (Neon DB)", "OpenAI API", "ClipDrop API", "Vercel"],
    github: "https://github.com/Vibhooshna/QuickAI",
    liveDemo: "https://quick-ai-sigma-six.vercel.app",
    images: [
      "/projects/quick-ai-content-generation/thumbnail.png",
      "/projects/quick-ai-content-generation/screenshot-1.jpg",
      "/projects/quick-ai-content-generation/screenshot-2.jpg",
      "/projects/quick-ai-content-generation/screenshot-3.jpg"
    ],
    caseStudy: "/case-studies/quick-ai-content-generation"
  },
  {
    id: "travel-management-system",
    title: "Travel Management System",
    year: 2025,
    type: "fullstack",
    shortDescription: "Modern travel management system built with Next.js 16 and React 19 with TypeScript",
    fullDescription: "A comprehensive travel management system built with the latest Next.js 16.0.10 and React 19.2.1, featuring TypeScript for type safety, Tailwind CSS 4 for styling, and optimized with Turbopack build tool.",
    problem: "Travel agencies need a modern, efficient system to manage bookings, itineraries, and customer information.",
    solution: "Built a full-featured travel management platform using cutting-edge technologies for optimal performance and developer experience.",
    features: [
      "Modern UI with Geist Sans & Geist Mono fonts",
      "Type-safe development with TypeScript",
      "Fast build times with Turbopack",
      "Responsive design with Tailwind CSS 4",
      "Code quality enforcement with ESLint 9",
      "Optimized performance with Next.js 16"
    ],
    techStack: ["Next.js 16.0.10", "React 19.2.1", "TypeScript 5", "Tailwind CSS 4", "Turbopack", "ESLint 9"],
    github: "https://github.com/22CB006/Travel_Management_System_NextJS",
    liveDemo: "https://travel-management-system-next-js.vercel.app/",
    images: [
      "/projects/travel-management-system/thumbnail.png",
      "/projects/travel-management-system/screenshot-1.jpg",
      "/projects/travel-management-system/screenshot-2.jpg",
      "/projects/travel-management-system/screenshot-3.jpg"
    ],
    caseStudy: "/case-studies/travel-management-system"
  },
  {
    id: "visual-lens-pro",
    title: "Visual Lens Pro",
    year: 2025,
    type: "web",
    shortDescription: "Professional visual content management platform built with Lovable",
    fullDescription: "A professional visual content management platform developed using Lovable, focusing on intuitive design and powerful content organization capabilities.",
    problem: "Content creators need an efficient way to manage and organize visual content with professional-grade tools.",
    solution: "Created a streamlined visual content platform with modern UI/UX and powerful management features.",
    features: [
      "Visual content organization",
      "Intuitive user interface",
      "Professional-grade tools",
      "Fast content management",
      "Responsive design",
      "Modern architecture"
    ],
    techStack: ["Lovable", "React", "TypeScript"],
    github: "https://github.com/22CB006/visual-lens-pro",
    liveDemo: "https://lovable.dev/projects/8a0a54a5-a4e9-46a1-9b83-d0ec182c7bbd",
    images: [
      "/projects/visual-lens-pro/thumbnail.png",
      "/projects/visual-lens-pro/screenshot-1.jpg",
      "/projects/visual-lens-pro/screenshot-2.jpg"
    ],
    caseStudy: "/case-studies/visual-lens-pro"
  },
  {
    id: "workflow-roi-calculator",
    title: "Workflow ROI Calculator",
    year: 2025,
    type: "web",
    shortDescription: "Interactive ROI calculator for workflow automation with automated email report delivery",
    fullDescription: "A Next.js application that calculates Return on Investment (ROI) for workflow automation, featuring email report delivery. Includes interactive calculations based on workforce metrics, automated email reports, and a modern, mobile-friendly interface.",
    problem: "Businesses need to quantify the ROI of workflow automation to make informed investment decisions.",
    solution: "Built an interactive calculator that computes ROI based on workforce metrics and delivers detailed reports via email.",
    features: [
      "Interactive ROI calculation based on workforce metrics",
      "Automated email report delivery",
      "Modern, responsive design with Tailwind CSS",
      "Mobile-friendly interface",
      "Real-time calculations",
      "Professional report generation"
    ],
    techStack: ["Next.js 15.4.1", "TypeScript", "Tailwind CSS 4", "Nodemailer", "Lucide React"],
    github: "https://github.com/22CB006/ROI_Calculator",
    liveDemo: "https://roi-calculator-seven-rosy.vercel.app/",
    images: [
      "/projects/workflow-roi-calculator/thumbnail.png",
      "/projects/workflow-roi-calculator/screenshot-1.jpg",
      "/projects/workflow-roi-calculator/screenshot-2.jpg"
    ],
    caseStudy: "/case-studies/workflow-roi-calculator"
  }
];
