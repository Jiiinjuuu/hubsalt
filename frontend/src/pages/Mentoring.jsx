import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles.css'
import SortDropdown from '../components/SortDropdown'

export default function Mentoring(){
  const [activeTab, setActiveTab] = useState('intro')

  return (
    <div className="container" style={{paddingBottom:60}}>
      <div className="detail-top">
        <div className="detail-media" style={{width:520}}>
          <div className="op-media" style={{height:520,borderRadius:12,background:'#000'}} />
          <div style={{display:'flex',gap:12,marginTop:12}}>
            <Link to="/mentoring/apply" className="btn-primary" style={{display:'inline-block',textAlign:'center'}}>멘토링 신청하기</Link>
            <button className="btn-outline" aria-label="좋아요">♡</button>
            <button className="btn-outline" aria-label="공유">⤴</button>
          </div>
        </div>

        <div className="detail-side">
          <div className="muted">멘토링 / 기획 경영 마케팅, 개발 프로그래밍, 커리어 자기계발</div>
          <h1 className="detail-title">프론트엔드 개발자 취직 & 이직 상담 & 커리어 및 로드맵 고민 & 모의면접</h1>

          <div style={{display:'flex',alignItems:'center',gap:12,marginTop:10}}>
            <div style={{fontWeight:700}}>★★★★★</div>
            <div className="muted">(5.0) 리뷰 158개</div>
            <div className="muted">멘티 384명</div>
          </div>

          <div className="detail-meta" style={{marginTop:14}}>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              {['커리어','포트폴리오','면접','로드맵'].map(t=> <span key={t} className="chip">{t}</span>)}
            </div>

            <h4 style={{marginTop:12}}>포트폴리오</h4>
            <ul style={{marginTop:8,lineHeight:1.6}}>
              <li>Next.js 14 + TypeScript·Tailwind로 구성된 프로젝트</li>
              <li>디자인 시스템 구축 및 Storybook / 퍼포먼스 최적화</li>
              <li>테스트 구성(Jest/Playwright) · 접근성 개선</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="detail-tabs" style={{marginTop:28}}>
        <button className={`tab ${activeTab==='intro'?'active':''}`} onClick={()=>setActiveTab('intro')}>멘토링 소개</button>
        <button className={`tab ${activeTab==='reviews'?'active':''}`} onClick={()=>setActiveTab('reviews')}>멘토링 리뷰 (158)</button>
      </div>

      <div className="detail-content">
        {activeTab === 'intro' && (
          <div>
            <h3>자기소개 👋</h3>
            <p>안녕하세요. 다양한 경험을 해본 프론트엔드 개발자입니다. 비전공 / 고졸로 시작해 에이전시, 스타트업, 중소기업, 대기업 등에서 실무 경험을 쌓았습니다.</p>

            <h4 style={{marginTop:18}}>멘토링 종류</h4>
            <ul>
              <li>커리어 상담</li>
              <li>프론트엔드 학습 방법 및 로드맵 설계</li>
              <li>모의 면접 및 이력서/포트폴리오 피드백</li>
            </ul>

            <p className="muted">멘토링은 온라인 또는 오프라인으로 진행됩니다. 대부분 1:1 세션으로 제공됩니다.</p>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <div style={{flex:1,textAlign:'center',padding:24}}>
                <div style={{fontSize:28,fontWeight:700}}>5.0</div>
                <div style={{fontSize:28,letterSpacing:6}}>★★★★★</div>
              </div>
              <div style={{width:220,textAlign:'right'}}>
                <SortDropdown />
              </div>
            </div>

            <div style={{marginTop:18}}>
              {/* reviews list */}
              {new Array(6).fill(0).map((_,i)=> (
                <div key={i} className="test-card" style={{marginTop:i===0?0:12,borderRadius:8,border:'1px solid #eee'}}>
                  <div style={{padding:14}}>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                      <div className="muted" style={{fontSize:13}}>2025 . 09 . 15 . 23:07</div>
                      <div style={{display:'flex',alignItems:'center',gap:8}}>
                        <div style={{fontWeight:700}}>★★★★★</div>
                        <div className="muted">5.0</div>
                      </div>
                    </div>
                    <div style={{marginTop:10,color:'#222'}}>부족한 점을 자세히 알려주시고 앞으로의 방향을 제시해주셔서 도움이 되었습니다.</div>
                  </div>
                </div>
              ))}

              <div className="pagination" style={{marginTop:18}}>
                <button className="page-btn">◀</button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn">▶</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="related">
        <h4 style={{marginTop:28}}>관련 멘토</h4>
        <div className="rel-row">
          {[1,2,3].map(i=> (
            <a key={i} className="rel-card link-card">
              <div style={{height:120,background:'#000',borderRadius:8}} />
              <div style={{padding:8}}><strong>멘토 {i}</strong><div className="muted" style={{fontSize:13}}>프론트엔드</div></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
