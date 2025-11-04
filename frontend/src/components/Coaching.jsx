import React from 'react'

export default function Coaching(){
  return (
    <section className="coaching">
      <div className="container two-col">
        <div className="coach-left">
          <p className="eyebrow">AI 문서코치</p>
          <h2 className="section-title">지금 바로 코칭을 시작해<br/>자소서·포트폴리오를 명확하게, 면접 준비는 확실하게</h2>
          <button className="btn-outline">문서 코칭 시작하기</button>
        </div>
        <div className="coach-cards">
          <div className="mentor-card">
            <div className="media-placeholder" />
            <div className="card-cta">이번 주 1:1 예약 오픈</div>
            <div className="card-meta">
              <strong>김하온 · 프론트엔드 리드</strong>
              <p>React/TypeScript | 온라인·오프라인 | 수업 19~22시</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
