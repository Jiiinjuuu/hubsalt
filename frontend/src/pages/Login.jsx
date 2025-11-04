import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../lib/auth'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function validate(){
    if(!email) return '이메일을 입력해 주세요.'
    if(!password) return '비밀번호를 입력해 주세요.'
    return ''
  }

  async function handleSubmit(e){
    e.preventDefault()
    const err = validate()
    if(err){
      setError(err)
      return
    }

    try{
      // frontend-only login (localStorage)
      loginUser(email, password)
      // on success, navigate home
      navigate('/')
    }catch(err){
      setError(err.message || '로그인 중 에러가 발생했습니다.')
    }
  }

  return (
    <div className="page login-page">
      <h1>로그인</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        {error && <div className="form-error">{error}</div>}
        <label>
          이메일
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>

        <label>
          비밀번호
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="비밀번호"
          />
        </label>

        <div className="form-actions">
          <button type="submit" className="btn-primary">로그인</button>
          <Link to="/signup" className="btn-link">회원가입</Link>
        </div>
      </form>
    </div>
  )
}
