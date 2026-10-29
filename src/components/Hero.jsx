import React from 'react'

const Hero = () => {
  return (
    <section className="hero">
      
      <div className="hero-content">
        <p className="eyebrow">YOUR PERSONAL WORKSPACE</p>

        <h1>
          Capture your
          <span> thoughts.</span>
        </h1>

        <p className="hero-description">
          Organize your ideas, remember important things,
          and keep everything in one beautiful place.
        </p>
      </div>

      <div className="hero-decoration">
        <div className="glow-circle"></div>
        <div className="floating-note">✦</div>
      </div>

    </section>
  )
}

export default Hero