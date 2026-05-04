import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import CoursesSection from '../components/CoursesSection'
import AboutSection from '../components/AboutSection'
import AdmissionBanner from '../components/AdmissionBanner'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <AboutSection />
      <AdmissionBanner />
      <ContactSection />
      <Footer />
    </main>
  )
}
