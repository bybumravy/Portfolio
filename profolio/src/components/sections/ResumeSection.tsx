import { RESUME } from '@/data/resume'
import {Section} from "@/components/ui/Section";

export function ResumeSection() {
    const leftSections = RESUME.filter(s =>
        s.id === 'work' || s.id === 'education'
    )

    const rightSections = RESUME.filter(s =>
        s.id === 'activities' || s.id === 'awards'
    )

    return (
        <Section id="resume" className="py-24 px-4 border-t border-border/30">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                    Resume
                    <span className="block text-primary">My Professional Journey</span>
                </h2>

                <p className="text-foreground/60 mb-20 max-w-2xl">
                    My professional journey, achievements, and educational background
                </p>

                <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 items-start">
                    {/* ===== LEFT: TIMELINE ===== */}
                    <div className="relative pl-6">
                        <div className="absolute left-2 top-0 bottom-0 w-px bg-border/60" />

                        <div className="space-y-20">
                            {leftSections.map(section => (
                                <div key={section.id}>
                                    <h3 className="text-2xl font-semibold text-primary mb-10">
                                        {section.title}
                                    </h3>

                                    <div className="space-y-10">
                                        {section.items.map((item, idx) => (
                                            <div key={idx} className="relative">
                                                <div className="absolute -left-[3px] top-6">
                                                    <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_0_6px_rgba(124,58,237,0.12)]" />
                                                </div>

                                                <div className="rounded-2xl border border-border/50 bg-card/50 p-6 sm:p-8 hover:border-primary/30 transition-all">
                                                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-4">
                                                        <div>
                                                            <h4 className="text-xl font-bold">
                                                                {item.title}
                                                            </h4>
                                                            <p className="text-foreground/60">
                                                                {item.organization}
                                                            </p>
                                                        </div>
                                                        <span className="text-sm text-foreground/40">
                              {item.period}
                            </span>
                                                    </div>

                                                    <ul className="space-y-2">
                                                        {item.bullets.map(b => (
                                                            <li key={b} className="flex gap-3 text-foreground/70">
                                                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                                                                <span>{b}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ===== RIGHT: ACTIVITIES & AWARDS ===== */}
                    <div className="space-y-16">
                        {rightSections.map(section => (
                            <div key={section.id}>
                                <h3 className="text-2xl font-semibold text-primary mb-8">
                                    {section.title}
                                </h3>

                                <div className="space-y-6">
                                    {section.items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="rounded-2xl border border-border/50 bg-card/50 p-6 hover:border-primary/30 transition-all"
                                        >
                                            <div className="mb-3">
                                                <h4 className="font-semibold">{item.title}</h4>
                                                <p className="text-sm text-foreground/60">
                                                    {item.organization}
                                                </p>
                                                <p className="text-xs text-foreground/40 mt-1">
                                                    {item.period}
                                                </p>
                                            </div>

                                            <ul className="space-y-2">
                                                {item.bullets.map(b => (
                                                    <li key={b} className="text-sm text-foreground/70">
                                                        ▹ {b}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}
