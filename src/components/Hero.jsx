import { useState, useEffect } from 'react'

const Hero = () => {
  const [eventDetails, setEventDetails] = useState({
    date: 'December 15, 2025',
    time: '6:00 PM - 11:00 PM',
    venue: 'Grand Ballroom'
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch event details from backend
    const fetchEventDetails = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
        const response = await fetch(`${apiUrl}/api/event-details`)
        if (response.ok) {
          const data = await response.json()
          if (data.success && data.data) {
            setEventDetails({
              date: data.data.date,
              time: data.data.time,
              venue: data.data.venue
            })
          }
        }
      } catch (error) {
        console.error('Error fetching event details:', error)
        // Keep default values if fetch fails
      } finally {
        setLoading(false)
      }
    }

    fetchEventDetails()
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 20%, #bbf7d0 40%, #86efac 60%, #4ade80 100%)'}}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{opacity: 0.5}}>
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-blob" style={{backgroundColor: '#86efac'}}></div>
          <div className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" style={{backgroundColor: '#34d399'}}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" style={{backgroundColor: '#10b981'}}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full shadow-lg mb-8" style={{background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', border: '2px solid #22c55e'}}>
            <span className="w-2 h-2 rounded-full mr-2 animate-pulse" style={{backgroundColor: '#22c55e'}}></span>
            <span className="text-sm font-semibold" style={{color: '#166534'}}>Annual Get Together 2025</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span style={{background: 'linear-gradient(135deg, #22c55e, #10b981, #059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
              Eventazia
            </span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8" style={{color: '#065f46', textShadow: '2px 2px 4px rgba(255,255,255,0.8)'}}>
            Celebrate. Connect. Create Memories.
          </h2>

          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-semibold" style={{color: '#047857'}}>
            Join us for an unforgettable evening of entertainment, networking, and celebration. 
            Be part of something extraordinary!
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform" style={{background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', border: '3px solid #22c55e'}}>
              <svg className="w-8 h-8 mx-auto mb-2" style={{color: '#16a34a'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm font-medium" style={{color: '#047857'}}>Date</p>
              <p className="text-lg font-bold" style={{color: '#064e3b'}}>
                {loading ? '...' : eventDetails.date}
              </p>
            </div>

            <div className="rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform" style={{background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', border: '3px solid #22c55e'}}>
              <svg className="w-8 h-8 mx-auto mb-2" style={{color: '#16a34a'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm font-medium" style={{color: '#047857'}}>Time</p>
              <p className="text-lg font-bold" style={{color: '#064e3b'}}>
                {loading ? '...' : eventDetails.time}
              </p>
            </div>

            <div className="rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform" style={{background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', border: '3px solid #22c55e'}}>
              <svg className="w-8 h-8 mx-auto mb-2" style={{color: '#16a34a'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm font-medium" style={{color: '#047857'}}>Venue</p>
              <p className="text-lg font-bold" style={{color: '#064e3b'}}>
                {loading ? '...' : eventDetails.venue}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('tickets')}
              className="px-8 py-4 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
              style={{background: 'linear-gradient(135deg, #16a34a, #059669)', color: '#fff'}}
            >
              Book Your Ticket Now
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
              style={{background: '#fff', color: '#065f46', border: '3px solid #16a34a'}}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </section>
  )
}

export default Hero
