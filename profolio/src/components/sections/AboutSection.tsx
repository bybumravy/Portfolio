export function AboutSection() {
    const skills = [
        ['C++', 'C', 'Java', 'Python', 'TypeScript', 'JavaScript'],
        ['Azure', 'AWS', 'Docker', 'Apache Tomcat', 'Apache Maven'],
        ['MongoDB', 'Microsoft SQL Server', 'Bootstrap', 'Figma', 'Git', 'GitHub']
    ]

    return (
        <section id="about" className="py-24 px-4 border-t border-border/30">
            <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                            About
                            <span className="block text-primary">Me</span>
                        </h2>
                        <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                            Passionate about technology—especially exploring AI solutions and web development. I love experimenting and learning new technologies every day.
                        </p>
                        <p className="text-foreground/70 text-lg leading-relaxed">
                            I practice algorithms daily and enjoy building practical AI applications that can be applied to real projects.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {skills.map((skillGroup, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-xl border border-border/50 hover:border-primary/30 bg-card/50 hover:bg-card transition-all duration-300 group"
                            >
                                <div className="flex flex-wrap gap-3">
                                    {skillGroup.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20 group-hover:border-primary/40 group-hover:bg-primary/15 transition-all"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
