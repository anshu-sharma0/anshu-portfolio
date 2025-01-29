import { useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import { Link } from 'react-router-dom';

function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div>
      <header className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-dots opacity-30"></div>
        <div className="container mx-auto px-6 py-20 relative">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-left">
              Hi, I'm <span className="text-gradient">Anshu</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl animate-slide-in-right">
              A passionate Frontend Developer crafting beautiful, user-centric web experiences
              with React.js and Next.js
            </p>
            <div className="flex gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              {/* <a
                href="#contact"
                className="glass-effect px-8 py-3 rounded-lg font-semibold hover-glow group"
              >
                <span className="group-hover:animate-bounce inline-block">Hire Me</span>
              </a> */}
              <Link
                to="/projects"
                className="border-2 border-white/30 glass-effect px-8 py-3 rounded-lg font-semibold hover-glow group"
              >
                <span className="group-hover:animate-bounce inline-block">View Projects</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </header>

      <Skills />

      <Experience />

      <Footer />

    </div>
  );
}

export default Home;