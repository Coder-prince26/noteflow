import React from 'react'

const NoteForm = ({
  title,
  setTitle,
  detail,
  setDetail,
  SubmitHandler
}) => {
  return (
    <section className="create-section">

      <div className="section-heading">
        <div>
          <p className="section-label">CREATE</p>
          <h2>Create a new note</h2>
        </div>

        <span className="section-number">01</span>
      </div>

      <form className="note-form" onSubmit={SubmitHandler}>

        <div className="input-group">
          <label>Title</label>

          <input
            type="text"
            placeholder="Give your note a title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Note</label>

          <textarea
            placeholder="Start writing your thoughts..."
            rows="5"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          ></textarea>
        </div>

        <div className="form-bottom">

          <span className="hint">
            ✦ Your thoughts, beautifully organized.
          </span>

          <button type="submit" className="add-btn">
            <span>+</span>
            Add Note
          </button>

        </div>

      </form>

    </section>
  )
}

export default NoteForm