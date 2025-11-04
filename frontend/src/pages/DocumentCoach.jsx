import React, { useState, useEffect } from 'react'
import '../styles.css'
import FilterModal from '../components/FilterModal'

export default function DocumentCoach(){
  const [tab, setTab] = useState('resume')
  // Top banner that matches the requested design
  const Banner = () => (
    <section className="doc-coach-banner">
      <div className="banner-inner">
        <div className="banner-copy">
          <p className="eyebrow">AI 문서코치</p>
          <h2 className="banner-title">지금 바로 코칭을 시작해<br/>자소서·포트폴리오를 명확하게, 면접 준비는 확실하게</h2>
        </div>
        <div className="banner-cta">
          <button className="btn-black">문서 코칭 시작하기</button>
        </div>
      </div>
    </section>
  )
  const chips = ['전체','AI 개발','AI 활용(AI)','게임 프로그래밍','게임 개발','데이터 서비스','보안 네트워크','하드웨어','디자인 아트','기획 경영 마케팅','업무 생산성','커리어 자기계발','대학 교육']
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState([])
  const [resume, setResume] = useState({ file:null, url:null })

  return (
    <>
  {/* banner under the site hero */}
  <Banner />

  <div className="container">
      <h2 className="section-title">문서코치</h2>
      <div style={{display:'flex',gap:18,alignItems:'center',justifyContent:'center',marginTop:12}}>
        <button className={`tab ${tab==='resume'?'active':''}`} onClick={()=>setTab('resume')}>자소서 분석</button>
        <button className={`tab ${tab==='interview'?'active':''}`} onClick={()=>setTab('interview')}>면접코치</button>
      </div>

      <div className="chips-row" style={{marginTop:18,justifyContent:'center'}}>
        {chips.map(c=> <button key={c} className="chip">{c}</button>)}
      </div>

      <div style={{marginTop:18}}>
        <button className="filter-btn" onClick={()=>setFilterOpen(true)}>세부 필터</button>
      </div>

      {selectedFilters.length>0 && (
        <div className="chips-row" style={{paddingTop:8}}>
          {selectedFilters.map(f=> (<span key={f} className="chip">{f}</span>))}
        </div>
      )}

      {tab === 'resume' && (
        <section style={{marginTop:18}}>
          {!resume.file ? (
            <div className="resume-upload">
              <label className="resume-drop">
                <div className="resume-drop-title">자소서 삽입하기</div>
                <div className="muted">여기에 파일을 드래그하거나 붙여넣기 하세요</div>
                <input type="file" onChange={(e)=>{
                  const f=e.target.files?.[0];
                  if(!f) return; const url=URL.createObjectURL(f); setResume({file:f,url})
                }} style={{display:'none'}} />
              </label>
            </div>
          ) : (
            <>
              <div className="resume-grid">
                <div className="doc-preview">
                  {/* Preview best-effort: try to embed if browser can render */}
                  {resume.url ? (
                    <embed src={resume.url} type="application/pdf" className="doc-embed" />
                  ) : null}
                  <button className="close-doc" aria-label="닫기" onClick={()=>{ setResume({file:null,url:null}) }}>×</button>
                </div>
                <div className="report-panel">
                  <div className="report-header">
                    <strong>키워드 적합도 86/100 (A-)</strong>
                    <button className="icon-btn" aria-label="공유">↗</button>
                  </div>
                  <ul className="report-list">
                    <li>중점: React · TypeScript · REST API · Git/GitHub · 협업</li>
                    <li>부족: 성능 최적화(숫자 언급)</li>
                    <li>추천: 테스트(예: Jest) · CI/CD</li>
                    <li>제안: Github Actions로 PR마다 Lint와 URL을 생성해 리뷰 시간을 단축</li>
                  </ul>

                  <h4>개선점 A+</h4>
                  <ol className="report-steps">
                    <li>최근 진행 2~3건, 팀 규모, 내 역할을 수치로</li>
                    <li>이미지 지연 로딩·코드 스플리팅으로 초기 로딩 최적화 사례</li>
                    <li>에러/장애 대응 시나리오와 지표 변화를 한 줄 추가</li>
                  </ol>
                </div>
              </div>

              <div className="summary-row">
                <div className="summary-card">
                  <div className="muted">누락 키워드 3개를 추가하면 적합도가 올라갑니다.</div>
                </div>
                <div className="summary-card">
                  <div className="muted">장문 2개를 두 문장으로 나누면 A로 상승해요.</div>
                </div>
                <div className="summary-card">
                  <div className="muted">결과에 수치 1개만 붙여도 설득력이 커집니다.</div>
                </div>
              </div>
            </>
          )}
        </section>
      )}

      {tab === 'interview' && (
        <InterviewCoach />
      )}
    </div>
    <FilterModal
      open={filterOpen}
      onClose={()=>setFilterOpen(false)}
      initialSelected={selectedFilters}
      onApply={(sel)=>setSelectedFilters(sel)}
    />
    </>
  )
}

function InterviewCoach(){
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const [showQA, setShowQA] = useState(false)

  useEffect(()=>{
    // initial state: no messages (blank screen like the first screenshot)
  },[])

  function send(){
    const t = text.trim()
    if(!t) return
    setMessages(prev=>[...prev,{from:'user', text:t}])
    setText('')
    // simulate AI response and then reveal QA section
    setTimeout(()=>{
      setMessages(prev=>[...prev,{from:'ai', text:'좋은 답변이에요! 숫자와 임팩트를 보여주는 점이 강점이에요. 하지만 역할과 팀 규모가 드러나면 더 좋아요.'}])
      setTimeout(()=> setShowQA(true), 300)
    }, 400)
  }

  return (
    <section style={{marginTop:18}}>
      <div className="chat-panel">
        {messages.length===0 && (
          <div className="chat-empty" aria-hidden>
            {/* blank state */}
          </div>
        )}

        {messages.map((m,i)=> (
          <Message key={i} from={m.from} text={m.text} />
        ))}
      </div>

      <div className="chat-input-row">
        <input
          className="chat-input"
          placeholder="여기에 답변을 작성해주세요."
          value={text}
          onChange={e=>setText(e.target.value)}
          onKeyDown={e=>{ if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); send() } }}
        />
        <button className="chat-send" aria-label="보내기" onClick={send}>↑</button>
      </div>

      {showQA && (
        <div className="qa-list">
          {qaSamples.map((qa,i)=> (
            <div key={i} className="qa-card">
              <div className="qa-left">
                <div className="qa-row"><span className="qa-q">Q</span><div className="qa-text">{qa.q}</div></div>
                <div className="qa-row"><span className="qa-a">A</span><div className="qa-text">{qa.a}</div></div>
              </div>
              <div className="qa-right">
                <span className="feedback-tag">피드백</span>
                <div className="qa-tip">{qa.tip}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

function Message({from, text}){
  const isUser = from==='user'
  return (
    <div className={`msg ${isUser?'user':'ai'}`}>
      {!isUser && <div className="msg-avatar" aria-hidden />}
      <div className="bubble">{text}</div>
    </div>
  )
}

const qaSamples = [
  {
    q:'본인을 한 줄로 소개하고, 최근 만든 것 1가지를 말해 주세요.',
    a:'사용자 체감 성능을 수치로 개선하는 프론트엔드 엔지니어입니다. 최근 올린 작업은 코드 스플리팅과 이미지 최적화로 LCP를 낮추고 이탈률을 줄였습니다.',
    tip:'수치 포함형; 기간·팀 규모·내 역할 한 줄 추가.'
  },
  {
    q:'상태관리·데이터 패칭을 무엇으로 선택했고, 왜였나요?',
    a:'전역 상태는 Zustand, 서버 상태는 React Query를 사용했습니다. 캐싱과 동기화, 스켈레톤 제공 등 사용자 경험 향상을 위해 선택했습니다.',
    tip:'선택·대안·결과 균형 좋음; 전환 기준(SWR/현재 RQ) 한 줄 명시.'
  },
  {
    q:'접근성 관점에서 구현 검증했나요?',
    a:'aria-label 보완, 키보드 네비게이션 경로 점검, Lighthouse a11y 100/100 유지하였습니다.',
    tip:'구현·검증 종합; 사용자 영향 수치와 검증 도구(axe) 추가.'
  }
]
