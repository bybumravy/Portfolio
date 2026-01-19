import type { ComponentType } from 'react'

type SocialLink = {
    icon: ComponentType<{ className?: string }>
    href: string
    label: string
}

export function SocialLinks({
    links,
    align = 'start',
    className = ''
}: {
    links: SocialLink[]
    align?: 'start' | 'center'
    className?: string
}) {
    return (
        <div className={`flex gap-4 ${align === 'center' ? 'justify-center' : ''} ${className}`}>
            {links.map(({ icon: Icon, href, label }) => (
                <a
                    key={label}
                    href={href}
                    className="p-3 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                    aria-label={label}
                >
                    <Icon className="h-5 w-5 group-hover:text-primary transition-colors" />
                    <span className="sr-only">{label}</span>
                </a>
            ))}
        </div>
    )
}
