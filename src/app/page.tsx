import dynamic from 'next/dynamic'
import { Hero } from "@/components/hero"
import { LogoCloud } from "@/components/logo-cloud"
import { AboutAuctions } from "@/components/about-auctions"

// Lazy load components below the fold for better mobile performance
const FeaturesSection = dynamic(() => import('@/components/features-section').then(mod => ({ default: mod.FeaturesSection })), {
  loading: () => <div className="min-h-[400px] bg-background animate-pulse" />
})

const ProcessSection = dynamic(() => import('@/components/process-section').then(mod => ({ default: mod.ProcessSection })), {
  loading: () => <div className="min-h-[400px] bg-background animate-pulse" />
})

const TestimonialsSection = dynamic(() => import('@/components/testimonials-section').then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="min-h-[400px] bg-background animate-pulse" />
})

const RequestSection = dynamic(() => import('@/components/request-section').then(mod => ({ default: mod.RequestSection })), {
  loading: () => <div className="min-h-[400px] bg-background animate-pulse" />
})

const FaqSection = dynamic(() => import('@/components/faq-section').then(mod => ({ default: mod.FaqSection })), {
  loading: () => <div className="min-h-[400px] bg-background animate-pulse" />
})

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <LogoCloud />
      <AboutAuctions />
      <FeaturesSection />
      <ProcessSection />
      <TestimonialsSection />
      <RequestSection />
      <FaqSection />
    </div>
  )
}
