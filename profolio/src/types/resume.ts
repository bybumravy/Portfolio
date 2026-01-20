export type ResumeItem = {
    title: string
    organization: string
    period: string
    bullets: string[]
}

export type ResumeSection = {
    id: 'work' | 'education' | 'activities' | 'awards'
    title: string
    items: ResumeItem[]
}
