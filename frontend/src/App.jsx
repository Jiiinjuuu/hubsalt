import React, { useEffect, useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import Opportunities from './pages/Opportunities'
import OpportunityDetail from './pages/OpportunityDetail'
import Mentoring from './pages/Mentoring'
import MentoringApply from './pages/MentoringApply'
import DocumentCoach from './pages/DocumentCoach'
import Calendar from './pages/Calendar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { getCurrentUser, logout as authLogout } from './lib/auth'
// Use URL import to avoid issues with special characters in filenames
const logoPng = new URL('./resource/image2/로고/윗파랑로고@200x.png', import.meta.url).href

export default function App(){
  const [user, setUser] = useState(getCurrentUser())
  const navigate = useNavigate()

  useEffect(() => {
    function onAuth(){
      setUser(getCurrentUser())
    }
    window.addEventListener('authChanged', onAuth)
    return () => window.removeEventListener('authChanged', onAuth)
  }, [])

  function handleLogout(){
    authLogout()
    setUser(null)
    navigate('/')
  }

  return (
    <div className="app-root">
          <header className="site-header">
        <div className="nav-inner">
          <Link to="/" className="logo-btn">
            {/* using logo stored inside src so Vite will bundle it */}
            <img src={logoPng} alt="로고" className="site-logo" />
            <span className="sr-only">로고</span>
          </Link>
          <nav className="main-nav">
            <Link to="/opportunities">기회탐색</Link>
            <Link to="/mentoring">멘토링</Link>
            <Link to="/document-coach">문서코치</Link>
            <Link to="/calendar">캘린더</Link>
            {user ? (
              <>
                <span className="user-avatar" title={user.nickname} />
                <span style={{marginLeft:8, marginRight:8}}>{user.nickname}</span>
                <button onClick={handleLogout} className="btn-link">로그아웃</button>
              </>
            ) : (
              <>
                <Link to="/login" className="login">로그인</Link>
                <Link to="/signup" className="signup">회원가입</Link>
              </>
            )}
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/opportunities" element={<Opportunities/>} />
          <Route path="/opportunities/:id" element={<OpportunityDetail/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
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
