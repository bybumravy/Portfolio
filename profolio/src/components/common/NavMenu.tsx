type Props = {
    items: { id: string; label: string }[]
    onNavigate: (id: string) => void
}

export function NavMenu({ items, onNavigate }: Props) {
    return (
        <nav className="space-y-2">
            {items.map(i => (
                <button
                    key={i.id}
                    onClick={() => onNavigate(i.id)}
                    className="w-full px-4 py-3 text-left rounded-xl
                     text-foreground/70 hover:text-primary hover:bg-secondary/30"
                >
                    {i.label}
                </button>
            ))}
        </nav>
    )
}
