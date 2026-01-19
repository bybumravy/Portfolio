import type { Project } from '@/types/project'
import { ChevronRight } from 'lucide-react'

export function ProjectCard({
    project,
    isHovered,
    onMouseEnter,
    onMouseLeave,
    onClick
}: {
    project: Project
    isHovered: boolean
    onMouseEnter: () => void
    onMouseLeave: () => void
    onClick: () => void
}) {
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer ${
                isHovered
                    ? 'border-primary/50 bg-gradient-to-br from-primary/10 to-primary/5 shadow-lg'
                    : 'border-border/50 bg-card/50 hover:border-primary/30'
            }`}
        >
            <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
            />

            <div className="relative">
                <div className="aspect-video w-full overflow-hidden border-b border-border/40 bg-foreground/5">
                    <img
                        src={project.image}
                        alt={`${project.title} cover`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                    />
                </div>

                <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <p className="text-sm text-primary font-medium mb-2">
                                {project.category}
                            </p>
                            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                        </div>
                        <ChevronRight className="h-6 w-6 text-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>

                    <p className="text-foreground/60 mb-6 leading-relaxed">
                        {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="text-xs px-3 py-1 rounded-full bg-foreground/5 text-foreground/60 border border-border/50 group-hover:border-primary/30 group-hover:text-primary transition-all"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
