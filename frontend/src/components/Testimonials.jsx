import React from 'react'

const TestCard = ({title, body, author}) => (
  <div className="test-card">
    <div className="media-placeholder" />
    <div className="test-body">
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
    <div className="test-author">{author}</div>
  </div>
)

export default function Testimonials(){
  const cards = [
    {title:"포트폴리오의 '스토리'가 생겼어요", body:"UI 화면만 모으면 포폴을 문제-해결-성과 흐름으로 재구성.", author:'달빛 · 시각디자인 3학년'},
    {title:"면접에서 역질문으로 분위기 반전", body:"멘토와 예상 질문 리스트업 → 리허설 녹화 피드백까지.", author:'지안 · 경영 4학년'},
    {title:"코드 리뷰가 '왜'를 알려줬습니다", body:"리팩터링 기준·네이밍 규칙부터 배포 팁까지.", author:'루카 · 프론트엔드 부전공'},
    {title:"한 번의 세션으로 과제 범위가 정리", body:"요구사항 정의→우선순위→제출 체크포인트 정리.", author:'연두 · 컴공 2학년'}
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <p className="eyebrow">왜, 챌린커인가요?</p>
        <h2 className="section-title">사용자들의 생생한 후기</h2>
        <div className="test-row">
          {cards.map((c,i) => <TestCard key={i} {...c} />)}
        </div>
      </div>
    </section>
  )
}
