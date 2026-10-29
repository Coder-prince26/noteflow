import React from 'react'

const Navbar = ({ lightMode, setLightMode }) => {
  return (
    <nav className="navbar">
      
      <div className="logo">
        <span className="logo-icon">✦</span>
        <span>
          Note<span>Flow</span>
        </span>
      </div>

      <div className="nav-right">

        <button
          className="theme-btn"
          onClick={() => setLightMode(!lightMode)}
        >
          {lightMode ? "☾" : "☼"}
        </button>

        <div className="profile">
          <div className="profile-avatar">P</div>
          <span>Prince</span>
        </div>

      </div>

    </nav>
  )
}

export default Navbar