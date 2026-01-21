import type { Project } from '@/types/project'
import ielts from '@/assets/ielts.png'
import rent from '@/assets/rent.png'
import luckyWheel from '@/assets/LuckyWheel.png'
import portfolio from '@/assets/portfolio.png'
import iotCarImg from '@/assets/iot.jpg'
import iotHand from '@/assets/iothand.mp4'


export const PROJECTS: Project[] = [
    {
        title: 'Student Rental Website',
        category: 'Highlighted Project',
        desc: 'Built a user-friendly web interface to help students easily find and rent accommodations.',
        image: rent,
        video: '/videos/iot-car-demo.mp4',
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
        title: 'IELTS Practice Website',
        category: 'AI + Web Development',
        desc: 'Applied AI and audio analysis to assess IELTS Speaking and Writing with higher scoring accuracy.',
        image: ielts,
        tech: ['AI', 'Audio Analysis', 'Database', 'UI Design', 'Prompt Engineering'],
        gradient: 'from-violet-500/20 to-cyan-500/20',
        details: {
            overview:
                'An IELTS practice platform where AI and audio analysis are used to evaluate Speaking and Writing skills, providing consistent feedback and scoring.',
            highlights: [
                'Applied AI and audio analysis to assess Speaking and Writing skills',
                'Designed database system and system architecture',
                'Delegated tasks and managed team progress',
                'Used prompt engineering to improve AI scoring quality'
            ],
            duration: '3 months',
            timeline: 'Highlighted project',
            role: 'Leader • Architect • AI Developer',
            links: {
                live: '#',
                github: '#'
            }
        }
    },
    {
        title: 'Lucky Wheel Web App',
        category: 'Interactive Web App',
        desc: 'An interactive lucky wheel game with smooth animations and quiz-based reward unlocking.',
        image: luckyWheel,
        tech: ['TypeScript', 'React'],
        gradient: 'from-orange-500/20 to-pink-500/20',
        details: {
            overview:
                'A high-speed spinning lucky wheel web application designed to maximize user engagement through animations and interactive game logic.',
            highlights: [
                'Developed optimized high-speed wheel rotation logic',
                'Integrated quiz-based mechanism to unlock rewards',
                'Implemented smooth animations and interactive UI',
                'Enhanced user engagement through game mechanics'
            ],
            duration: '1–2 months',
            timeline: 'Personal project',
            role: 'Frontend Developer',
            links: {
                live: 'https://bybumravy.github.io/LuckyWheel/',
                github: 'https://github.com/bybumravy/LuckyWheel'
            }
        }
    },
    {
        title: 'Personal Portfolio Website',
        category: 'Frontend Project',
        desc: 'A frontend-only personal portfolio to showcase projects, skills, and GitHub activities.',
        image: portfolio,
        tech: ['TypeScript', 'React'],
        gradient: 'from-sky-500/20 to-indigo-500/20',
        details: {
            overview:
                'A personal portfolio website built to present projects, technical skills, and development journey with a clean and responsive UI.',
            highlights: [
                'Showcased projects, skills, and GitHub activities',
                'Focused on clean UI and responsive layout',
                'Implemented smooth user interactions and animations'
            ],
            duration: 'Ongoing',
            timeline: 'Personal project',
            role: 'Frontend Developer',
            links: {
                live: '#',
                github: 'https://github.com/bybumravy/Portfolio'
            }
        }
    },

    {
        title: 'Gesture and Mobile Controlled IoT Car',
        category: 'IoT Project',
        desc: 'An IoT-based smart car controlled using hand gestures and a mobile phone.',
        image: iotCarImg,
        video: iotHand,
        tech: ['Arduino', 'ESP32', 'MPU6050', 'Bluetooth', 'Mobile App'],
        gradient: 'from-emerald-500/20 to-cyan-500/20',
        details: {
            overview:
                'An IoT-based smart car system that allows users to control movement using hand gestures and a smartphone application.',
            highlights: [
                'Hand gesture control using MPU6050 sensor',
                'Mobile phone control via Bluetooth/WiFi',
                'Real-time response and smooth motion control',
                'IoT integration for smart vehicle operation'
            ],
            duration: '3 months',
            timeline: 'University Project',
            role: 'IoT Developer',
            links: {
                live: '#',
                github: 'https://github.com/yourusername/iot-gesture-car'
            }
        }
    }

]
