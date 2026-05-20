(function(){
  const IS_CORRECTION = document.body.classList.contains('correction')
  const IS_EXERCICE = document.body.classList.contains('exercice')

  // --- TABLES: click to cycle empty → ✅ → ❌ ---
  document.querySelectorAll('table tbody td:last-child').forEach(td => {
    if (!IS_CORRECTION) {
      td.style.cursor = 'pointer'
      td.style.userSelect = 'none'
      const saved = localStorage.getItem('ex_' + location.pathname + '_' + getRowKey(td))
      if (saved) td.textContent = saved
      td.onclick = function(e){
        e.stopPropagation()
        if (this.textContent === '' || this.textContent === '\u00a0') this.textContent = '\u2705'
        else if (this.textContent === '\u2705') this.textContent = '\u274c'
        else this.textContent = ''
        localStorage.setItem('ex_' + location.pathname + '_' + getRowKey(this), this.textContent)
      }
    }
    if (IS_CORRECTION && td.textContent.trim() === '\u2705') {
      td.style.background = '#065f4622'
      td.style.color = '#34d399'
    }
  })

  function getRowKey(td) {
    const row = td.closest('tr')
    const first = row?.querySelector('td:first-child')
    return first ? (first.textContent || '').trim().replace(/\s+/g,'_') : Math.random()
  }

  // --- CODE BLOCKS: add textarea after <pre> ---
  if (IS_EXERCICE) {
    document.querySelectorAll('pre').forEach(pre => {
      if (pre.querySelector('.no-edit')) return
      const ta = document.createElement('textarea')
      ta.className = 'ex-answer'
      ta.placeholder = 'Écris ta réponse ici...'
      const saved = localStorage.getItem('ex_' + location.pathname + '_code_' + Array.from(document.querySelectorAll('pre')).indexOf(pre))
      if (saved) ta.value = saved
      ta.oninput = function(){
        localStorage.setItem('ex_' + location.pathname + '_code_' + Array.from(document.querySelectorAll('pre')).indexOf(pre), this.value)
      }
      pre.after(ta)
    })
  }

  // --- ADD STYLES ---
  const style = document.createElement('style')
  style.textContent = `
    .ex-answer {
      display:block;width:100%;min-height:80px;
      background:#0d1117;border:1px solid #252d3d;border-radius:8px;
      padding:10px 12px;font-family:'JetBrains Mono',monospace;
      font-size:11px;line-height:1.6;color:#e2e8f0;resize:vertical;
      margin:6px 0 14px;outline:none;transition:border .15s
    }
    .ex-answer:focus{border-color:#34d399}
    .ex-answer::placeholder{color:#5a6577;font-style:italic}
    .btn-bar{display:flex;gap:8px;margin:16px 0;flex-wrap:wrap}
    .btn{font-size:12px;font-weight:600;padding:8px 16px;border-radius:8px;
      text-decoration:none;display:inline-flex;align-items:center;gap:6px;
      transition:.1s;border:none;cursor:pointer;background:#0f1117;
      color:#e2e8f0;border:1px solid #2d3748;-webkit-tap-highlight-color:transparent}
    .btn:active{transform:scale(.96)}
    .btn-green{background:#065f4622;color:#34d399;border-color:#34d39933}
    .btn-yellow{background:#5c4a1a33;color:#fbbf24;border-color:#fbbf2433}
    .btn-red{background:#2d1b1b33;color:#f87171;border-color:#f8717133}
    .btn-blue{background:#1e3a5f22;color:#60a5fa;border-color:#60a5fa33}
    .btn-bar .btn{padding:10px 18px}
    @media(max-width:600px){.btn-bar{gap:6px}.btn{padding:8px 14px;font-size:11px}}
  `
  document.head.appendChild(style)

  // --- BUTTON BAR ---
  const container = document.querySelector('.container')
  if (container) {
    const bar = document.createElement('div')
    bar.className = 'btn-bar'
    bar.style.marginTop = '24px'
    bar.innerHTML = '<a class="btn btn-blue" href="../index.html">← Retour</a>'
    if (IS_EXERCICE) {
      const corrLink = location.pathname.replace('/exercices/', '/exercices/corrections/')
      const corrExists = document.querySelector('[data-correction]')
      bar.innerHTML += `<a class="btn btn-yellow" href="${corrLink}">🔑 Voir la correction</a>`
      bar.innerHTML += `<button class="btn btn-red" onclick="if(confirm('Effacer toutes tes réponses pour cet exercice ?')){const b=location.pathname;Object.keys(localStorage).filter(k=>k.startsWith('ex_'+b)).forEach(k=>localStorage.removeItem(k));location.reload()}">↺ Effacer mes réponses</button>`
    }
    if (IS_CORRECTION) {
      const exLink = location.pathname.replace('/corrections/', '/')
      bar.innerHTML += `<a class="btn btn-green" href="${exLink}">📝 Revenir à l'exercice</a>`
    }
    container.appendChild(bar)
  }
})()
