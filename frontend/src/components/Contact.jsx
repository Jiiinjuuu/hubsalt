import React from 'react'

export default function Contact(){
  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Contact us</h2>
        <div className="contact-grid">
          <div className="contact-card-dark">
            <h4>파트너십 · 스폰서 제안</h4>
            <p>partners@challinker.app</p>
          </div>
          <div className="contact-card-dark">
            <h4>멘토 지원 · 채용</h4>
            <p>mentor@challinker.app / careers@challinker.app</p>
          </div>
          <div className="contact-card-dark">
            <h4>커뮤니티 · 오픈채팅</h4>
            <p>chat.challinker.app</p>
          </div>
        </div>
      </div>
    </section>
  )
}
