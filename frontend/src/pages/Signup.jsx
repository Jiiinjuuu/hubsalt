import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup(){
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // simple phone validation: allow digits, spaces, dashes, parentheses; require 8-15 digits
  function normalizeDigits(s){
    return (s || '').replace(/[^0-9]/g, '')
  }

  function validate(){
    if(!nickname) return '닉네임을 입력해 주세요.'
    if(!email) return '이메일을 입력해 주세요.'
    if(!password) return '비밀번호를 입력해 주세요.'
    if(password.length < 6) return '비밀번호는 6자 이상이어야 합니다.'
    if(password !== confirm) return '비밀번호가 일치하지 않습니다.'
    const digits = normalizeDigits(phone)
    if(!digits) return '전화번호를 입력해 주세요.'
    if(digits.length < 8 || digits.length > 15) return '유효한 전화번호를 입력해 주세요.'
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
      // frontend-only signup (localStorage)
      const { signupUser } = await import('../lib/auth')
      signupUser({ nickname, email, password, phone })
      // redirect to login after success
      navigate('/login')
    }catch(err){
      setError(err.message || '회원가입 중 에러가 발생했습니다.')
    }
  }

  return (
    <div className="page signup-page">
      <h1>회원가입</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        {error && <div className="form-error">{error}</div>}

        <label>
          닉네임
          <input
            type="text"
            value={nickname}
            onChange={e => setNickname(e.target.value)}
            placeholder="사용하실 닉네임"
          />
        </label>

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
            placeholder="비밀번호 (6자 이상)"
          />
        </label>

        <label>
          비밀번호 확인
          <input
            type="password"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
            placeholder="비밀번호 확인"
          />
        </label>

        <label>
          전화번호
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="010-1234-5678"
          />
        </label>

        <div className="form-actions">
          <button type="submit" className="btn-primary">회원가입</button>
          <Link to="/login" className="btn-link">이미 계정이 있나요?</Link>
        </div>
      </form>
    </div>
  )
}
