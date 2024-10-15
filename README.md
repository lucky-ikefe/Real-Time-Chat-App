# Real-time Chat App

## Overview

The Real-time Chat App is a simple web application that allows users to connect and communicate with each other in real-time. It utilizes WebSocket technology to establish a persistent connection between the client and server, enabling instant messaging.

## Features

- **User Authentication**: Prompts for a username upon loading the application.
- **Real-time Messaging**: Send and receive messages instantly between connected clients.
- **Modal Interface**: A user-friendly modal dialog for entering a username.
- **Responsive Design**: A clean and responsive layout that works across devices.

## Technologies Used

- **HTML5**: Structure and layout of the application.
- **CSS**: Basic styling for the application.
- **TypeScript**: Provides type safety and modern JavaScript features.
- **WebSocket**: For real-time communication between clients and the server.
- **Node.js**: Backend server environment for handling WebSocket connections.

## Installation

### Prerequisites

- Node.js installed on your machine.
- A modern web browser.

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
2. Install the required packages for the server:
    ```bash
    npm install ws
3. Start the WebSocket server:
    ```bash
    node server.js
4. Open the index.html file in your web browser to access the chat application.


## Usage
1. Open multiple Tabs for different users
2. Upon loading the application, a modal will prompt you to enter your username.
3. Type your username and click the "Enter" button or press the Enter key.
4. Start typing your messages in the input field and send them by clicking the "Send" button or pressing the Enter key.
5. All messages will be displayed in the chat window.


## Contributing
Feel free to submit issues or pull requests. Your contributions are welcome!