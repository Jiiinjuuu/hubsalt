import React from 'react'
import imgFilter from '../resource/image1/온보딩(홈)/중단/맞춤필터.png'
import imgContest from '../resource/image1/온보딩(홈)/중단/공모전.png'
import imgRecruit from '../resource/image1/온보딩(홈)/중단/채용.png'
import imgActivity from '../resource/image1/온보딩(홈)/중단/대외활동.png'

const Card = ({title, children, badge, bg}) => (
  <div className={`cat-card ${badge? 'best':''}`} style={{backgroundImage: `url(${bg})`}}>
    <div className="cat-overlay" />
    {badge && <div className="badge">{badge}</div>}
    <h4>{title}</h4>
    <p>{children}</p>
    <a className="more">더 알아보기 &gt;</a>
  </div>
)

export default function Categories(){
  return (
    <section className="categories">
      <div className="container">
        <p className="eyebrow">챌린커의 대표 탐색 카테고리</p>
        <h2 className="section-title">카테고리별 기회</h2>

        <div className="cards-row">
          <Card title="맞춤필터" badge="BEST" bg={imgFilter}>전공·관심사·가능 시간대 기반 개인화 마감 임박 & 스폰서 공고 우선 노출</Card>
          <Card title="공모전" bg={imgContest}>주최·상금·팀 역할까지 정교한 필터 제출 체크리스트·팀빌딩 연동 지원</Card>
          <Card title="대외활동" bg={imgActivity}>지역/온라인·기간·인증 여부 빠른 분류 활동보고서 포트폴리오 연결 가이드</Card>
          <Card title="채용" bg={imgRecruit}>인턴/신입/기술스택·근무형태 필터 자소서/포폴 AI 코칭 바로 연계</Card>
        </div>
      </div>
    </section>
  )
}
