import React, { useState, useRef, useEffect } from 'react'

export default function SortDropdown({options = [], value, onChange, badgeLabel}){
  const [open, setOpen] = useState(false)
  const rootRef = useRef()

  useEffect(()=>{
    function onDoc(e){
      if(!rootRef.current) return
      if(!rootRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return ()=> document.removeEventListener('click', onDoc)
  },[])

  return (
    <div className="sort-dropdown" ref={rootRef}>
      <button className="sort-btn" onClick={()=>setOpen(s=>!s)}>
        {value || options[0]} <span className="caret">▾</span>
      </button>

      {open && (
        <div className="sort-panel">
          {options.map(opt => (
            <div key={opt} className={`sort-option ${opt===value? 'active':''}`} onClick={()=>{onChange(opt); setOpen(false)}}>
              {opt}
              {opt===value && badgeLabel && (
                <span className="sort-badge">{badgeLabel}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
