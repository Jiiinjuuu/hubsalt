import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../lib/auth'

export default function Login(){
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	async function submit(e){
		e.preventDefault()
		setError(null)
		try{
			await loginUser(email, password)
			navigate('/')
		}catch(err){
			setError(err.message || '로그인 실패')
		}
	}

	return (
		<div className="container">
			<h2 className="section-title">로그인</h2>
			<form className="auth-form" onSubmit={submit}>
				{error && <div className="form-error">{error}</div>}
				<label>
					이메일
					<input value={email} onChange={e=>setEmail(e.target.value)} type="email" required />
				</label>
				<label>
					비밀번호
					<input value={password} onChange={e=>setPassword(e.target.value)} type="password" required />
				</label>
				<div className="form-actions">
					<button className="btn-primary" type="submit">로그인</button>
				</div>
			</form>
		</div>
	)
}
