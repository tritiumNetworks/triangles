let scrollBlur = 0

window.addEventListener('wheel', (ev) => {
  if (ev.deltaY > 0) { if (scrollBlur < 180) scrollBlur += 5 } else { if (scrollBlur > 0) scrollBlur -= 5 }

  document.getElementsByClassName('intro')[0].style.filter = 'blur(' + scrollBlur + 'px)'

  if (scrollBlur > 5) {
    scrollBlur = 0
    window.location.replace('/tr/chat')
  }
})
