import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <button className="logo-btn muted" aria-label="홈으로 이동">로고</button>
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
                <li>기회탐색</li>
                <li>문서코치</li>
              </ul>
            </div>
            <div>
              <h5>리소스</h5>
              <ul>
                <li>이용 가이드</li>
                <li>가격 안내</li>
                <li>공지 & 업데이트</li>
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
