import React from 'react'

// Use URL import because the asset file name contains special characters
const profileImg = new URL('../resource/하고파이미지파일(로고,프로필) 3/원형프로필이미지jpg/면접코치프로필@200x-100.jpg', import.meta.url).href

const Mentor = ({title, meta, tag}) => (
  <div className="mentor">
    <div className="mentor-media-wrap">
      <img src={profileImg} alt="멘토 프로필" className="mentor-media" />
      <div className="mentor-tag">{tag}</div>
      <div className="mentor-cta">{title}</div>

      {/* move meta inside white card so text doesn't overflow outside the rounded panel */}
      <div className="mentor-meta">
        <strong>{meta.name}</strong>
        <p>{meta.desc}</p>
      </div>
    </div>
  </div>
)

export default function MentorsGrid(){
  const mentors = [
    {title:'이번 주 1:1 예약 오픈', meta:{name:'김하온 · 프론트엔드 리드', desc:'React/TypeScript | 온라인·오프라인 | 수업 19~22시'}, tag:'D-3'},
    {title:'첫 상담 OT 제공', meta:{name:'박서윤 · UX/UI 디자이너', desc:'제품 UX 구조화·자소서 포트 피드백 | 온라인'}, tag:'신규'},
    {title:'이번 주 2자리 남음', meta:{name:'최민규 · 백엔드 엔지니어', desc:'Spring·DB 설계 | 코딩테스트·시스템 설계 리뷰'}, tag:'L3'}
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
