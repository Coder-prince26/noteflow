
import React, { useRef } from 'react'
import NoteCard from '../components/NoteCard'


const Notes = ({
  notes,
  search,
  setSearch,
  TogglePin,
  EditNode,
  DeleteNode,
  formatDate,
  pageType
}) => {
  const searchInputRef = useRef(null)
  // Search ke according notes
  const searchedNotes = notes
  .map((elem, index) => ({
    elem,
    originalIndex: index
  }))
  .filter(({ elem }) => {

  return (
    elem.title.toLowerCase().includes(search.toLowerCase()) ||
    elem.detail.toLowerCase().includes(search.toLowerCase())
  )

})


  // Route ke according notes
  let pageNotes = searchedNotes

  if (pageType === "pinned") {

     pageNotes = searchedNotes.filter(({ elem }) => elem.pinned)

  }

  if (pageType === "recent") {

    pageNotes = searchedNotes
      
      .sort((a, b) => {
        return (
          new Date(b.elem.createdAt) -
          new Date(a.elem.createdAt)
        )
      })
      .slice(0, 3)

  } 


  return (
    <section className="notes-section">

      {/* Header */}
      <div className="notes-header">

        <div>

          <p className="section-label">
            {pageType === "pinned"
              ? "PINNED"
              : pageType === "recent"
              ? "RECENT"
              : "NOTES"
            }
          </p>

          <h2>
            {pageType === "pinned"
              ? "Pinned Notes"
              : pageType === "recent"
              ? "Recent Notes"
              : "All Notes"
            }
          </h2>

        </div>

        

        {/* Search */}
        {pageType !== "recent" && (
        <div className="notes-actions">

          <div className="search-box" 
           onClick={() => searchInputRef.current.focus()}
          >
         
            <span>⌕</span>

            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search notes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                className="clear-search"
                onClick={() => setSearch("")}
              >
                ×
              </button>
            )}

          </div>

        </div>
        )}
      </div>
          

      {/* Notes Grid */}
      <div className="notes-grid">

        {notes.length === 0 ? (

          <div className="empty-state">

            <div className="empty-icon">
              📝
            </div>

            <h3>
              No notes yet
            </h3>

            <p>
              Create your first note and start organizing your thoughts.
            </p>

          </div>

        ) : pageNotes.length === 0 ? (

          <div className="empty-state">

            <div className="empty-icon">
              🔍
            </div>

            <h3>
              No notes found
            </h3>

            <p>
              Try a different search.
            </p>

          </div>

        ) : (

          pageNotes.map(({ elem, originalIndex }) => (

            <NoteCard
              key={originalIndex}
              elem={elem}
              originalIndex={originalIndex}
              TogglePin={TogglePin}
              EditNode={EditNode}
              DeleteNode={DeleteNode}
              formatDate={formatDate}
            />

          ))

        )}

      </div>

    </section>
  )
}

export default Notes