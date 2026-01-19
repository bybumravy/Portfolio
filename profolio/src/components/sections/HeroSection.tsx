import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SocialLinks } from '@/components/common/SocialLinks'
import { SOCIAL_LINKS } from '@/data/constants'
import profileImage from '@/assets/picture.jpg'

export function HeroSection({ onNavigate }: { onNavigate: (id: string) => void }) {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
        >
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
            </div>

            <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Text */}
                <div className="order-2 md:order-1 text-center md:text-left">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
                        Hello, I&apos;m{' '}
                        <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                            Hà Vy
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-foreground/60 mb-10 leading-relaxed max-w-2xl md:max-w-none mx-auto md:mx-0">
                        I am Software Engineering
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
                        <Button
                            size="lg"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 group text-base"
                            onClick={() => onNavigate('work')}
                        >
                            View My Projects
                            <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary/30 text-primary hover:bg-primary/5 transition-all duration-300 text-base bg-transparent"
                            onClick={() => onNavigate('contact')}
                        >
                            Get in Touch
                        </Button>
                    </div>

                    <SocialLinks
                        links={SOCIAL_LINKS}
                        className="justify-center md:justify-start"
                    />
                </div>

                {/* Image */}
                <div className="order-1 md:order-2">
                    <div className="relative mx-auto w-64 sm:w-72 md:w-80 lg:w-96">
                        <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-primary/25 via-primary/10 to-accent/15 blur-2xl" />

                        <div className="relative aspect-square rounded-3xl border border-border/50 bg-card/50 p-3 shadow-xl">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                            <img
                                src={profileImage}
                                alt="Hà Vy portrait"
                                className="relative h-full w-full rounded-2xl object-cover"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
