/* global io */
const socket = io()
window.onload = () => {
  const chat = document.getElementById('chat')
  const insts = document.getElementById('insts')
  const render = document.getElementById('render')
  socket.emit('chat:init')
  socket.once('chat:inited', (r) => {
    if (!r) {
      chat.placeholder = '이곳을 눌러 사용할 닉네임을 적어주세요'
      chat.addEventListener('keypress', (e) => {
        if (e.charCode !== 13) return
        regist(chat.value)
        chat.value = ''
      })
    } else {
      chat.placeholder = '이곳을 눌러 ' + r + '로 채팅하기'
      chat.addEventListener('keypress', (e) => {
        if (e.charCode !== 13) return
        socket.emit('chat:send', chat.value)
        chat.value = ''
      })
      socket.on('chat:resv', (r) => { render.innerHTML += r })
    }

    insts.style.display = 'block'
    setTimeout(() => {
      insts.style.opacity = '1'
    }, 100)
  })
}

function regist (id) {
  socket.emit('chat:regist', id)
  socket.once('chat:registed', () => {
    window.location.reload()
  })
}
