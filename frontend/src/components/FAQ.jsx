import React, { useState } from 'react'

const contactImg = new URL('../resource/image1/온보딩(홈)/하단 메일문의.png', import.meta.url).href

const faqData = [
  {
    q: '멘토링 예약은 어떻게 하나요?',
    a: '멘토링 예약은 서비스 내 멘토 프로필에서 "예약하기" 버튼을 눌러 가능합니다. 예약 변경은 마이페이지 > 예약내역에서 가능합니다.'
  },
  {
    q: '예약 변경/취소 규정이 있나요?',
    a: '예약 변경/취소는 예약일 기준으로 24시간 전까지 가능합니다. 취소수수료 정책은 서비스 이용약관을 확인하세요.'
  },
  {
    q: 'AI 문서코치는 어떤 파일을 지원하나요?',
    a: 'AI 문서코치는 PDF, DOCX, TXT 형식을 지원합니다. 최대 파일 크기는 10MB입니다.'
  },
  {
    q: '리뷰는 익명으로 남길 수 있나요?',
    a: '리뷰는 익명으로 남기실 수 있습니다. 공개 여부는 리뷰 작성시 선택 가능합니다.'
  },
  {
    q: '캘린더와 알림 연동이 되나요?',
    a: '캘린더 연동은 구글 캘린더를 지원합니다. 설정에서 연동을 활성화하세요.'
  }
]

export default function FAQ(){
  const [open, setOpen] = useState(null)

  function toggle(i){
    setOpen(prev => prev===i? null : i)
  }

  return (
    <section className="faq">
      <div className="container two-col">
        <div>
          <h2 className="section-title small">자주 묻는 질문</h2>
          <ul className="faq-list">
            {faqData.map((item,i) => (
              <li key={i} className={`faq-item ${open===i? 'open':''}`}>
                <button className="faq-q" onClick={()=>toggle(i)} aria-expanded={open===i}>{item.q} <span className="chev">▾</span></button>
                {open===i && (
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="contact-card">
          <div className="contact-illustration-wrap">
            <img src={contactImg} alt="메일 문의" className="contact-illustration" />
            <div className="contact-overlay" aria-hidden>
              <div className="overlay-line">메일 문의가 어려우신가요?<br/>전화로 문의하시면 자세히 답변 드리겠습니다.</div>
              <div className="overlay-tel">tel. 02-1234-5678</div>
            </div>
          </div>
          <div className="contact-meta">
            <div>평일 10:00–18:00 (점심 12:00–13:00) · 공휴일 휴무</div>
            <div>또는 support@challinker.app / 실시간 채팅 문의하기</div>
          </div>
        </div>
      </div>
    </section>
  )
}
