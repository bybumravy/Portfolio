import type { Project } from '@/types/project'

export const PROJECTS: Project[] = [
    {
        title: 'Student Rental Website',
        category: 'Highlighted Project',
        desc: 'Built a user-friendly web interface to help students easily find and rent accommodations.',
        image: '/projects/rent.png',
        tech: ['HTML', 'CSS', 'JavaScript'],
        gradient: 'from-emerald-500/20 to-blue-500/20',
        details: {
            overview:
                'A student-focused rental website that prioritizes clarity, fast browsing, and a smooth UI for searching and viewing listings.',
            highlights: [
                'Built clean, responsive UI for search and listing pages',
                'Improved usability with clear information hierarchy',
                'Focused on performance and mobile-friendly layout'
            ],
            duration: '3 months',
            timeline: 'Highlighted project',
            role: 'Frontend Developer',
            links: {
                live: '#',
                github: 'https://github.com/phongnd1203/jsclub-gen12-cm4-project'
            }
        }
    },
    {
        title: 'IELTS Practice Website (Leader)',
        category: 'AI + Web Development',
        desc: 'Applied AI and audio analysis to assess IELTS Speaking/Writing and improve scoring quality.',
        image: '/projects/ielts.png',
        tech: ['AI', 'Audio analysis', 'Database', 'UI design', 'Prompt engineering'],
        gradient: 'from-violet-500/20 to-cyan-500/20',
        details: {
            overview:
                'An IELTS practice platform where AI + audio analysis help evaluate Speaking and Writing, supporting better feedback and more consistent scoring.',
            highlights: [
                'Applied AI + audio analysis to assess Speaking and Writing',
                'Designed the database system and overall architecture',
                'Delegated tasks, tracked progress, and led the team delivery',
                'Used prompt engineering to improve AI scoring quality'
            ],
            role: 'Leader • Architect • AI Developer',
            timeline: 'Highlighted project',
            links: {
                live: '#',
                github: '#'
            },
            duration: '3 months'
        }
    }
]
