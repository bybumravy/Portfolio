export type ExperienceItem = {
    role: string
    company: string
    period: string
    highlight: string
    desc: string
    rewards: string[]
}

export const EXPERIENCE: ExperienceItem[] = [
    {
        role: 'AI Project Development',
        company: 'BKACAD (BKACAD Technology Academy)',
        period: 'Work experience',
        highlight: 'Prompt engineering • real-world AI application',
        desc: 'Developed AI projects, learned prompt engineering, and successfully applied it to real-world project requirements.',
        rewards: [
            'Applied prompt engineering to improve AI quality',
            'Delivered working AI features in practical projects'
        ]
    },
    {
        role: 'Leader • Architect • AI Developer',
        company: 'IELTS Practice Website',
        period: 'Highlighted project',
        highlight: 'AI scoring • audio analysis • database design',
        desc: 'Led the team, designed the database system, delegated tasks, managed progress, and improved AI scoring quality for Speaking/Writing via prompt engineering.',
        rewards: [
            'Team leadership & delivery ownership',
            'Improved scoring quality through iterative prompting'
        ]
    }
]
