import React from 'react'
import logoBottom from '../resource/image2/logo/logo-bottom-white-200.png'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        {/* Contact us 타이틀 */}
        <h2 className="footer-title">Contact us</h2>

        {/* 상단 카드 3개 */}
        <div className="footer-card-row">
          <div className="footer-card">
            <h4>
              <span>파트너십 · 스폰서 제안</span>
              <span>↗</span>
            </h4>
            <div className="muted">partners@challinker.app</div>
            <a
              className="small-link"
              href="mailto:partners@challinker.app"
            >
              미디어킷 다운로드 / 메일 보내기
            </a>
          </div>

          <div className="footer-card">
            <h4>
              <span>멘토 지원 · 채용</span>
              <span>↗</span>
            </h4>
            <div className="muted">
              mentor@challinker.app / careers@challinker.app
            </div>
            <a
              className="small-link"
              href="mailto:mentor@challinker.app"
            >
              멘토 지원하기 / 채용 공고 보기
            </a>
          </div>

          <div className="footer-card">
            <h4>
              <span>커뮤니티 · 오픈채팅</span>
              <span>↗</span>
            </h4>
            <div className="muted">
              참여코드 challink / chat.challinker.app
            </div>
            <a
              className="small-link"
              href="https://chat.challinker.app"
              target="_blank"
              rel="noreferrer"
            >
              오픈채팅 참여하기 / 커뮤니티 가이드
            </a>
          </div>
        </div>

        {/* 하단 로고 + 메뉴 */}
        <div className="footer-bottom">
          <div className="footer-brand">
            <a href="/">
              <img src={logoBottom} alt="Challinker 로고" className="footer-logo" />
            </a>
            <div className="socials">
              <a href="#">YouTube</a>
              <a href="#">Instagram</a>
              <a href="#">X</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          <div className="footer-columns">
            <div>
              <h5>기능 바로가기</h5>
              <ul>
                <li>멘토탐색</li>
                <li>기회탐색(공모전/대외/채용)</li>
                <li>문서코치(AI)</li>
                <li>캘린더 & 알림</li>
              </ul>
            </div>
            <div>
              <h5>리소스</h5>
              <ul>
                <li>이용 가이드</li>
                <li>가격 안내</li>
                <li>공지 & 업데이트</li>
                <li>고객센터(FAQ)</li>
              </ul>
            </div>
            <div>
              <h5>고객센터</h5>
              <ul>
                <li>support@challinker.app</li>
                <li>자주 묻는 질문(FAQ)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}