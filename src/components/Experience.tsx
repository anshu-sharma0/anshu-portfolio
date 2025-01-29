import { Wand2, Brain } from 'lucide-react'
const Experience = () => {
    return (
        <section className="pb-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center scroll-animate">
                    Experience
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
                    
                    <div className="hover-lift p-8 rounded-xl bg-white shadow-lg">
                        <Wand2 className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-semibold mb-4">Frontend Developer</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Developed and maintained web applications using React.js and Next.js</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Implemented secure authentication with Firebase and 2FA</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Created reusable component libraries and design systems</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Optimized application performance and loading times</span>
                            </li>
                        </ul>
                    </div>

                    <div className="hover-lift p-8 rounded-xl bg-white shadow-lg">
                        <Brain className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-semibold mb-4">Backend Developer</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Developed RESTful APIs using Express.js and integrated them with Next.js applications</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Managed server-side logic, data handling, and database integration</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Built and optimized database queries for performance and scalability</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Implemented authentication and authorization systems using JWT and OAuth2</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
