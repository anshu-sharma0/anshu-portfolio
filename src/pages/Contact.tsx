import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Validation logic
  const validate = () => {
    const errors: { name: string; email: string; message: string } = {
      name: '',
      email: '',
      message: '',
    };

    if (!formData.name.trim()) {
      errors.name = 'Name is required.';
    } else if (formData.name.length < 3) {
      errors.name = 'Name must be at least 3 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Email is not valid.';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required.';
    } else if (formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters.';
    }

    setFormErrors(errors);
    return !Object.values(errors).some((error) => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return; // Stop submission if validation fails

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 animate-slide-in-left">Let's Work Together</h1>
          <p className="text-gray-600 mb-12 animate-slide-in-right">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out through any of the following channels.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="hover-lift bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                      formErrors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                  )}
                </div>
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                      formErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                      formErrors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <Send size={20} className="group-hover:animate-bounce" />
                      Send Message
                    </>
                  )}
                </button>
                {submitted && (
                  <div className="animate-fade-in absolute bottom-0 left-0 right-0 mb-4 text-center text-green-600 bg-green-100 py-2 rounded">
                    Message sent successfully!
                  </div>
                )}
              </form>
            </div>

            <div>
              <div className="hover-lift bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:ashu.dnn@gmail.com"
                    className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-all duration-300 group"
                  >
                    <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:translate-x-2 transition-transform">ashu.dnn@gmail.com</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/anshusharma08"
                    className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-all duration-300 group"
                  >
                    <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:translate-x-2 transition-transform">Anshu-Sharma</span>
                  </a>
                  <a
                    href="https://github.com/anshu-sharma0"
                    className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-all duration-300 group"
                  >
                    <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:translate-x-2 transition-transform">Anshu-Sharma</span>
                  </a>
                </div>
              </div>

              <div className="hover-lift bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg p-8 text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-dots opacity-30 transition-opacity group-hover:opacity-50"></div>
                <h2 className="text-2xl font-semibold mb-4 relative">Looking for a Frontend Developer?</h2>
                <p className="mb-6 relative">
                  I'm currently available for freelance work and full-time positions.
                  Let's build something amazing together!
                </p>
                <ul className="space-y-2 relative">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Custom Web Applications
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Responsive Design
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Performance Optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
