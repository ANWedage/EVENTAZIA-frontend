import { useState } from 'react'

// Custom Modal Dialog Component
const CustomModal = ({ type, title, message, onConfirm, onClose }) => {
  const modalIcons = {
    success: { emoji: '✅', bg: '#dcfce7', color: '#16a34a' },
    error: { emoji: '❌', bg: '#fee2e2', color: '#dc2626' },
    warning: { emoji: '⚠️', bg: '#fef3c7', color: '#f59e0b' },
    info: { emoji: 'ℹ️', bg: '#dbeafe', color: '#2563eb' }
  }

  const iconData = modalIcons[type] || modalIcons.info

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(4px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'fadeIn 0.2s'
      }}
      onClick={onConfirm}
    >
      <div 
        style={{
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          minWidth: '400px',
          maxWidth: '500px',
          animation: 'slideIn 0.3s'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{
          padding: '24px 24px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          borderBottom: '2px solid #f0f0f0'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            background: iconData.bg,
            color: iconData.color
          }}>
            {iconData.emoji}
          </div>
          <h3 style={{
            flex: 1,
            fontSize: '20px',
            fontWeight: '700',
            color: '#065f46',
            margin: 0
          }}>
            {title}
          </h3>
        </div>
        
        <div style={{ padding: '24px' }}>
          <p style={{
            fontSize: '15px',
            color: '#374151',
            lineHeight: '1.6',
            marginBottom: '20px',
            whiteSpace: 'pre-line'
          }}>
            {message}
          </p>
        </div>
        
        <div style={{
          padding: '16px 24px 24px',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <button
            onClick={onConfirm}
            style={{
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #16a34a, #059669)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '15px',
              boxShadow: '0 4px 12px rgba(22, 163, 74, 0.3)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 6px 16px rgba(22, 163, 74, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 4px 12px rgba(22, 163, 74, 0.3)'
            }}
          >
            OK
          </button>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: translateY(-20px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

const OTPVerification = ({ onVerified, onClose }) => {
  const [step, setStep] = useState(1) // 1: email input, 2: OTP input
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [generatedOTP, setGeneratedOTP] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(null)

  const validateEmail = (email) => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const generateOTP = () => {
    // Generate random 4-digit OTP
    return Math.floor(1000 + Math.random() * 9000).toString()
  }

  const handleSendOTP = async () => {
    setError('')
    setLoading(true)
    
    if (!email.trim()) {
      setError('Email address is required')
      setLoading(false)
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      setLoading(false)
      return
    }

    try {
      // Call backend API to send OTP via email
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/send-email-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send OTP')
      }

      setGeneratedOTP('sent')
      setModal({
        type: 'success',
        title: 'OTP Sent Successfully',
        message: '✉️ OTP has been sent to your email address.Please check your inbox and enter the 4-digit code.⚠️ Note: Check your spam/junk folder if you don\'t see the email.',
        onConfirm: () => {
          setModal(null)
          setStep(2)
        }
      })
    } catch (err) {
      console.error('Error sending OTP:', err)
      setError(err.message || 'Failed to send OTP. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOTP = async () => {
    setError('')
    setLoading(true)

    if (!otp.trim()) {
      setError('Please enter the OTP')
      setLoading(false)
      return
    }

    try {
      // Call backend API to verify OTP
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/verify-email-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: email,
          otp: otp 
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Invalid OTP')
      }

      // OTP verified successfully - pass email to parent
      onVerified(email)
    } catch (err) {
      console.error('Error verifying OTP:', err)
      setError(err.message || 'Invalid OTP. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleResendOTP = async () => {
    setOtp('')
    setError('')
    setLoading(true)
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/send-email-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to resend OTP')
      }

      setModal({
        type: 'success',
        title: 'OTP Resent',
        message: '✉️ A new OTP has been sent to your email address.\n\nPlease check your inbox.\n\n⚠️ Note: Check your spam/junk folder if you don\'t see the email.',
        onConfirm: () => setModal(null)
      })
    } catch (err) {
      console.error('Error resending OTP:', err)
      setError(err.message || 'Failed to resend OTP. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" style={{backdropFilter: 'blur(5px)'}}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{background: 'linear-gradient(135deg, #16a34a, #059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
            {step === 1 ? 'Verify Email Address' : 'Enter OTP'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {step === 1 ? (
          <div>
            <p className="text-gray-600 mb-6">
              Please enter your email address to receive an OTP for verification.
            </p>
            
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" style={{color: '#065f46'}}>
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('')
                }}
                className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
                  error ? 'border-red-500' : 'border-gray-300 focus:border-green-500'
                }`}
                placeholder="your.email@example.com"
                disabled={loading}
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            <button
              onClick={handleSendOTP}
              disabled={loading}
              className="w-full px-6 py-3 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              style={{background: 'linear-gradient(135deg, #16a34a, #059669)', color: '#fff', cursor: 'pointer'}}
            >
              {loading ? 'Sending...' : 'Send OTP'}
            </button>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 mb-2">
              Enter the 4-digit OTP sent to
            </p>
            <p className="font-semibold mb-2" style={{color: '#16a34a'}}>
              {email}
            </p>
            <p className="text-xs text-gray-500 mb-4" style={{fontStyle: 'italic'}}>
              💡 Tip: Check your spam folder if you don't see the email
            </p>
            
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" style={{color: '#065f46'}}>
                OTP <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '').slice(0, 4)
                  setOtp(value)
                  setError('')
                }}
                className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors text-center text-2xl font-bold tracking-widest ${
                  error ? 'border-red-500' : 'border-gray-300 focus:border-green-500'
                }`}
                placeholder="0000"
                maxLength="4"
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            <button
              onClick={handleVerifyOTP}
              disabled={loading}
              className="w-full px-6 py-3 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all mb-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              style={{background: 'linear-gradient(135deg, #16a34a, #059669)', color: '#fff', cursor: 'pointer'}}
            >
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>

            <div className="text-center">
              <button
                onClick={handleResendOTP}
                disabled={loading}
                className="text-sm font-semibold transition-colors disabled:opacity-50"
                style={{color: '#16a34a', cursor: 'pointer'}}
              >
                Resend OTP
              </button>
              <span className="text-gray-500 mx-2">|</span>
              <button
                onClick={() => {
                  setStep(1)
                  setOtp('')
                  setError('')
                }}
                disabled={loading}
                className="text-sm font-semibold transition-colors disabled:opacity-50"
                style={{color: '#16a34a', cursor: 'pointer'}}
              >
                Change Email
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Custom Modal */}
      {modal && (
        <CustomModal
          type={modal.type}
          title={modal.title}
          message={modal.message}
          onConfirm={modal.onConfirm}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  )
}

export default OTPVerification
