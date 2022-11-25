import './style.css'
import { connectToServer } from './socket-client'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Websocket - Client</h1>
    <input id="jwt-token" placeholder="Json Web Token" />
    <button id="btn-connect">Connect</button>
    <hr />
    <h2 id="server-status"></h2>
    <ul id="clients-ul"></ul>
    <form id="message-form">
      <input id="message-input" placeholder="message">
    </form>
    <hr />
    <h2>Messages</h2>
    <ul id="messages-ul"></ul>
  </div>
`

const jwtToken = document.querySelector<HTMLInputElement>('#jwt-token')!;
const btnConnect = document.querySelector<HTMLButtonElement>('#btn-connect')!;

btnConnect.addEventListener('click', () => {
  const token = jwtToken.value.trim()
  if (token.length <= 0) return alert('Enter a valid JWT');

  connectToServer(token);
})

