import { Code2, Cpu, Layers } from 'lucide-react'

const Skills = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center scroll-animate">
                    Skills & Expertise
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
                    <div className="hover-lift p-8 rounded-xl bg-white shadow-lg">
                        <Code2 className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>React.js</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Next.js</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>JavaScript</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>TypeScript</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>CSS 3</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Tailwind CSS</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Redux & Context API</span>
                            </li>
                        </ul>
                    </div>

                    <div className="hover-lift p-8 rounded-xl bg-white shadow-lg">
                        <Cpu className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Git & Version Control</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Performance Optimization</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Google Auth0</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Zustand</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Responsive Web Design</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Progressive Web Apps (PWA)</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Mongo DB</span>
                            </li>
                        </ul>
                    </div>

                    <div className="hover-lift p-8 rounded-xl bg-white shadow-lg">
                        <Layers className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Figma</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Responsive Design</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Component Libraries</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Animation & Interaction</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>Design Systems</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="text-blue-600">•</span>
                                <span>User Research & Testing</span>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </section>)
}

export default Skills