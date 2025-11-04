import React, { useState } from 'react'
import '../styles.css'
import profileImg from '../resource/하고파이미지파일(로고,프로필) 3/원형프로필이미지jpg/면접코치.jpg';

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
  }

  // 공통 카드 컴포넌트
  const Card = ({title, children, style}) => (
    <div style={{background:'#fff', border:'1px solid #ededed', borderRadius:12, overflow:'hidden', ...style}}>
      <div style={{
        background:'#f7f8fa',
        borderBottom:'1px solid #ededed',
        padding:'12px 16px',
        fontWeight:600,
        color:'#111'
      }}>
        {title}
      </div>
      <div style={{padding:18}}>
        {children}
      </div>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="container" style={{paddingBottom:80, width:'100%'}}>

      <h2 className="section-title">멘토링 신청</h2>

      {/* 멘토 프로필 */}
      <div style={{display:'flex', alignItems:'center', gap:14, marginTop:20}}>
        <img
          src={profileImg}
          alt="멘토 프로필"
          style={{ width:52, height:52, borderRadius:'50%', objectFit:'cover', display:'block' }}
        />
        <div style={{lineHeight:1.4}}>
          <h4 style={{margin:0, fontSize:16, fontWeight:700, color:'#111'}}>
            웹 프론트엔드 개발자 취업 가이드 및 이력서 멘토링
          </h4>
          <p style={{margin:0, marginTop:4, fontSize:14, color:'#777'}}>
            피루미&nbsp;&nbsp;
            <span style={{color:'#2d47ff', fontWeight:600}}>1시간</span>
          </p>
        </div>
      </div>

      {/* 본문 2컬럼 */}
      <div style={{display:'flex', gap:24, alignItems:'flex-start', marginTop:18}}>
        {/* 좌측 */}
        <div style={{flex:1}}>
          {/* 1. 일정 선택 */}
          <Card title="1. 일정 선택">
            <p className="muted" style={{marginTop:0, marginBottom:12, color:'#8a8f98', fontSize:13}}>
              신청일 기준 3일 뒤부터 선택할 수 있어요.
            </p>

            <div style={{display:'flex', gap:18, alignItems:'flex-start'}}>
              {/* 날짜 선택 */}
              <div style={{flex:1, border:'1px solid #eee', borderRadius:8, padding:14}}>
                <label className="muted" style={{fontSize:13, color:'#666'}}>날짜 선택</label>
                <input
                  type="date"
                  value={date}
                  onChange={e=>setDate(e.target.value)}
                  style={{display:'block', marginTop:8, padding:10, borderRadius:10, border:'1px solid #e7e7e7', width:'100%'}}
                />
              </div>

              {/* 시간 선택 */}
              <div style={{width:340, border:'1px solid #eee', borderRadius:8, padding:14}}>
                <h5 style={{margin:0, fontSize:14}}>가능한 시간 선택 (복수 선택 가능)</h5>
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginTop:10}}>
                  {times.map((t,i)=> (
                    <button
                      type="button"
                      key={i}
                      onClick={()=>toggleTime(t)}
                      style={{
                        padding:'9px 10px',
                        borderRadius:10,
                        border:'1px solid #e7e7e7',
                        background: selectedTimes.includes(t) ? 'linear-gradient(90deg,#0040FF,#7A5CFF)' : '#fff',
                        color: selectedTimes.includes(t) ? '#fff' : '#111',
                        fontSize:13,
                        fontWeight:500
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* 우측 사이드 (멘티 정보) */}
        <aside style={{width:360, position:'relative'}}>
          <div style={{background:'#fff', border:'1px solid #ededed', borderRadius:12, padding:18}}>
            <div style={{borderBottom:'1px solid #ededed', paddingBottom:10, marginBottom:12}}>
              <h4 style={{margin:0, fontWeight:700}}>멘티 정보 <span style={{color:'#bbb'}}>?</span></h4>
              <p className="muted" style={{margin:6, marginLeft:0, marginBottom:0, color:'#8a8f98', fontSize:12}}>
                멘토링 확정시 멘토에게 공개됩니다.
              </p>
            </div>

            <div style={{marginTop:8}}>
              <label className="muted" style={{fontSize:13, color:'#666'}}>이름</label>
              <input
                value={name} onChange={e=>setName(e.target.value)}
                style={{width:'100%', padding:10, borderRadius:10, border:'1px solid #e7e7e7', marginTop:6}}
              />
            </div>

            <div style={{marginTop:12}}>
              <label className="muted" style={{fontSize:13, color:'#666'}}>이메일</label>
              <input
                value={email} onChange={e=>setEmail(e.target.value)}
                style={{width:'100%', padding:10, borderRadius:10, border:'1px solid #e7e7e7', marginTop:6}}
              />
            </div>

            <div style={{marginTop:12}}>
              <label className="muted" style={{fontSize:13, color:'#666'}}>전화번호</label>
              <input
                value={phone} onChange={e=>setPhone(e.target.value)}
                style={{width:'100%', padding:10, borderRadius:10, border:'1px solid #e7e7e7', marginTop:6}}
              />
            </div>
          </div>
        </aside>
      </div>

      {/* ✅ 멘토에게 보낼 메시지 (페이지 전체 폭) */}
      <Card
        title="2. 멘토에게 보낼 메시지"
        style={{
          marginTop: 20,
          width: '100%',
          maxWidth: 'none',
          boxSizing: 'border-box',
        }}
      >
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="멘토링을 신청하는 목적과 간단한 상황을 적어주세요."
          style={{
            width: '100%',
            height: 140,
            borderRadius: 10,
            border: '1px solid #e7e7e7',
            padding: 12,
            fontSize: 14,
            boxSizing: 'border-box',
          }}
        />
      </Card>

      {/* ✅ 필독 사항 (페이지 전체 폭) */}
      <div
        style={{
          marginTop: 14,
          width: '100%',
          background: '#fff',
          border: '1px solid #ededed',
          borderRadius: 12,
          padding: 18,
          boxSizing: 'border-box',
        }}
      >
        <h4 style={{ margin: 0, fontWeight: 600 }}>필독 사항</h4>
        <p
          className="muted"
          style={{
            marginTop: 8,
            color: '#8a8f98',
            fontSize: 13,
          }}
        >
          예약 후 취소/변경 규정이 적용됩니다. 신청 전 확인하세요.
        </p>
      </div>

      {/* 하단 버튼 */}
      <div style={{display:'flex', justifyContent:'center', margin:'28px 0 44px'}}>
        <button
          type="submit"
          style={{
            width:380, height:48,
            background:'linear-gradient(90deg, #0040FF, #7A5CFF)',
            color:'#fff', border:'none', borderRadius:999,
            fontWeight:700, letterSpacing:'-0.2px'
          }}
        >
          멘토링 신청하기
        </button>
      </div>
    </form>
  )
}
