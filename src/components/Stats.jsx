import React from 'react'
import { Link } from 'react-router-dom'

const Stats = ({ notes, recentNotes }) => {
  return (
    <section className="stats">

      {/* Total Notes */}
      <Link to="/notes" className="stat-card stat-link">
        <div className="stat-icon">📝</div>

        <div>
          <p>Total Notes</p>
          <h3>{notes.length}</h3>
        </div>
      </Link>


      {/* Pinned */}
      <Link to="/notes/pinned" className="stat-card stat-link">
        <div className="stat-icon">📌</div>

        <div>
          <p>Pinned</p>
          <h3>
            {notes.filter((elem) => elem.pinned).length}
          </h3>
        </div>
      </Link>


      {/* Recent */}
      <Link to="/notes/recent" className="stat-card stat-link">
        <div className="stat-icon">⚡</div>

        <div>
          <p>Recent</p>
          <h3>{recentNotes.slice(0, 3).length}</h3>
        </div>
      </Link>

    </section>
  )
}

export default Stats