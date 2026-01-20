import type { ResumeSection } from '@/types/resume'

export const RESUME: ResumeSection[] = [
    {
        id: 'work',
        title: 'Work Experience',
        items: [
            {
                title: 'Fullstack Developer',
                organization: 'VPBank',
                period: '09/2025 – Present',
                bullets: [
                    'Directly recruited as IT Specialist after reaching the finals of VPBank Technology Hackathon 2025',
                    'Developing CAIP (Conversation AI Platform) to improve customer experience',
                    'Developing and maintaining front-end and back-end features',
                    'Optimizing performance and troubleshooting production issues',
                    'Conducting testing and debugging to ensure deployment quality'
                ]
            }
        ]
    },
    {
        id: 'education',
        title: 'Education',
        items: [
            {
                title: 'Bachelor of Software Engineering',
                organization: 'FPT University',
                period: '09/2023 – Present',
                bullets: [
                    'Focused on software development, algorithms, and modern web technologies',
                    'GPA: 3.5 / 4.0',
                    'Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems',
                    'Member of Japanese Software Engineers Club (JS Club)'
                ]
            },
            {
                title: 'Specialized Physics Program',
                organization: 'Phan Boi Chau High School for the Gifted',
                period: '08/2020 – 06/2023',
                bullets: [
                    'Graduated from Physics specialized class',
                    'Built strong foundation in mathematics and science',
                    'Participated in provincial academic competitions'
                ]
            }
        ]
    },
    {
        id: 'activities',
        title: 'Activities',
        items: [
            {
                title: 'Head of Expertise Department Gen 12',
                organization: 'JS Club – Japanese Software Engineers',
                period: '01/2024 – Present',
                bullets: [
                    'Led and managed all technical activities in the club',
                    'Delegated tasks and coordinated officer team',
                    'Organized tech workshops and coding competitions'
                ]
            },
            {
                title: 'Head of Expertise Department',
                organization: 'Codefest 2025 – FPT University',
                period: '07/2025 – 08/2025',
                bullets: [
                    'Led technical team for Codefest 2025',
                    'Coordinated with other departments',
                    'Provided technical guidance during the event'
                ]
            }
        ]
    },
    {
        id: 'awards',
        title: 'Honors & Awards',
        items: [
            {
                title: 'Champion',
                organization: 'F-Talent Code 2025 – FPT University',
                period: '10/2025',
                bullets: [
                    'Algorithm contest across entire campus',
                    'Demonstrated strong problem-solving skills'
                ]
            },
            {
                title: 'Finalist – Impressive Product Award',
                organization: 'VPBank Technology Hackathon 2025',
                period: '05/2025 – 08/2025',
                bullets: [
                    'Built AI chatbot for automatic customer responses',
                    'Applied advanced NLP techniques',
                    'Integrated with VPBank customer service systems'
                ]
            },
            {
                title: 'Excellent Student',
                organization: 'FPTU Student Achievement Awards',
                period: '08/2024',
                bullets: [
                    'Recognized for academic excellence and contribution to university activities'
                ]
            }
        ]
    }
]
