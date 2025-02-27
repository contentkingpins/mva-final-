import ClaimForm from '@/components/claim-form/ClaimForm'
import Footer from '@/components/layout/Footer'

export default function ClaimPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Start Your Rideshare Injury Claim
        </h1>
        <div className="max-w-3xl mx-auto">
          <ClaimForm />
        </div>
      </div>
      <Footer />
    </main>
  )
} 