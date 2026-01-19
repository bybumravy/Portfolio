import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import { SocialLinks } from '@/components/common/SocialLinks'
import { SOCIAL_LINKS } from '@/data/constants'

export function ContactSection() {
    return (
        <section id="contact" className="relative py-24 px-4 border-t border-border/30 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                    Let&apos;s Create
                    <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Something Amazing</span>
                </h2>

                <p className="text-lg text-foreground/60 mb-12 leading-relaxed">
                    I'm always interested in hearing about new projects and collaborating with creative minds. Feel free to reach out if you have any opportunities or just want to chat about web development.
                </p>

                <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 group text-base mb-12"
                    asChild
                >
                    <a href="mailto:you@email.com">
                        <Mail className="h-5 w-5 mr-2" />
                        Send Me an Email
                    </a>
                </Button>

                <div className="pt-8 border-t border-border/30">
                    <SocialLinks links={SOCIAL_LINKS} align="center" />
                </div>
            </div>
        </section>
    )
}
