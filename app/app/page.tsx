import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ServicesSection from '@/components/services-section'
import LeadMagnet from '@/components/lead-magnet'
import TestimonialsSection from '@/components/testimonials-section'
import BlogPreview from '@/components/blog-preview'
import ContactSection from '@/components/contact-section'

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LeadMagnet />
      <TestimonialsSection />
      <BlogPreview />
      <ContactSection />
    </div>
  )
}