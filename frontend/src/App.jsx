import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import Opportunities from './pages/Opportunities'
import OpportunityDetail from './pages/OpportunityDetail'
import Mentoring from './pages/Mentoring'
import MentoringApply from './pages/MentoringApply'
import DocumentCoach from './pages/DocumentCoach'
import Calendar from './pages/Calendar'

export default function App(){
  return (
    <div className="app-root">
      <header className="site-header">
        <div className="nav-inner">
          <Link to="/" className="logo-btn">로고</Link>
          <nav className="main-nav">
            <Link to="/opportunities">기회탐색</Link>
            <a>멘토링</a>
            <a>문서코치</a>
            <a>캘린더</a>
            <a className="login">로그인</a>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/opportunities" element={<Opportunities/>} />
          <Route path="/opportunities/:id" element={<OpportunityDetail/>} />
          <Route path="/mentoring" element={<Mentoring/>} />
          <Route path="/mentoring/apply" element={<MentoringApply/>} />
          <Route path="/document-coach" element={<DocumentCoach/>} />
          <Route path="/calendar" element={<Calendar/>} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
