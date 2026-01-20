import { useState } from 'react'
import { PROJECTS } from '@/data/projects'
import { ProjectCard } from '../projects/ProjectCard'
import { ProjectModal } from '../projects/ProjectModal'
import {Section} from "@/components/ui/Section";

export function ProjectsSection() {
    const [active, setActive] = useState<number | null>(null)
    const [hovered, setHovered] = useState<number | null>(null)

    return (
        <Section id="work" className="py-24 px-4 bg-secondary/20 border-t border-border/30">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold mb-16 leading-tight">
                    Highlighted
                    <span className="block text-primary">Projects</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {PROJECTS.map((p, i) => (
                        <ProjectCard
                            key={p.title}
                            project={p}
                            isHovered={hovered === i}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            onClick={() => setActive(i)}
                        />
                    ))}
                </div>

                {active !== null && (
                    <ProjectModal project={PROJECTS[active]} onClose={() => setActive(null)} />
                )}
            </div>
        </Section>
    )
}
