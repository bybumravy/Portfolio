import { useEffect } from 'react'
import type { Project } from '@/types/project'
import { ArrowUpRight, X } from 'lucide-react'

export function ProjectModal({
    project,
    onClose
}: {
    project: Project
    onClose: () => void
}) {
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        const prevOverflow = document.body.style.overflow
        const prevPaddingRight = document.body.style.paddingRight
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

        document.body.style.overflow = 'hidden'
        if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`
        window.addEventListener('keydown', onKeyDown)

        return () => {
            document.body.style.overflow = prevOverflow
            document.body.style.paddingRight = prevPaddingRight
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [onClose])

    return (
        <div className="fixed inset-0 z-[60]">
            <button
                className="absolute inset-0 bg-background/25 backdrop-blur-sm"
                onClick={onClose}
                aria-label="Close project details"
            />

            <div className="absolute inset-0 flex items-start sm:items-center justify-center p-4 sm:p-6">
                <div
                    role="dialog"
                    aria-modal="true"
                    className="w-full max-w-3xl max-h-[90vh] rounded-3xl border border-border/70 bg-card/98 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col"
                >
                    <div className="p-6 sm:p-8 overflow-y-auto">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm text-primary font-medium mb-2">
                                    {project.category}
                                    {project.details.timeline ? (
                                        <span className="text-foreground/40">
                                            {' '}
                                            · {project.details.timeline}
                                        </span>
                                    ) : null}
                                </p>
                                <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                                    {project.title}
                                </h3>
                                {project.details.role ? (
                                    <p className="mt-2 text-sm text-foreground/50">
                                        {project.details.role}
                                    </p>
                                ) : null}
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-xl hover:bg-secondary/50 transition-colors"
                                aria-label="Close"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <p className="mt-6 text-foreground/70 leading-relaxed">
                            {project.details.overview}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-3 py-1 rounded-full bg-foreground/5 text-foreground/70 border border-border/50"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="mt-6">
                            <p className="text-sm font-semibold text-foreground mb-3">
                                Key highlights
                            </p>
                            <ul className="space-y-2">
                                {project.details.highlights.map((item) => (
                                    <li key={item} className="flex gap-3 text-foreground/70">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
                            {project.details.links?.github ? (
                                <a
                                    href={project.details.links.github}
                                    className="inline-flex items-center justify-center rounded-xl border border-border/50 px-4 py-2 text-sm text-foreground/80 hover:border-primary/40 hover:bg-primary/5 transition-all"
                                >
                                    View code
                                    <ArrowUpRight className="ml-2 h-4 w-4" />
                                </a>
                            ) : null}
                            {project.details.links?.live ? (
                                <a
                                    href={project.details.links.live}
                                    className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 transition-all"
                                >
                                    Live demo
                                    <ArrowUpRight className="ml-2 h-4 w-4" />
                                </a>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
