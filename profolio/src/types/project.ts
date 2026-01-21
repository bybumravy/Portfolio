export type Project = {
    title: string
    category: string
    desc: string
    image: string
    video?: string
    tech: string[]
    gradient: string
    details: {
        overview: string
        highlights: string[]
        role?: string
        timeline?: string
        duration?: string
        links?: {
            live?: string
            github?: string
        }
    }
}
