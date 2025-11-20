import { useState } from 'react'
import OTPVerification from './OTPVerification'

const TicketPurchase = () => {
  const [showOTPModal, setShowOTPModal] = useState(false)

  const handleGrabTicket = () => {
    setShowOTPModal(true)
  }

  const handleOTPVerified = (verifiedEmail) => {
    console.log('Email verified:', verifiedEmail)
    setShowOTPModal(false)
    // Open form in new tab with verified email as parameter
    window.open(`/ticket-form.html?email=${encodeURIComponent(verifiedEmail)}`, '_blank')
  }

  return (
    <>
      <section id="tickets" className="py-12" style={{background: '#ffffff'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span style={{background: 'linear-gradient(135deg, #16a34a, #059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                Get Your Tickets
              </span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto font-semibold" style={{color: '#065f46'}}>
              Secure your spot at Eventazia 2025
            </p>
          </div>

          <div className="flex justify-center items-center min-h-[200px]">
            <div className="text-center">
              <button
                onClick={handleGrabTicket}
                className="px-12 py-6 text-2xl font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all"
                style={{background: 'linear-gradient(135deg, #16a34a, #059669)', color: '#fff', cursor: 'pointer'}}
              >
                Grab Your Ticket Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {showOTPModal && (
        <OTPVerification
          onVerified={handleOTPVerified}
          onClose={() => setShowOTPModal(false)}
        />
      )}
    </>
  )
}

export default TicketPurchase
