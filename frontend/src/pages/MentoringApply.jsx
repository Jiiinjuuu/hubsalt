import React, { useState } from 'react'
import '../styles.css'

export default function MentoringApply(){
  const [date, setDate] = useState('')
  const [selectedTimes, setSelectedTimes] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const times = ['10:00 - 11:00','11:00 - 12:00','18:00 - 19:00','19:00 - 20:00','20:00 - 21:00','21:00 - 22:00']

  function toggleTime(t){
    setSelectedTimes(prev => prev.includes(t) ? prev.filter(x=>x!==t) : [...prev, t])
  }

  function handleSubmit(e){
    e.preventDefault()
    if(!date){ alert('날짜를 선택해주세요'); return }
    if(selectedTimes.length===0){ alert('가능한 시간을 하나 이상 선택해주세요'); return }
    if(!name || !email){ alert('이름과 이메일을 입력해주세요'); return }

    const payload = { date, selectedTimes, name, email, phone, message }
    console.log('멘토링 신청', payload)
    alert('신청이 접수되었습니다. (콘솔을 확인하세요)')
    // reset optional
  }

  return (
    <form onSubmit={handleSubmit} className="container" style={{paddingBottom:80}}>
      <h2 className="section-title">멘토링 신청</h2>

      <div style={{display:'flex',gap:24,alignItems:'flex-start',marginTop:18}}>
        <div style={{flex:1}}>
          <div style={{background:'#fff',border:'1px solid #eee',borderRadius:8,padding:18}}>
            <h4 style={{margin:0}}>1. 일정 선택</h4>
            <p className="muted" style={{marginTop:8}}>선택한 날짜와 시간대를 멘토에게 전달합니다.</p>

            <div style={{display:'flex',gap:18,marginTop:12,alignItems:'flex-start'}}>
              <div style={{flex:1,border:'1px solid #eee',borderRadius:8,padding:14}}>
                <label className="muted">날짜 선택</label>
                <input type="date" value={date} onChange={e=>setDate(e.target.value)} style={{display:'block',marginTop:8,padding:8,borderRadius:8,border:'1px solid #eee'}} />
              </div>

              <div style={{width:320,border:'1px solid #eee',borderRadius:8,padding:14}}>
                <h5 style={{margin:0}}>가능한 시간 선택 (복수 선택 가능)</h5>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginTop:10}}>
                  {times.map((t,i)=> (
                    <button type="button" key={i} onClick={()=>toggleTime(t)} style={{padding:10,borderRadius:8,border:'1px solid #eee',background: selectedTimes.includes(t) ? 'linear-gradient(90deg,#2d47ff,#7b66ff)' : '#fff',color: selectedTimes.includes(t) ? '#fff' : '#111'}}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={{marginTop:18,background:'#fff',border:'1px solid #eee',borderRadius:8,padding:18}}>
            <h4 style={{margin:0}}>2. 멘토에게 보낼 메시지</h4>
            <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="멘토링을 신청하는 목적과 간단한 상황을 적어주세요." style={{width:'100%',height:140,marginTop:10,borderRadius:8,border:'1px solid #eee',padding:12}} />
          </div>

          <div style={{marginTop:18,background:'#fff',border:'1px solid #eee',borderRadius:8,padding:18}}>
            <h4 style={{margin:0}}>필독 사항</h4>
            <p className="muted" style={{marginTop:8}}>예약 후 취소/변경 규정이 적용됩니다. 신청 전 확인하세요.</p>
          </div>
        </div>

        <aside style={{width:360}}>
          <div style={{background:'#fff',border:'1px solid #eee',borderRadius:8,padding:18}}>
            <h4 style={{margin:0}}>멘티 정보</h4>
            <div style={{marginTop:12}}>
              <label className="muted">이름</label>
              <input value={name} onChange={e=>setName(e.target.value)} style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #eee',marginTop:6}} />
            </div>

            <div style={{marginTop:12}}>
              <label className="muted">이메일</label>
              <input value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #eee',marginTop:6}} />
            </div>

            <div style={{marginTop:12}}>
              <label className="muted">전화번호</label>
              <input value={phone} onChange={e=>setPhone(e.target.value)} style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #eee',marginTop:6}} />
            </div>
          </div>

          <div style={{marginTop:28,textAlign:'center'}}>
            <button className="btn-primary" style={{width:260}} type="submit">멘토링 신청하기</button>
          </div>
        </aside>
      </div>
    </form>
  )
}
