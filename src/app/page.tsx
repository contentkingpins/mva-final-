import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import ClaimForm from '@/components/claim-form/ClaimForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <HeroSection />
      
      <HowItWorksSection />
      
      <section id="claim-form" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-12">Start Your Claim Now</h2>
            <ClaimForm />
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      
      <FAQSection />
      
      <CTASection />
      
      <Footer />
    </main>
  );
} 