"use strict";
const socket = new WebSocket('ws://localhost:8080');
// DOM Elements
const messageList = document.getElementById('messages');
const sendButton = document.getElementById('send-btn');
const messageInput = document.getElementById('message');
const usernameInput = document.getElementById('username-input');
const modalOverlay = document.getElementById('modal-overlay');
const modalBox = document.getElementById('modal-box');
const closeModalButton = document.getElementById('close-modal');
const username = document.getElementById('username');
// Function to close Modal and set username
function closeModalAndSetUsername() {
    if (usernameInput.value.trim()) {
        modalOverlay.classList.remove('active');
        modalBox.classList.remove('active');
        document.body.classList.remove('modal-active');
        username.textContent = usernameInput.value.trim();
    }
    else
        alert('Enter A Username');
}
// Function to send message
function sendMessage() {
    const username = usernameInput.value.trim();
    const message = messageInput.value.trim();
    if (username && message) {
        const fullMessage = `${username}: ${message}`;
        if (typeof fullMessage !== 'string')
            return;
        socket.send(fullMessage);
    }
    messageInput.value = "";
}
// Modal on Load
window.addEventListener('load', () => {
    modalOverlay.classList.add('active');
    modalBox.classList.add('active');
    document.body.classList.add('modal-active');
});
// Close the modal when the button is clicked or Enter key is pressed
closeModalButton.addEventListener('click', closeModalAndSetUsername);
usernameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        closeModalAndSetUsername();
    }
});
// Send message on button click or on Enter key press
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
    ;
});
// Handle incoming Websocket messages
socket.addEventListener('message', (event) => {
    if (typeof event.data === 'string') {
        const messageItem = document.createElement('li');
        messageItem.textContent = event.data;
        messageList.appendChild(messageItem);
    }
});
