// Simple frontend-only auth helpers using localStorage for demo purposes
const USERS_KEY = 'hubsalt_users'
const CURRENT_KEY = 'hubsalt_current_user'

function loadUsers(){
  try{ return JSON.parse(localStorage.getItem(USERS_KEY) || '[]') }catch(e){ return [] }
}

function saveUsers(users){
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function getCurrentUser(){
  try{ return JSON.parse(localStorage.getItem(CURRENT_KEY) || 'null') }catch(e){ return null }
}

export function signupUser({ nickname, email, password, phone }){
  const users = loadUsers()
  const existing = users.find(u => u.email && u.email.toLowerCase() === (email || '').toLowerCase())
  if(existing) throw new Error('이미 등록된 이메일입니다.')

  const newUser = { id: Date.now(), nickname, email, password, phone }
  users.push(newUser)
  saveUsers(users)
  // do not automatically log in; return created user
  return newUser
}

export function loginUser(email, password){
  const users = loadUsers()
  const user = users.find(u => u.email && u.email.toLowerCase() === (email || '').toLowerCase() && u.password === password)
  if(!user) throw new Error('이메일 또는 비밀번호가 올바르지 않습니다.')
  localStorage.setItem(CURRENT_KEY, JSON.stringify(user))
  // trigger cross-window update if needed
  try{ window.dispatchEvent(new Event('authChanged')) }catch(e){}
  return user
}

export function logout(){
  localStorage.removeItem(CURRENT_KEY)
  try{ window.dispatchEvent(new Event('authChanged')) }catch(e){}
}
