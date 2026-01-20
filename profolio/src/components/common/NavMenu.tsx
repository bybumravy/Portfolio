type NavItem = {
    id: string
    label: string
}

type Props = {
    items: NavItem[]
    onNavigate: (id: string) => void
}
export function NavMenu({ items, onNavigate }: Props) {
    return (
        <nav className="relative space-y-1 pl-4">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border/40" />

            {items.map(i => (
                <button
                    key={i.id}
                    onClick={() => onNavigate(i.id)}
                    className="relative w-full px-4 py-3 text-left rounded-xl
            text-foreground/60 hover:text-primary hover:bg-secondary/30
            transition-all group"
                >
                    <span className="absolute left-[-17px] top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                    {i.label}
                </button>
            ))}
        </nav>
    )
}
