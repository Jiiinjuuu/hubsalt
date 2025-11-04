import React from 'react'

const items = [
  '멘토링 예약은 어떻게 하나요?',
  '예약 변경/취소 규정이 있나요?',
  'AI 문서코치는 어떤 파일을 지원하나요?',
  '리뷰는 익명으로 남길 수 있나요?',
  '캘린더와 알림 연동이 되나요?'
]

export default function FAQ(){
  return (
    <section className="faq">
      <div className="container two-col">
        <div>
          <h2 className="section-title small">자주 묻는 질문</h2>
          <ul className="faq-list">
            {items.map((q,i) => (
              <li key={i} className="faq-item">
                <button className="faq-q">{q} <span className="chev">▾</span></button>
              </li>
            ))}
          </ul>
        </div>
        <div className="contact-card">
          <h3>메일 문의가 어려우신가요?</h3>
          <p>전화로 문의하시면 자세히 답변 드리겠습니다.</p>
          <p className="tel">tel. 02-1234-5678</p>
        </div>
      </div>
    </section>
  )
}
