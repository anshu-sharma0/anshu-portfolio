import { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Rolling Around Dashboard',
    description: 'A real-time dashboard for tracking bike routes. Admins have full control over users, routes, and waypoints. Route Managers manage specific routes, and Users track their routes live. Role-based access ensures easy management.',
    image: 'images/bike.jpg',
    tags: ['Next.js', 'TypeScript', 'ShadCn UI', 'Tailwind CSS'],
    liveUrl: 'https://rolling-around-admin-panel.vercel.app',
    githubUrl: '#',
    features: [
      'Full control for Admins over users, routes, and waypoints',
      'Route creation, editing, and deletion by Admin',
      'Route Managers can manage specific routes and waypoints',
      'Role-based access with different permissions'
    ]
  },
  {
    title: 'Pipeline App',
    description: 'Pipeline automates prospecting by extracting company and contact details from LinkedIn and generating personalized outreach messages, helping you connect with leads and close deals faster.',
    image: '/images/pipeline.png',
    tags: ['React', 'TypeScript', 'Redux', 'Tailwind-UI'],
    liveUrl: 'https://app.withpipeline.com/',
    githubUrl: '#',
    features: [
      'Real-time collaboration',
      'Automated LinkedIn prospecting and lead extraction',
      'Time-saving automation for sales teams',
      'Increased efficiency in lead conversion'
    ]
  },
  {
    title: 'Strumming Magician',
    description: 'Strumming Magician lets users play guitar chords in real-time, built with Express.js and core JavaScript. Users can log in to save, share, or download their songs, making it easy to practice and share music.',
    image: '/images/guitar.jpg',
    tags: ['Express.js', 'JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://strummingmagician.com/',
    githubUrl: '#',
    features: [
      'Real-time guitar chord strumming',
      'Built with Express.js and core JavaScript',
      'User login to save, share, or download songs',
      'Easy to track and share musical creations'
    ]
  },
  {
    title: 'AI ChatBot',
    description: 'The AI Chatbot uses the Gemini API for smart, responsive conversations with an intuitive UI. It’s built as a PWA for a smooth mobile app experience, providing seamless interactions across devices.',
    image: '/images/ai.jpg',
    tags: ['React', 'TypeScript', 'Gemini API', 'PWA'],
    liveUrl: 'https://real-ai-chat-bot.vercel.app/',
    githubUrl: '#',
    features: [
      'Powered by Gemini API for intelligent responses',
      'User-friendly, responsive UI',
      'PWA for a smooth mobile app experience',
      'Seamless interactions across devices'
    ]
  }
];

function Projects() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-up');
            entry.target.classList.remove('opacity-0'); // Remove opacity-0 after animation triggers
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.project-card').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="pt-12 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4 animate-slide-in-left">Featured Projects</h1>
        <p className="text-gray-600 mb-12 animate-slide-in-right">
          Here are some of my recent projects that showcase my skills in Web development, UI/UX design, and technical implementation.
        </p>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card opacity-0 group bg-white rounded-xl shadow-lg overflow-hidden hover-lift"
            >
              <div className="md:grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full  transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Key Features:</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors group"
                    >
                      <ExternalLink size={20} className="group-hover:animate-bounce" />
                      <span className="group-hover:underline">Live Demo</span>
                    </a>
                    {/* <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors group"
                    >
                      <Github size={20} className="group-hover:animate-bounce" />
                      <span className="group-hover:underline">View Code</span>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
