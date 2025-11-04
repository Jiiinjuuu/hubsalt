import React, { useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { opportunities } from '../data/mockData'

export default function OpportunityDetail() {
    const { id } = useParams()
    const item = opportunities.find(o => o.id === Number(id))
    const [activeTab, setActiveTab] = useState('detail')
    const contentRef = useRef(null)

    if (!item) {
        return <div className="container">해당 공모전 정보를 찾을 수 없습니다.</div>
    }

    return (
        <section className="detail container">
            <div className="detail-top">
                <div className="detail-media" style={{ position: 'relative' }}>
                    {/* ✅ 이미지가 있으면 표시, 없으면 회색 박스 */}
                    {item.image ? (
                        <img
                            src={item.image}
                            alt={item.title}
                            style={{
                                width: '100%',
                                height: 420,
                                objectFit: 'cover',
                                borderRadius: 12,
                            }}
                        />
                    ) : (
                        <div
                            className="op-media"
                            style={{
                                height: 420,
                                borderRadius: 12,
                                background: '#eee',
                            }}
                        />
                    )}
                    <div className="badge">D-5</div>
                </div>

                <div className="detail-side">
                    <h1 className="detail-title">{item.title}</h1>
                    <div className="detail-meta">
                        <div>{item.org}</div>
                        <div className="muted">{item.period}</div>
                        <div className="tag-row">
                            {item.tags.map(t => (
                                <span key={t} className="chip">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginTop: 20 }}>
                        <button className="btn-apply">지원하기</button>
                        <button className="btn-outline" style={{ marginLeft: 12 }}>
                            찜
                        </button>
                        <button className="btn-outline" style={{ marginLeft: 8 }}>
                            공유
                        </button>
                    </div>
                </div>
            </div>

            <div className="detail-tabs">
                <button
                    className={`tab ${activeTab === 'detail' ? 'active' : ''}`}
                    onClick={() => setActiveTab('detail')}
                >
                    상세정보
                </button>
            </div>

            <div className="detail-content" ref={contentRef}>
                <h3>공모전 개요</h3>
                <p>{item.description}</p>
                <h3>세부 내용</h3>
                <pre>{item.details}</pre>
            </div>

            <div style={{ marginTop: 40 }}>
                <Link to="/opportunities">← 뒤로가기</Link>
            </div>
        </section>
    )
}
