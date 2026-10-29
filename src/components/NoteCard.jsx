import React from 'react'

const NoteCard = ({
  elem,
  originalIndex,
  TogglePin,
  EditNode,
  DeleteNode,
  formatDate
}) => {
  return (
    <article
      className={`note-card ${elem.pinned ? "pinned-note" : ""}`}
      
    >

      <div className="note-top">

        <span className="note-tag">
          Note
        </span>

        <button
          className="pin-btn"
          onClick={() => TogglePin(originalIndex)}
        >
          📌{elem.pinned ? "Pinned" : "Pin"}
        </button>

      </div>

      <h3>{elem.title}</h3>

      <p>{elem.detail}</p>

      <div className="note-footer">

        <span>
          {formatDate(elem.createdAt)}
        </span>

        <div className="note-buttons">

          <button
            onClick={() => EditNode(originalIndex)}
          >
            ✎
          </button>

          <button
            onClick={() => DeleteNode(originalIndex)}
          >
            🗑
          </button>

        </div>

      </div>

    </article>
  )
}

export default NoteCard