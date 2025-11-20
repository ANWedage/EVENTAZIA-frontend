const About = () => {
  return (
    <section id="about" className="py-20" style={{background: 'linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span style={{background: 'linear-gradient(135deg, #eab308, #84cc16)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
              About The Event
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-semibold" style={{color: '#4d7c0f'}}>
            A spectacular gathering that brings together our community for an evening of joy, connection, and celebration
          </p>
        </div>

        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-center p-12 rounded-2xl shadow-lg max-w-2xl" style={{background: 'linear-gradient(135deg, #ffffff 0%, #fef9c3 100%)', border: '3px solid #eab308'}}>
            <svg className="w-24 h-24 mx-auto mb-6" style={{color: '#eab308'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-3xl font-bold mb-4" style={{color: '#365314'}}>
              Coming Soon
            </h3>
            <p className="text-lg font-medium" style={{color: '#4d7c0f'}}>
              Exciting details about Eventazia 2025 are on the way. Check back soon for more information about this spectacular event!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
