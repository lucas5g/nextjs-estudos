import { io } from './http.mjs'

const users = []
const messages = []
io.on('connection', socket => {
  // console.log(socket.id)
  socket.on('select_room', ({ room, username }, callback) => {

    socket.join(room)

    const userInRoom = users.find(
      user => user.username === username && user.room === room
    )
    // console.log(users)
    if (userInRoom) {
      userInRoom.socket_id = socket.id
    }else{
      users.push({
        room,
        username,
        socket_id: socket.id
      })
    }

    const messagesRoom = getMessagesRoom(room)
    console.log({messagesRoom})
    callback(messagesRoom)

  })


  socket.on('message', ({ message, room, username }) => {
    const newMessage = {
      room,
      username,
      message,
      createdAt: new Date()
    }

    messages.push(newMessage)

    io.to(room).emit('message', newMessage)
  })
})

function getMessagesRoom(room){
  const messagesRoom = messages.filter(message => message.room === room)
  return messagesRoom
}
// console.log('test')