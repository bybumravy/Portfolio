import { EXPERIENCE } from '@/data/experience'
import { Award } from 'lucide-react'

export function ExperienceSection() {
    return (
        <section id="experience" className="py-24 px-4 border-t border-border/30">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold mb-16 leading-tight">
                    Work
                    <span className="block text-primary">Experience</span>
                </h2>

                <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
                    {/* Timeline column */}
                    <div className="relative pl-6 sm:pl-10">
                        <div className="absolute left-2 sm:left-4 top-0 bottom-0 w-px bg-border/50" />

                        <div className="space-y-8">
                            {EXPERIENCE.map((job, idx) => (
                                <div key={idx} className="relative">
                                    <div className="absolute left-0 sm:left-2 top-6">
                                        <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_0_6px_rgba(124,58,237,0.12)]" />
                                    </div>

                                    <div className="rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 p-6 sm:p-8">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                            <div>
                                                <h3 className="text-2xl font-bold mb-2 leading-tight">
                                                    {job.role}
                                                </h3>
                                                <p className="text-primary font-medium">{job.company}</p>
                                            </div>

                                            <div className="flex flex-col items-start sm:items-end gap-2">
                                                <span className="px-3 py-1 rounded-full bg-foreground/5 text-foreground/70 border border-border/50 text-xs">
                                                    {job.period}
                                                </span>
                                                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-medium">
                                                    {job.highlight}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="mt-4 text-foreground/70 leading-relaxed">
                                            {job.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Rewards */}
                    <aside className="lg:sticky lg:top-24 rounded-2xl border border-border/50 bg-card/50 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Award className="h-5 w-5 text-primary" />
                            <h3 className="text-lg font-semibold">Rewards</h3>
                        </div>

                        <div className="space-y-5">
                            {EXPERIENCE.map((job, idx) => (
                                <div key={idx} className="rounded-xl border border-border/40 bg-background/30 p-4">
                                    <p className="text-sm font-semibold">{job.company}</p>
                                    <p className="text-xs text-foreground/50 mt-1">{job.period}</p>

                                    {job.rewards?.length ? (
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {job.rewards.map((r) => (
                                                <span
                                                    key={r}
                                                    className="text-xs px-3 py-1 rounded-full bg-foreground/5 text-foreground/70 border border-border/50"
                                                >
                                                    {r}
                                                </span>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="mt-3 text-sm text-foreground/50">No rewards listed yet.</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}
