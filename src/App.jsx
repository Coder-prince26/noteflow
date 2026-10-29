
import { useState , useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer' 

import Home from './pages/Home'
import Notes from './pages/Notes'


import './App.css'


const App = () => {


  const [title, setTitle] = useState("")
  const [detail, setDetail] = useState("")
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState("")
  const [editIndex, setEditIndex] = useState(null)
  const [filter, setFilter] = useState("all")
  const [showEditModal, setShowEditModal] = useState(false)
  const [lightMode, setLightMode] = useState(() => {
  const savedTheme = localStorage.getItem("theme")
  return savedTheme === "light"
})
  useEffect(() => {
  localStorage.setItem("theme", lightMode ? "light" : "dark")
}, [lightMode])



  const isFirstRender = useRef(true)

 const SubmitHandler = (e) => {
  e.preventDefault()

  if (title.trim() === "" || detail.trim() === "") {
    alert("Please enter title and note")
    return
  }

  const copyNotes = [...notes]

  copyNotes.push({
    title: title,
    detail: detail,
    pinned: false,
    createdAt: new Date()
  })

  setNotes(copyNotes)

  setTitle("")
  setDetail("")
}

const UpdateNote = (e) => {
  e.preventDefault()

  if (title.trim() === "" || detail.trim() === "") {
    alert("Please enter title and note")
    return
  }

  const copyNotes = [...notes]

  copyNotes[editIndex] = {
    ...copyNotes[editIndex],
    title: title,
    detail: detail
  }

  setNotes(copyNotes)

  closeEditModal()
}
  


useEffect(() => {
  const savedNotes = localStorage.getItem("notes")

  if (savedNotes) {
    setNotes(JSON.parse(savedNotes))
  }
}, [])
useEffect(() => {
  if (isFirstRender.current) {
    isFirstRender.current = false
    return
  }
  localStorage.setItem("notes", JSON.stringify(notes))
}, [notes])

const EditNode = (idx) => {
  setTitle(notes[idx].title)
  setDetail(notes[idx].detail)
  setEditIndex(idx)
  setShowEditModal(true)
}
const closeEditModal = () => {
  setShowEditModal(false)
  setEditIndex(null)
  setTitle("")
  setDetail("")
}
const DeleteNode = (idx) => {
  const copyNotes = [...notes]

  copyNotes.splice(idx, 1)

  setNotes(copyNotes)
}
const TogglePin = (idx) => {
  const copyNotes = [...notes]

  copyNotes[idx].pinned = !copyNotes[idx].pinned
  
  setNotes(copyNotes)
}

const recentNotes = notes
  .map((elem, index) => ({
    elem,
    originalIndex: index
  }))
  .sort((a, b) => {
    if (a.elem.pinned !== b.elem.pinned) {
      return b.elem.pinned - a.elem.pinned
    }

    return (
      new Date(b.elem.createdAt) -
      new Date(a.elem.createdAt)
    )
  })

  const filteredNotes = recentNotes.filter(({ elem }) => {

  const matchesSearch =
    elem.title.toLowerCase().includes(search.toLowerCase()) ||
    elem.detail.toLowerCase().includes(search.toLowerCase())

  const matchesFilter =
    filter === "all" ||
    (filter === "pinned" && elem.pinned) ||
    (filter === "unpinned" && !elem.pinned)

  return matchesSearch && matchesFilter
})

const formatDate = (date) => {
  return new Date(date).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  })
}
  return (
    
  <div className={`app ${lightMode ? "light-mode" : ""}`}>

    {/* Navbar */}
    <Navbar
      lightMode={lightMode}
      setLightMode={setLightMode}
    />

    {/* Main */}
    <main className="main-container">

      <Routes>

  {/* Home */}
  <Route
    path="/"
    element={
      <Home
        notes={notes}
        recentNotes={recentNotes}
        filteredNotes={filteredNotes}

        title={title}
        setTitle={setTitle}

        detail={detail}
        setDetail={setDetail}

        editIndex={editIndex}

        search={search}
        setSearch={setSearch}

        filter={filter}
        setFilter={setFilter}

        SubmitHandler={SubmitHandler}
        TogglePin={TogglePin}
        EditNode={EditNode}
        DeleteNode={DeleteNode}
        formatDate={formatDate}

        showEditModal={showEditModal}
        UpdateNote={UpdateNote}
        closeEditModal={closeEditModal}
      />
    }
  />

  {/* All Notes */}
  <Route
    path="/notes"
    element={
      <Notes
        notes={notes}
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        TogglePin={TogglePin}
        EditNode={EditNode}
        DeleteNode={DeleteNode}
        formatDate={formatDate}
        pageType="all"
      />
    }
  />

  {/* Pinned Notes */}
  <Route
    path="/notes/pinned"
    element={
      <Notes
        notes={notes}
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        TogglePin={TogglePin}
        EditNode={EditNode}
        DeleteNode={DeleteNode}
        formatDate={formatDate}
        pageType="pinned"
      />
    }
  />

  {/* Recent Notes */}
  <Route
    path="/notes/recent"
    element={
      <Notes
        notes={notes}
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        TogglePin={TogglePin}
        EditNode={EditNode}
        DeleteNode={DeleteNode}
        formatDate={formatDate}
        pageType="recent"
      />
    }
  />

</Routes>

    </main>

    {/* Footer */}
    <Footer />

  </div>
)
  
}

export default App




