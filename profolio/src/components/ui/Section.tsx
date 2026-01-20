import type { ReactNode } from "react"

type SectionProps = {
    id: string
    title?: string
    description?: string
    className?: string
    children: ReactNode
}

export function Section({
                            id,
                            title,
                            description,
                            className,
                            children,
                        }: SectionProps) {
    return (
        <section
            id={id}
            className={`relative ${className ?? ""}`}
        >
            {(title || description) && (
                <header className="mb-12 max-w-2xl">
                    {title && (
                        <h2 className="text-3xl font-bold">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="mt-4 text-muted-foreground">
                            {description}
                        </p>
                    )}
                </header>
            )}

            {children}
        </section>
    )
}
