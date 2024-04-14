import { useEffect, useState } from "react";

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [lastestMessage, setLatestMessage] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      console.log("connected");
      setSocket(socket);
    };

    socket.onmessage = (message) => {
      console.log(message.data);
      setLatestMessage(message.data);
    };
    return () => {
      socket.close();
    };
  }, []);
  if (!socket) {
    return <h1>Connecting to socket</h1>;
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button
        onClick={() => {
          socket.send(message);
        }}
      >
        Send
      </button>
      <div>{lastestMessage}</div>
    </div>
  );
}

export default App;
