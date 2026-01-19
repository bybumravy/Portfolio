export type Project = {
    title: string
    category: string
    desc: string
    image: string
    tech: string[]
    gradient: string
    details: {
        overview: string
        highlights: string[]
        role?: string
        timeline?: string
        links?: {
            live?: string
            github?: string
        }
    }
}
