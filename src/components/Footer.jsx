const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{background: 'linear-gradient(135deg, #1f2937, #111827)'}} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl font-bold">Eventazia</span>
            </div>
            <p className="mb-4 max-w-md" style={{color: '#d1d5db'}}>
              Creating unforgettable memories through exceptional events. Join us for our annual get-together and experience something extraordinary.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{background: 'rgba(255,255,255,0.1)'}} onMouseEnter={(e) => e.currentTarget.style.background = '#16a34a'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>  
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-primary-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors">About Event</a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-primary-400 transition-colors">Highlights</a>
              </li>
              <li>
                <a href="#tickets" className="text-gray-300 hover:text-primary-400 transition-colors">Get Tickets</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>adeepanethwedage10171@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0768833626</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Ratnapura</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Eventazia. All rights reserved.<br/>Developer: Adeepa Neth Wedage
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Cookie Policy</a>
              <button 
                onClick={() => window.open('/admin-login.html', '_blank')}
                className="px-3 py-1.5 rounded text-xs font-medium transition-all"
                style={{
                  background: 'linear-gradient(135deg, #16a34a, #059669)',
                  color: '#fff',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Admin Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
