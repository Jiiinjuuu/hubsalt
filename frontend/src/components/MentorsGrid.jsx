import React from 'react'

const Mentor = ({title, meta, tag}) => (
  <div className="mentor">
    <div className="media-placeholder" />
    <div className="mentor-tag">{tag}</div>
    <div className="mentor-cta">{title}</div>
    <div className="mentor-meta">
      <strong>{meta.name}</strong>
      <p>{meta.desc}</p>
    </div>
  </div>
)

export default function MentorsGrid(){
  const mentors = [
    {title:'이번 주 1:1 예약 오픈', meta:{name:'김하온 · 프론트엔드 리드', desc:'React/TypeScript | 온라인·오프라인'}, tag:'D-3'},
    {title:'첫 상담 OT 제공', meta:{name:'박서윤 · UX/UI 디자이너', desc:'기본 UX 구조·자소서 피드백'}, tag:'신규'},
    {title:'이번 주 2자리 남음', meta:{name:'최민규 · 백엔드 엔지니어', desc:'Spring·DB 설계 리뷰'}, tag:'L3'}
  ]

  return (
    <section className="mentors">
      <div className="container">
        <p className="eyebrow">챌린커 이번 주 추천 멘토</p>
        <h2 className="section-title">예약 임박! 1:1 멘토링 스페셜</h2>
        <div className="mentors-row">
          {mentors.map((m, i) => <Mentor key={i} {...m} />)}
        </div>
      </div>
    </section>
  )
}
