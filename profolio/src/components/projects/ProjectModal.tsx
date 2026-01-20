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
        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth

        document.body.style.overflow = 'hidden'
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`
        }

        window.addEventListener('keydown', onKeyDown)

        return () => {
            document.body.style.overflow = prevOverflow
            document.body.style.paddingRight = prevPaddingRight
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [onClose])

    return (
        <div className="fixed inset-0 z-[60]">
            {/* ===== Backdrop ===== */}
            <button
                className="absolute inset-0 bg-background/40 backdrop-blur-md"
                onClick={onClose}
                aria-label="Close project modal"
            />

            {/* ===== Modal Wrapper ===== */}
            <div className="absolute inset-0 flex items-start sm:items-center justify-center p-4 sm:p-6">
                <div
                    role="dialog"
                    aria-modal="true"
                    className="
            w-full max-w-3xl max-h-[90vh]
            rounded-3xl
            border border-border/60
            bg-gradient-to-br from-background via-card to-background
            shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]
            overflow-hidden flex flex-col
          "
                >
                    {/* ===== Header ===== */}
                    <div className="relative p-6 sm:p-8 border-b border-border/40 bg-background/80 backdrop-blur-xl">
                        <div className="flex items-start justify-between gap-4">
                            <div className="space-y-3">
                                <p className="text-sm text-primary font-medium">
                                    {project.category}
                                </p>

                                <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                                    {project.title}
                                </h3>

                                {/* ===== Meta Info ===== */}
                                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/60">
                                    {project.details.role && (
                                        <span>
            <strong className="text-foreground/80">Role:</strong>{' '}
                                            {project.details.role}
          </span>
                                    )}

                                    {project.details.duration && (
                                        <span>
            <strong className="text-foreground/80">Duration:</strong>{' '}
                                            {project.details.duration}
          </span>
                                    )}

                                    {project.details.timeline && (
                                        <span>
            <strong className="text-foreground/80">Timeline:</strong>{' '}
                                            {project.details.timeline}
          </span>
                                    )}
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                className="p-2 rounded-xl hover:bg-secondary/60 transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    </div>


                    {/* ===== Content ===== */}
                    <div className="p-6 sm:p-8 overflow-y-auto">
                        {/* ===== Overview ===== */}
                        <p className="text-foreground/70 leading-relaxed">
                            {project.details.overview}
                        </p>

                        {/* ===== Divider ===== */}
                        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

                        {/* ===== Tech Stack ===== */}
                        <div>
                            <p className="text-sm font-semibold text-foreground mb-3">
                                Tech Stack
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(tech => (
                                    <span
                                        key={tech}
                                        className="
                      text-xs px-3 py-1 rounded-full
                      bg-primary/10 text-primary
                      border border-primary/20
                    "
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                        </div>

                        {/* ===== Highlights ===== */}
                        <div className="relative mt-10 pl-4">
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-border/50" />

                            <p className="text-sm font-semibold text-foreground mb-4">
                                Key Highlights
                            </p>

                            <ul className="space-y-3">
                                {project.details.highlights.map(item => (
                                    <li
                                        key={item}
                                        className="flex gap-3 text-foreground/70"
                                    >
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ===== Actions ===== */}
                        <div className="mt-12 flex flex-col sm:flex-row gap-3 sm:justify-end">
                            {project.details.links?.github && (
                                <a
                                    href={project.details.links.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                    inline-flex items-center justify-center
                    rounded-xl border border-border/50
                    px-4 py-2 text-sm text-foreground/80
                    hover:border-primary/40 hover:bg-primary/5
                    transition-all
                  "
                                >
                                    View code
                                    <ArrowUpRight className="ml-2 h-4 w-4" />
                                </a>
                            )}

                            {project.details.links?.live && (
                                <a
                                    href={project.details.links.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                    inline-flex items-center justify-center
                    rounded-xl bg-primary
                    px-4 py-2 text-sm text-primary-foreground
                    hover:bg-primary/90 transition-all
                  "
                                >
                                    Live demo
                                    <ArrowUpRight className="ml-2 h-4 w-4" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
