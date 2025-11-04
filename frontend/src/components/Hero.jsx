import React from 'react'
// Use renamed ASCII asset path
// heroArt used as background image for the banner
import heroArt from '../resource/image1/onboarding/home-top.png'

export default function Hero(){
  // layout handled by CSS; heroArt used as an <img> on the right column

    return (
      <section className="hero banner-hero">
        <div className="hero-inner">
          <div className="hero-art-wrap banner-art" style={{backgroundImage:`url(${heroArt})`}}>
            <div className="hero-copy-overlay">
              <div className="hero-copy">
                <h3 className="hero-sub">도전을 위한 첫걸음</h3>
                <h1 className="hero-title">지금, 챌린커에서</h1>
                <p className="hero-desc">가입으로 최신 공모전·대외·채용 기회와 멘토 매칭·AI 문서코치까지 함께 받아보세요.</p>
                <button className="btn-primary">가입하기</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
