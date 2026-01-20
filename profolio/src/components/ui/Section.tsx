import type { ReactNode } from 'react'

export function Section({
                            id,
                            title,
                            description,
                            children
                        }: {
    id: string
    title: string
    description?: string
    children: ReactNode
}) {
    return (
        <section
            id={id}
            className="scroll-mt-28 py-24 sm:py-28 lg:py-32"
        >
            <div className="max-w-5xl mx-auto px-6 sm:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        {title}
                    </h2>

                    {description && (
                        <p className="mt-3 text-foreground/60 max-w-2xl">
                            {description}
                        </p>
                    )}
                </div>

                {children}
            </div>
        </section>
    )
}
