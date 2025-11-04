import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signupUser } from '../lib/auth'

export default function Signup(){
	const [nickname, setNickname] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirm, setConfirm] = useState('')
	const [phone, setPhone] = useState('')
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	async function submit(e){
		e.preventDefault()
		setError(null)
		if(password !== confirm){
			setError('비밀번호와 확인이 일치하지 않습니다')
			return
		}
		try{
			await signupUser({nickname,email,password,phone})
			navigate('/')
		}catch(err){
			setError(err.message || '회원가입 실패')
		}
	}

	return (
		<div className="container">
			<h2 className="section-title">회원가입</h2>
			<form className="auth-form" onSubmit={submit}>
				{error && <div className="form-error">{error}</div>}
				<label>
					닉네임
					<input value={nickname} onChange={e=>setNickname(e.target.value)} required />
				</label>
				<label>
					이메일
					<input value={email} onChange={e=>setEmail(e.target.value)} type="email" required />
				</label>
				<label>
					비밀번호
					<input value={password} onChange={e=>setPassword(e.target.value)} type="password" required />
				</label>
				<label>
					비밀번호 확인
					<input value={confirm} onChange={e=>setConfirm(e.target.value)} type="password" required />
				</label>
				<label>
					전화번호
					<input value={phone} onChange={e=>setPhone(e.target.value)} required />
				</label>
				<div className="form-actions">
					<button className="btn-primary" type="submit">회원가입</button>
				</div>
			</form>
		</div>
	)
}
