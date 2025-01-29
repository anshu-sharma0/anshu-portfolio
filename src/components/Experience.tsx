const Experience = () => {
    return (
        <section className="py-20 bg-white scroll-animate">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
                <div className="max-w-3xl mx-auto">
                    <div className="relative pl-8 border-l-2 border-blue-600">
                        <div className="mb-10">
                            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1"></div>
                            <div className="hover-lift bg-white rounded-lg p-6 shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900">Frontend Developer</h3>
                                <p className="text-blue-600 mb-4">2024 - Present</p>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        Developed and maintained web applications using React.js and Next.js
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        Implemented secure authentication with Firebase and 2FA
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        Created reusable component libraries and design systems
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-2">•</span>
                                        Optimized application performance and loading times
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience