import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js and Stripe integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart and checkout process',
      'Order management system'
    ]
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Firebase', 'Redux', 'Material-UI'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Real-time collaboration',
      'Task assignment and tracking',
      'Project timeline visualization',
      'File attachment support'
    ]
  },
  {
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with location-based forecasts.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'TypeScript', 'Weather API', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Location-based weather data',
      'Interactive weather maps',
      'Historical weather data',
      'Weather alerts system'
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
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4 animate-slide-in-left">Featured Projects</h1>
        <p className="text-gray-600 mb-12 max-w-2xl animate-slide-in-right">
          Here are some of my recent projects that showcase my skills in frontend development,
          UI/UX design, and technical implementation.
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
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors group"
                    >
                      <ExternalLink size={20} className="group-hover:animate-bounce" />
                      <span className="group-hover:underline">Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors group"
                    >
                      <Github size={20} className="group-hover:animate-bounce" />
                      <span className="group-hover:underline">View Code</span>
                    </a>
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
