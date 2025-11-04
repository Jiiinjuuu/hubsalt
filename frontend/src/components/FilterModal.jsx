import React, { useState, useEffect, useRef } from 'react'

export default function FilterModal({open, onClose, onApply, initialSelected=[]}){
  const allFilters = ['세부필터1','세부필터2','세부필터3','세부필터4','세부필터5','세부필터6','세부필터7','세부필터8','세부필터9','세부필터10']
  const [selected, setSelected] = useState(initialSelected)
  const modalRef = useRef(null)

  useEffect(()=>{
    if(open){
      setSelected(initialSelected)
      // focus the modal for keyboard handling
      setTimeout(()=>{
        modalRef.current?.focus()
      }, 0)
    }
  },[open, initialSelected])

  useEffect(()=>{
    function onKey(e){
      if(e.key === 'Escape') onClose()
    }
    if(open) document.addEventListener('keydown', onKey)
    return ()=> document.removeEventListener('keydown', onKey)
  },[open,onClose])

  function toggle(f){
    setSelected(prev => prev.includes(f) ? prev.filter(x=>x!==f) : [...prev, f])
  }

  function reset(){
    setSelected([])
  }

  function apply(){
    onApply(selected)
    onClose()
  }

  if(!open) return null

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <div className="filter-modal" ref={modalRef} tabIndex={-1} onMouseDown={e=>e.stopPropagation()} role="dialog" aria-modal="true" aria-label="세부 필터">
        <div className="modal-header">
          <h3>세부 필터</h3>
          <div className="select-row">
            <label className="sr-only">조건 선택</label>
            <select>
              <option>전체</option>
            </select>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="닫기">✕</button>
        </div>

        <div className="modal-body">
          <div className="filter-chips">
            {allFilters.map(f => (
              <button key={f} type="button" className={`chip ${selected.includes(f)?'selected':''}`} onClick={()=>toggle(f)} aria-pressed={selected.includes(f)}>{f}</button>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-outline" onClick={reset}>초기화</button>
          <button className="btn-apply" onClick={apply}>적용</button>
        </div>
      </div>
    </div>
  )
}
