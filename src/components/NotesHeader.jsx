import React from 'react'

const NotesHeader = ({
  search,
  setSearch,
  filter,
  setFilter
}) => {
  return (
    <div className="notes-header">

      <div>
        <p className="section-label">COLLECTION</p>
        <h2>Your Notes</h2>
      </div>

      <div className="notes-actions">

        <div className="search-box">
          <span>⌕</span>

          <input
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
              ✕
            </button>
          )}
        </div>

        <select
          className="filter-btn"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pinned">Pinned</option>
          <option value="unpinned">Unpinned</option>
        </select>

      </div>

    </div>
  )
}

export default NotesHeader