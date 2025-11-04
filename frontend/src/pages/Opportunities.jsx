import React, { useState, useMemo } from 'react'
import FilterModal from '../components/FilterModal'
import SortDropdown from '../components/SortDropdown'

const Chip = ({children, onClick, active}) => (
  <button className={`chip ${active? 'selected':''}`} onClick={onClick}>{children}</button>
)

import { Link } from 'react-router-dom'

const PlaceholderCard = ({item}) => (
  <Link to={`/opportunities/${item.id}`} className="op-card link-card">
    <div className="op-media" />
    <div className="op-body">
      <h4>{item.title}</h4>
      <p className="muted">{item.type} · {item.tags.join(' · ')}</p>
    </div>
  </Link>
)

export default function Opportunities(){
  const chips = ['전체','AI 개발','AI 활용(AI)','게임·프로그래밍','게임 개발','데이터/서비스','보안/네트워크','HW/로봇','디자인 아트','기업 연계/캠프','창업 도전']
  const categoryTabs = ['전체','공모전','대외활동','채용']

  // mock items with tags to demonstrate filtering
  const items = Array.from({length:18}).map((_,i)=>({
    id:i+1,
    title:`기회 제목 예시 ${i+1}`,
    type: i%3===0? '공모전' : i%3===1? '대외활동' : '채용',
    tags: [chips[(i% (chips.length-1))+1]]
  }))

  const [showFilter, setShowFilter] = useState(false)
  const [activeFilters, setActiveFilters] = useState([])
  const [sortBy, setSortBy] = useState('기본순')

  const [selectedCategory, setSelectedCategory] = useState('전체')

  const filtered = useMemo(()=>{
    let list = items

    // filter by category type if selected
    if(selectedCategory && selectedCategory !== '전체'){
      list = list.filter(it => it.type === selectedCategory)
    }

    if(activeFilters && activeFilters.length>0){
      list = list.filter(it => it.tags.some(t=> activeFilters.includes(t)))
    }

    // apply simple client-side sorting
    if(sortBy === '최신순'){
      list = [...list].sort((a,b)=> b.id - a.id)
    }else if(sortBy === '인기순'){
      // mock popularity by id % 5
      list = [...list].sort((a,b)=> (b.id % 5) - (a.id % 5))
    }

    return list
  },[items, activeFilters, sortBy, selectedCategory])

  function handleApply(selected){
    setActiveFilters(selected)
  }

  return (
    <section className="opportunities">
      <div className="container">
        <div className="op-search">
          <div className="search-row">
            <select className="select-category">
              <option>기회탐색</option>
            </select>
            <input className="search-input" placeholder="당신의 꿈에 한 발짝 더 다가가요." />
          </div>
        </div>

        <div className="op-hero large-hero">
          <div className="op-hero-inner">
            <p className="muted">공모전·대외·채용을 당신의 조건에 맞게 정렬합니다.</p>
            <h2>필요한 사람과 자료까지 연결해 더 빨리, 더 멀리</h2>
          </div>
        </div>

        <div className="category-tabs">
          {categoryTabs.map((t,i)=>(
            <button key={t} className={`tab ${selectedCategory===t? 'active':''}`} onClick={()=>setSelectedCategory(t)}>{t}</button>
          ))}
        </div>

        <div className="chips-row">
          {chips.map((c,i) => <Chip key={i} active={activeFilters.includes(c)} onClick={()=>{
            // toggle basic chips (for demo)
            if(c==='전체') return setActiveFilters([])
            setActiveFilters(prev => prev.includes(c) ? prev.filter(x=>x!==c) : [...prev, c])
          }}>{c}</Chip>)}
        </div>

        <div className="op-controls">
          <button className="filter-btn" onClick={()=>setShowFilter(true)}>세부 필터</button>
          <SortDropdown options={["기본순","최신순","인기순"]} value={sortBy} onChange={setSortBy} />
        </div>

        <div className="op-grid">
          {filtered.map(item=> <PlaceholderCard key={item.id} item={item} />)}
        </div>

        <div className="pagination">
          <button className="page-btn">◀</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">4</button>
          <button className="page-btn">5</button>
          <button className="page-btn">▶</button>
        </div>
      </div>

      <FilterModal open={showFilter} onClose={()=>setShowFilter(false)} onApply={handleApply} initialSelected={activeFilters} />
    </section>
  )
}
