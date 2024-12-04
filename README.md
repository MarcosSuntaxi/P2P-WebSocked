# Simple P2P with WebSocket

This project is a basic implementation of a **Peer-to-Peer (P2P)** system using **WebSocket** in Node.js. The system consists of a discovery server and P2P nodes that connect to each other via the server to exchange real-time messages.

---

## 🚀 Features

- **Discovery Server:** Helps nodes find and connect to each other.
- **Real-time Communication:** Nodes can send and receive messages instantly.
- **Scalability:** Supports multiple nodes.

---

## 🛠️ Requirements

- **Node.js:** [Download here](https://nodejs.org/)
- **npm:** Included with Node.js.

---

## 📂 Project Structure


---

## 📦 Installation

1. Clone this repository or create a new project:
   ```bash
   git clone <repo-url>
   cd p2p-simple

2. Initialize the Node.js project (if not already done):

npm init -y

3. Install the WebSocket library:

npm install ws

🚀 Running the Project
Step 1: Start the Discovery Server
Run the discoveryServer.js file:

    node discoveryServer.js

The server will be listening on ws://localhost:8080.

Step 2: Start the P2P Nodes
Open multiple terminals and run the peer.js file in each one:

    node peer.js

Each node will automatically connect to the discovery server.

Step 3: Send Messages
Type a message in one of the node terminals.
The message will be broadcast to all other connected nodes.
Example:

Node 1 sends: Hello Node 2
Node 2 receives: Message received: Hello Node 2



Here's the README.md file in English for your project:

markdown
Copiar código
# Simple P2P with WebSocket

This project is a basic implementation of a **Peer-to-Peer (P2P)** system using **WebSocket** in Node.js. The system consists of a discovery server and P2P nodes that connect to each other via the server to exchange real-time messages.

---

## 🚀 Features

- **Discovery Server:** Helps nodes find and connect to each other.
- **Real-time Communication:** Nodes can send and receive messages instantly.
- **Scalability:** Supports multiple nodes.

---

## 🛠️ Requirements

- **Node.js:** [Download here](https://nodejs.org/)
- **npm:** Included with Node.js.

---

## 📂 Project Structure

p2p-simple/ │ ├── discoveryServer.js # Discovery server ├── peer.js # P2P node ├── README.md # Documentation └── package.json # Project configuration

yaml
Copiar código

---

## 📦 Installation

1. Clone this repository or create a new project:
   ```bash
   git clone <repo-url>
   cd p2p-simple
Initialize the Node.js project (if not already done):

bash
Copiar código
npm init -y
Install the WebSocket library:

bash
Copiar código
npm install ws
🚀 Running the Project
Step 1: Start the Discovery Server
Run the discoveryServer.js file:

bash
Copiar código
node discoveryServer.js
The server will be listening on ws://localhost:8080.

Step 2: Start the P2P Nodes
Open multiple terminals and run the peer.js file in each one:

bash
Copiar código
node peer.js
Each node will automatically connect to the discovery server.

Step 3: Send Messages
Type a message in one of the node terminals.
The message will be broadcast to all other connected nodes.
Example:

Node 1 sends: Hello Node 2
Node 2 receives: Message received: Hello Node 2
🧩 How It Works
Discovery Server:

Listens for node connections.
Maintains a list of connected nodes.
Broadcasts messages to all nodes except the sender.
P2P Node:

Connects to the discovery server.
Sends and receives messages in real-time.


Here's the README.md file in English for your project:

markdown
Copiar código
# Simple P2P with WebSocket

This project is a basic implementation of a **Peer-to-Peer (P2P)** system using **WebSocket** in Node.js. The system consists of a discovery server and P2P nodes that connect to each other via the server to exchange real-time messages.

---

## 🚀 Features

- **Discovery Server:** Helps nodes find and connect to each other.
- **Real-time Communication:** Nodes can send and receive messages instantly.
- **Scalability:** Supports multiple nodes.

---

## 🛠️ Requirements

- **Node.js:** [Download here](https://nodejs.org/)
- **npm:** Included with Node.js.

---

## 📂 Project Structure

P2P-WEBSOCKET/ │ ├── .gitignore # Files to ignore in Git ├── discoveryServer.js # Discovery server ├── peer.js # P2P node ├── package-lock.json # Lockfile for dependencies ├── package.json # Project configuration ├── README.md # Documentation └── node_modules/ # Installed dependencies (ignored by Git)

---

## 📦 Installation

1. Clone this repository or create a new project:
   ```bash
   git clone <repo-url>
   cd p2p-simple
Initialize the Node.js project (if not already done):

bash
Copiar código
    npm init -y
Install the WebSocket library:

bash
Copiar código
    npm install ws


## 🚀 Running the Project
Step 1: Start the Discovery Server
Run the discoveryServer.js file:

bash
Copiar código
node discoveryServer.js
The server will be listening on ws://localhost:8080.

Step 2: Start the P2P Nodes
Open multiple terminals and run the peer.js file in each one:

bash
Copiar código
node peer.js
Each node will automatically connect to the discovery server.

Step 3: Send Messages
Type a message in one of the node terminals.
The message will be broadcast to all other connected nodes.
Example:
        ```bash
        Node 1 sends: Hello Node 2
    
        Node 2 receives: Message received: Hello Node 2
🧩 How It Works
Discovery Server:
    Listens for node connections.
    Maintains a list of connected nodes.
    Broadcasts messages to all nodes except the sender.
P2P Node:
    Connects to the discovery server.
    Sends and receives messages in real-time.

📚 Technologies Used
    Node.js: JavaScript runtime environment.
    WebSocket: Protocol for real-time bidirectional communication.