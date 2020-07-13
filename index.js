module.exports = { _root: '/chat', _socket: true, _cors: true, _parser: [], ready, static: '/' }

const knex = require('knex')
const db = knex({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'guest',
    database: 'trichat'
  }
})

/**
 * @param {import('socket.io').Server} socket
 */
function ready (_, socket) {
  socket.on('connect', (s) => {
    s.on('chat:init', () => {
      db.select('registed')
        .where({ ip: s.handshake.address })
        .from('ipTable')
        .then(([data]) => {
          if (!data) return s.emit('chat:inited', false)
          else s.emit('chat:inited', data.registed)
        })
    })

    s.on('chat:regist', (id) => {
      db.insert({ ip: s.handshake.address, registed: id })
        .from('ipTable')
        .then(() => {
          s.emit('chat:registed')
        })
    })

    s.on('chat:send', (msg) => {
      socket.emit('chat:resv', msg)
    })
  })
}
