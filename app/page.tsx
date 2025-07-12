import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <FeaturedProducts />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}