import { 
  Code2, 
  Server, 
  Database, 
  Brain, 
  Workflow, 
  Wrench,
  Globe,
  Cloud
} from 'lucide-react';

export const skillsGridData = [
  {
    title: 'Frontend Development',
    icon: Code2,
    description: 'Building modern, responsive user interfaces with cutting-edge frameworks and tools.',
    skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Backend Development',
    icon: Server,
    description: 'Developing robust server-side applications and RESTful APIs.',
    skills: ['Node.js', 'FastAPI', 'REST APIs', 'Express.js']
  },
  {
    title: 'Databases',
    icon: Database,
    description: 'Designing and managing both SQL and NoSQL database systems.',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB']
  },
  {
    title: 'AI & GenAI Engineering',
    icon: Brain,
    description: 'Building intelligent systems with LLMs, RAG, and agentic AI solutions.',
    skills: ['LLMs', 'RAG', 'LangChain', 'LangGraph', 'MCP', 'Hugging Face']
  },
  {
    title: 'Vector Databases',
    icon: Database,
    description: 'Implementing efficient vector storage and similarity search for AI applications.',
    skills: ['FAISS', 'Chroma']
  },
  {
    title: 'AI Agents & Automation',
    icon: Workflow,
    description: 'Creating autonomous AI agents and workflow automation solutions.',
    skills: ['AI Agents', 'n8n', 'Task Automation', 'No-code AI']
  },
  {
    title: 'Dev Tools & Productivity',
    icon: Wrench,
    description: 'Leveraging modern development tools for efficient workflows.',
    skills: ['Git', 'CI/CD', 'Postman', 'Cursor', 'Kiro', 'Notebook LLM']
  },
  {
    title: 'CMS & Website Builders',
    icon: Globe,
    description: 'Building and customizing websites with popular CMS and no-code platforms.',
    skills: ['WordPress', 'Shopify', 'Wix', 'Squarespace', 'Webflow']
  },
  {
    title: 'Deployment & Hosting',
    icon: Cloud,
    description: 'Deploying and managing applications on modern cloud platforms.',
    skills: ['Vercel', 'Render', 'Hostinger']
  }
];
