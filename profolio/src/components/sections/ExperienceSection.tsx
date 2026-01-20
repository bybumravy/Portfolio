import { EXPERIENCE } from '@/data/experience'
import { ACHIEVEMENTS } from '@/data/achievements'
import { Award } from 'lucide-react'

export function ExperienceSection() {
    return (
        <section
            id="experience"
            className="py-24 px-4 border-t border-border/30"
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold mb-16 leading-tight">
                    Education &
                    <span className="block text-primary">Experience</span>
                </h2>

                <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
                    {/* ===== Timeline ===== */}
                    <div className="relative pl-6 sm:pl-10">
                        <div className="absolute left-2 sm:left-4 top-0 bottom-0 w-px bg-border/50" />

                        <div className="space-y-10">
                            {EXPERIENCE.map((item, idx) => (
                                <div key={idx} className="relative">
                                    <div className="absolute left-0 sm:left-2 top-6">
                                        <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_0_6px_rgba(124,58,237,0.12)]" />
                                    </div>

                                    <div className="rounded-2xl border border-border/50 bg-card/50 hover:bg-card transition-all duration-300 p-6 sm:p-8">
                                        <span className="text-xs text-foreground/50">
                                            {item.period}
                                        </span>

                                        <h3 className="text-xl sm:text-2xl font-bold mt-2">
                                            {item.title}
                                        </h3>

                                        {item.subtitle && (
                                            <p className="mt-1 text-foreground/70">
                                                {item.subtitle}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ===== Achievements ===== */}
                    <aside className="lg:sticky lg:top-24 rounded-2xl border border-border/50 bg-card/50 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Award className="h-5 w-5 text-primary" />
                            <h3 className="text-lg font-semibold">
                                Thành tích
                            </h3>
                        </div>

                        <ul className="space-y-3">
                            {ACHIEVEMENTS.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="text-sm text-foreground/70 leading-relaxed"
                                >
                                    • {item}
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </div>
        </section>
    )
}
