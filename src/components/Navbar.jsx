import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Site Name */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="text-3xl font-extrabold" style={{background: 'linear-gradient(135deg, #16a34a, #059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
              Eventazia
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="font-medium transition-colors" style={{color: isScrolled ? '#374151' : '#065f46', cursor: 'pointer'}} onMouseEnter={(e) => e.currentTarget.style.color = '#16a34a'} onMouseLeave={(e) => e.currentTarget.style.color = isScrolled ? '#374151' : '#065f46'}>
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="font-medium transition-colors" style={{color: isScrolled ? '#374151' : '#065f46', cursor: 'pointer'}} onMouseEnter={(e) => e.currentTarget.style.color = '#16a34a'} onMouseLeave={(e) => e.currentTarget.style.color = isScrolled ? '#374151' : '#065f46'}>
              About
            </button>
            <button onClick={() => scrollToSection('features')} className="font-medium transition-colors" style={{color: isScrolled ? '#374151' : '#065f46', cursor: 'pointer'}} onMouseEnter={(e) => e.currentTarget.style.color = '#16a34a'} onMouseLeave={(e) => e.currentTarget.style.color = isScrolled ? '#374151' : '#065f46'}>
              Highlights
            </button>
            <button
              onClick={() => scrollToSection('tickets')}
              className="px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              style={{background: 'linear-gradient(135deg, #16a34a, #059669)', color: '#fff', cursor: 'pointer'}}
            >
              Get Tickets
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-4 py-2 rounded-lg" style={{ color: '#065f46', cursor: 'pointer' }}>
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 rounded-lg" style={{ color: '#065f46', cursor: 'pointer' }}>
              About
            </button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left px-4 py-2 rounded-lg" style={{ color: '#065f46', cursor: 'pointer' }}>
              Highlights
            </button>
            <button
              onClick={() => scrollToSection('tickets')}
              className="w-full px-6 py-2.5 text-white rounded-full font-semibold"
              style={{
                background: 'linear-gradient(to right, #16a34a, #059669)',
                cursor: 'pointer'
              }}
            >
              Get Tickets
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
