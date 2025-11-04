// Simple frontend-only auth helper using localStorage for demo purposes
const USERS_KEY = 'hubsalt_users_v1'
const SESSION_KEY = 'hubsalt_session_v1'

function loadUsers(){
  try{
    return JSON.parse(localStorage.getItem(USERS_KEY)) || []
  }catch(e){
    return []
  }
}

function saveUsers(users){
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

function setCurrentUser(email){
  localStorage.setItem(SESSION_KEY, JSON.stringify({email}))
  window.dispatchEvent(new Event('authChanged'))
}

function clearCurrentUser(){
  localStorage.removeItem(SESSION_KEY)
  window.dispatchEvent(new Event('authChanged'))
}

export function signupUser({nickname, email, password, phone}){
  const users = loadUsers()
  if(users.find(u=>u.email === email)){
    throw new Error('이미 존재하는 이메일입니다')
  }
  const user = {nickname, email, password, phone}
  users.push(user)
  saveUsers(users)
  setCurrentUser(email)
  return user
}

export function loginUser(email, password){
  const users = loadUsers()
  const user = users.find(u=>u.email === email && u.password === password)
  if(!user) throw new Error('이메일 또는 비밀번호가 올바르지 않습니다')
  setCurrentUser(email)
  return user
}

export function logout(){
  clearCurrentUser()
}

export function getCurrentUser(){
  try{
    const s = JSON.parse(localStorage.getItem(SESSION_KEY))
    if(!s || !s.email) return null
    const users = loadUsers()
    return users.find(u=>u.email === s.email) || null
  }catch(e){
    return null
  }
}
