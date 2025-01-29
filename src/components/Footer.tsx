import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
              <p className="text-gray-400">Open for exciting opportunities</p>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/anshu-sharma0" target='_blank' className="hover-lift p-3 rounded-full bg-white/10">
                <Github size={24} className="text-white hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://linkedin.com/in/anshusharma08" target='_blank' className="hover-lift p-3 rounded-full bg-white/10">
                <Linkedin size={24} className="text-white hover:text-blue-400 transition-colors" />
              </a>
              <a href="mailto:ashu.dnn@gmail.com" className="hover-lift p-3 rounded-full bg-white/10">
                <Mail size={24} className="text-white hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>
    </footer>  
    )
}

export default Footer
