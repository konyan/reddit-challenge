import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ThreadPage from './pages/Thread'
import SubRedditPage from './pages/SubReddit/SubReddit'
import Navbar from './components/Navbar/Navbar'
import SideMenu from './components/SideMenu/SideMenu'

const App = () => {
  return (
    <div className="px-4">
      <Navbar />
      <div className="mx-auto mt-8 w-full flex gap-4">
        <section className="left-menu">
          <SideMenu />
        </section>
        <section
          className="overflow-scroll pb-8 right-menu"
          style={{
            height: 'calc(100vh - 80px)',
          }}
        >
          <Routes>
            <Route path="/" element={<SubRedditPage />} />
            <Route path="/thread/:commentId/:threadName" element={<ThreadPage />} />
          </Routes>
        </section>
      </div>

    </div>
  )
}

export default App
