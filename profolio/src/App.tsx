import { SiteLayout } from '@/components/layout/SiteLayout'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/layout/Footer'

export default function App() {
  return (
    <div className="font-sans antialiased">
      <SiteLayout>
        {(onNavigate) => (
          <>
            <HeroSection onNavigate={onNavigate} />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
            <Footer />
          </>
        )}
      </SiteLayout>
    </div>
  )
}
