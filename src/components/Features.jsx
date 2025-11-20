const Features = () => {
  return (
    <section id="features" className="py-20" style={{background: 'linear-gradient(135deg, #f9fafb 0%, #f0fdf4 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span style={{background: 'linear-gradient(135deg, #eab308, #84cc16)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
              Event Highlights
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto font-semibold" style={{color: '#4d7c0f'}}>
            Discover what makes Eventazia 2025 a must-attend celebration
          </p>
        </div>

        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-center p-12 rounded-2xl shadow-lg" style={{background: 'linear-gradient(135deg, #ffffff 0%, #fef9c3 100%)', border: '3px solid #eab308'}}>
            <svg className="w-24 h-24 mx-auto mb-6" style={{color: '#eab308'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="text-3xl font-bold mb-4" style={{color: '#365314'}}>
              Under Development
            </h3>
            <p className="text-lg font-medium max-w-md" style={{color: '#4d7c0f'}}>
              We're working hard to bring you exciting event highlights. Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
