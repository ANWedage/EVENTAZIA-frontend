import { useState } from 'react'

const TicketForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    email: '',
    bankSlip: null
  })
  const [fileName, setFileName] = useState('')
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    // Contact number validation
    if (!formData.contactNo.trim()) {
      newErrors.contactNo = 'Contact number is required'
    } else if (!/^\+?[\d\s\-()]+$/.test(formData.contactNo)) {
      newErrors.contactNo = 'Invalid contact number format'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    // Bank slip validation
    if (!formData.bankSlip) {
      newErrors.bankSlip = 'Bank slip is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, bankSlip: 'File size must be less than 5MB' }))
        return
      }
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf']
      if (!validTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, bankSlip: 'Only JPG, PNG, or PDF files are allowed' }))
        return
      }
      setFormData(prev => ({ ...prev, bankSlip: file }))
      setFileName(file.name)
      setErrors(prev => ({ ...prev, bankSlip: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Here you would typically send the data to a backend server
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          contactNo: '',
          email: '',
          bankSlip: null
        })
        setFileName('')
        if (onClose) onClose()
      }, 3000)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" style={{backdropFilter: 'blur(5px)'}}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold" style={{background: 'linear-gradient(135deg, #16a34a, #059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
            Ticket Registration
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #16a34a, #059669)'}}>
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{color: '#16a34a'}}>
                Registration Successful!
              </h3>
              <p className="text-gray-600">
                Thank you for registering. We'll verify your payment and send confirmation to your email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{color: '#065f46'}}>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-300 focus:border-green-500'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Contact Number Field */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{color: '#065f46'}}>
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
                    errors.contactNo ? 'border-red-500' : 'border-gray-300 focus:border-green-500'
                  }`}
                  placeholder="+1 (555) 000-0000"
                />
                {errors.contactNo && <p className="text-red-500 text-sm mt-1">{errors.contactNo}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{color: '#065f46'}}>
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300 focus:border-green-500'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Bank Slip Upload */}
              <div>
                <label className="block text-sm font-semibold mb-2" style={{color: '#065f46'}}>
                  Upload Bank Slip <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                    id="bankSlip"
                  />
                  <label
                    htmlFor="bankSlip"
                    className={`flex items-center justify-center w-full px-4 py-6 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                      errors.bankSlip ? 'border-red-500 bg-red-50' : 'border-green-300 hover:border-green-500 bg-gray-50'
                    }`}
                  >
                    <div className="text-center">
                      <svg className="w-12 h-12 mx-auto mb-2" style={{color: errors.bankSlip ? '#ef4444' : '#16a34a'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      {fileName ? (
                        <p className="text-sm font-semibold" style={{color: '#16a34a'}}>{fileName}</p>
                      ) : (
                        <>
                          <p className="text-sm text-gray-600">Click to upload bank slip</p>
                          <p className="text-xs text-gray-500 mt-1">PNG, JPG or PDF (max. 5MB)</p>
                        </>
                      )}
                    </div>
                  </label>
                </div>
                {errors.bankSlip && <p className="text-red-500 text-sm mt-1">{errors.bankSlip}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                style={{background: 'linear-gradient(135deg, #16a34a, #059669)', color: '#fff', cursor: 'pointer'}}
              >
                Submit Registration
              </button>

              <p className="text-xs text-gray-500 text-center">
                All fields are required. We'll verify your payment and send confirmation within 24 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default TicketForm
