import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CommentPage from './pages/Thread'
import SubReddit from './pages/SubReddit'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SubReddit />} />
        <Route path="/comment" element={<CommentPage />} />
      </Routes>
    </>
  )
}

export default App