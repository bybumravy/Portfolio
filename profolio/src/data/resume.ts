import type { ResumeSection } from '@/types/resume'
export const RESUME: ResumeSection[] = [
    {
        id: 'education',
        title: 'Education',
        items: [
            {
                title: 'Bachelor at FPT University',
                organization: 'FPT University',
                period: '09/2023 – 09/2025',
                bullets: [
                    '50% merit-based scholarship',
                    'Major in Information Technology',
                    'Active participation in academic and technical activities'
                ]
            },
            {
                title: 'High School Program',
                organization: 'FPT High School',
                period: '2021 – 2023',
                bullets: [
                    'Completed general high school education',
                    'Participated in extracurricular and academic competitions'
                ]
            },
            {
                title: 'Specialized Informatics Program',
                organization: 'Le Quy Don High School for the Gifted – Khanh Hoa',
                period: '2020 – 2021',
                bullets: [
                    'Top 10 entrance score for Informatics specialized class',
                    'Member of Informatics school team'
                ]
            }
        ]
    },
    {
        id: 'work',
        title: 'Work Experience',
        items: [
            {
                title: 'AI Training Assistant',
                organization: 'BKACAD Technology Academy',
                period: '2024 – 2025',
                bullets: [
                    'Worked as AI training staff',
                    'Supported teaching and training activities related to AI',
                    'Assisted learners with practical AI applications'
                ]
            },
            {
                title: 'Teaching Assistant – Basic Programming Course',
                organization: 'FPT_JSClub',
                period: '2024',
                bullets: [
                    'Assisted in teaching basic coding concepts and algorithms to beginners.'
                ]
            },
            {
                title: 'International Training Program',
                organization: 'FPT Japan Academy',
                period: '09/2025 – 12/2025',
                bullets: [
                    'Participated in 3-month study and training program in Japan',
                    'Focused on technology, culture, and professional skills',
                    'Improved Japanese working environment adaptability'
                ]
            }
        ]
    },
    {
        id: 'activities',
        title: 'Activities',
        items: [
            {
                title: 'Technical Committee Member',
                organization: 'JS Club',
                period: '2023 – 2024',
                bullets: [
                    'Participated in technical tasks and system support',
                    'Collaborated with other members on club projects'
                ]
            },
            {
                title: 'Participant',
                organization: 'Road to Olympia – Le Quy Don High School',
                period: '2021',
                bullets: [
                    'Joined academic inspiration program',
                    'Represented school in intellectual activities'
                ]
            }
        ]
    },
    {
        id: 'awards',
        title: 'Honors & Awards',
        items: [
            {
                title: 'Top 8 Teams',
                organization: 'Critical Thinking Competition – PDP',
                period: '2022',
                bullets: [
                    'Ranked Top 8 among participating teams',
                    'Demonstrated strong analytical and debating skills'
                ]
            },
            {
                title: 'City-level Awards',
                organization: 'Academic Competitions',
                period: '2020 – 2023',
                bullets: [
                    'Consolation Prize – IOE English Competition',
                    'Consolation Prize – Violympic Mathematics',
                    'Consolation Prize – History Competition'
                ]
            },
            {
                title: 'Third Prize',
                organization: 'Phu Dong Sports Festival – Chess',
                period: '2021',
                bullets: [
                    'Achieved third place in city-level chess competition'
                ]
            },
            {
                title: 'English Proficiency',
                organization: 'IELTS',
                period: '2023',
                bullets: [
                    'Overall score: IELTS 5.5'
                ]
            }
        ]
    }
]
