const socket = io('https://3000-lucas5g-nextjsestudos-dfwnzbc3erz.ws-us38.gitpod.io');

const urlSearch = new URLSearchParams(window.location.search)

const username = urlSearch.get('username')
const room = urlSearch.get('select_room')

const usernameDiv = document.getElementById('username')
usernameDiv.innerHTML = `Olá ${username} - Você está na sala ${room}`


socket.emit('select_room', {
  username,
  room
}, messages => {
  console.log('mostre algopo')
  console.log({messages})
  messages.forEach(message => createMessage(message))
})

document.getElementById('message_input').addEventListener('keypress', event => {
  if(event.key ===  'Enter'){
    const message = event.target.value 

    socket.emit('message', {room, message, username})
    event.target.value = ''
  }
})

socket.on('message', data => {
  createMessage(data)

})


function createMessage({ username, room, message, createdAt }){
  const messageDiv = document.getElementById('messages')

  messageDiv.innerHTML += `
  <div class="new_message">
    <label>
      <strong> ${username} </strong>
      <span> ${message} - ${createdAt} </span>
    </label>
  </div> 
  
  `
  console.log({username})
}