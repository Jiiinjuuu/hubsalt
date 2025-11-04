import React, { useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'

const RelatedCard = ({title}) => (
  <div className="rel-card">
    <div className="op-media" />
    <div style={{padding:'10px'}}>
      <h4 style={{margin:0}}>{title}</h4>
    </div>
  </div>
)

export default function OpportunityDetail(){
  const { id } = useParams()

  // mock data for demo
  const item = {
    id,
    title: '[방송통신위원회/한국지능정보사회진흥원] 2025년 디지털윤리 창작콘텐츠 공모전',
    org: '방송통신위원회/한국지능정보사회진흥원',
    period: '2025년 06월 02일 ~ 2025년 10월 02일',
    tags: ['카테고1','카테고2']
  }

  const [activeTab, setActiveTab] = useState('detail')
  const contentRef = useRef(null)

  function showTab(tab){
    setActiveTab(tab)
    // scroll content into view for UX
    setTimeout(()=>{
      contentRef.current?.scrollIntoView({behavior:'smooth', block:'start'})
    }, 50)
  }

  return (
    <section className="detail container">
      <div className="detail-top">
        <div className="detail-media">
          <div className="op-media" style={{height:420,borderRadius:12}} />
          <div className="badge">D-5</div>
        </div>

        <div className="detail-side">
          <h1 className="detail-title">{item.title}</h1>
          <div className="detail-meta">
            <div>{item.org}</div>
            <div className="muted">{item.period}</div>
            <div className="tag-row">{item.tags.map(t=> <span key={t} className="chip">{t}</span>)}</div>
          </div>

          <div style={{marginTop:20}}>
            <button className="btn-apply">지원하기</button>
            <button className="btn-outline" style={{marginLeft:12}}>찜</button>
            <button className="btn-outline" style={{marginLeft:8}}>공유</button>
          </div>
        </div>
      </div>

      <div className="detail-tabs">
        <button className={`tab ${activeTab==='detail'? 'active':''}`} onClick={()=>showTab('detail')}>상세정보</button>
        <button className={`tab ${activeTab==='resources'? 'active':''}`} onClick={()=>showTab('resources')}>자료(3)</button>
        <button className={`tab ${activeTab==='winners'? 'active':''}`} onClick={()=>showTab('winners')}>연도별 수상작(5)</button>
      </div>

      <div className="detail-content" ref={contentRef}>
        {activeTab === 'detail' && (
          <>
            <h3>공모목적</h3>
            <p>창작콘텐츠 기획·제작 과정을 통해 디지털윤리의식을 확산하고...</p>

            <h3>참가대상</h3>
            <ul>
              <li>대한민국 국적을 보유한 청소년, 성인, 군장병, 교사 및 예비교사</li>
            </ul>

            <p className="muted">(여기에 긴 본문 설명이 이어집니다. 스크롤해서 전체 내용을 볼 수 있습니다.)</p>
          </>
        )}

        {activeTab === 'resources' && (
          <div>
            <h3>자료</h3>
            <ul>
              <li><a href="#">공모전 안내 PDF.pdf</a></li>
              <li><a href="#">참가 양식.docx</a></li>
              <li><a href="#">심사 기준.xlsx</a></li>
            </ul>
          </div>
        )}

        {activeTab === 'winners' && (
          <div>
            <h3>연도별 수상작</h3>
            <p>과거 수상작 요약 및 링크들을 확인하세요.</p>
            <ul>
              <li>2024 - 수상작 A</li>
              <li>2023 - 수상작 B</li>
              <li>2022 - 수상작 C</li>
            </ul>
          </div>
        )}
      </div>

      <div className="related">
        <h3>팀원모집</h3>
        <div className="rel-row">
          <RelatedCard title="팀 모집 예시 1" />
          <RelatedCard title="팀 모집 예시 2" />
          <RelatedCard title="팀 모집 예시 3" />
          <RelatedCard title="팀 모집 예시 4" />
        </div>
      </div>

      <div style={{marginTop:40}}>
        <Link to="/opportunities">← 뒤로가기</Link>
      </div>
    </section>
  )
}
