import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ThreadPage from './pages/Thread'
import SubRedditPage from './pages/SubReddit'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SubRedditPage />} />
        <Route path="/comment" element={<ThreadPage />} />
      </Routes>
    </>
  )
}

export default App
