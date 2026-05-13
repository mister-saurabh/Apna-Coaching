import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import CoursesSection from '../components/CoursesSection'
import AboutSection from '../components/AboutSection'
import FounderSection from '../components/FounderSection'
import AchieversSection from '../components/AchieversSection'
import ActivitiesGallery from '../components/ActivitiesGallery'
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
      <FounderSection />
      <AchieversSection />
      <ActivitiesGallery />
      <AdmissionBanner />
      <ContactSection />
      <Footer />
    </main>
  )
}
