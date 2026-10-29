import React from 'react'

const EditNoteModal = ({
  title,
  setTitle,
  detail,
  setDetail,
  SubmitHandler,
  closeModal
}) => {
  return (
    <div className="edit-modal-overlay">
      
      <div className="edit-modal">

        <div className="edit-modal-header">
          <div>
            <span className="section-label">EDIT NOTE</span>
            <h2>Edit your note</h2>
          </div>

          <button
            className="edit-close-btn"
            onClick={closeModal}
          >
            ✕
          </button>
        </div>

        <form onSubmit={SubmitHandler}>

          <div className="input-group">
            <label>Title</label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter note title..."
            />
          </div>

          <div className="input-group">
            <label>Note</label>

            <textarea
              rows="7"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              placeholder="Write your note..."
            />
          </div>

          <div className="edit-modal-actions">

            <button
              type="button"
              className="edit-cancel-btn"
              onClick={closeModal}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="add-btn"
            >
              Update Note
            </button>

          </div>

        </form>

      </div>

    </div>
  )
}

export default EditNoteModal