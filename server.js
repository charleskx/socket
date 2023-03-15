const io = require('socket.io')(process.env.PORT)

io.on('connection', (socket) => {
  console.log('New user connected!')

  socket.on('version', (data) => {
    console.log(`New version ${data}`)

    socket.emit('version-update', data)
  })

  socket.on('disconnect', () => {
    console.log('User disconnected!')
  })
})