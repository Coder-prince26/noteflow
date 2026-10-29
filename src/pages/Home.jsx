import React from 'react'

import Hero from '../components/Hero'
import Stats from '../components/Stats'
import NoteForm from '../components/NoteForm'
import NotesHeader from '../components/NotesHeader'
import NoteCard from '../components/NoteCard'
import EditNoteModal from '../components/EditNoteModal'

const Home = ({
  notes,
  recentNotes,
  filteredNotes,

  title,
  setTitle,

  detail,
  setDetail,

  editIndex,

  search,
  setSearch,

  filter,
  setFilter,

  SubmitHandler,
  TogglePin,
  EditNode,
  DeleteNode,
  formatDate,

  showEditModal,
  UpdateNote,
  closeEditModal
}) => {

  return (
    <>

      {/* Hero */}
      <Hero />


      {/* Stats */}
      <Stats
        notes={notes}
        recentNotes={recentNotes}
      />


      {/* Create Note */}
      <NoteForm
        title={title}
        setTitle={setTitle}
        detail={detail}
        setDetail={setDetail}
        editIndex={editIndex}
        SubmitHandler={SubmitHandler}
      />


      {/* Notes */}
      <section className="notes-section">

        <NotesHeader
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />


        {/* Notes Grid */}
        <div className="notes-grid">

          {notes.length === 0 ? (

            <div className="empty-state">
              <div className="empty-icon">📝</div>

              <h3>No notes yet</h3>

              <p>
                Create your first note and start organizing your thoughts.
              </p>
            </div>

          ) : filteredNotes.length === 0 ? (

            <div className="empty-state">
              <div className="empty-icon">🔍</div>

              <h3>No notes found</h3>

              <p>
                Try a different search or filter.
              </p>
            </div>

          ) : (

            filteredNotes.map(({ elem, originalIndex }) => (

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


      {/* Edit Modal */}
      {showEditModal && (

        <EditNoteModal
          title={title}
          setTitle={setTitle}
          detail={detail}
          setDetail={setDetail}
          SubmitHandler={UpdateNote}
          closeModal={closeEditModal}
        />

      )}

    </>
  )
}

export default Home