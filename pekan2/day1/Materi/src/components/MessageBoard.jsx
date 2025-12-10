import { useState } from "react";

function MessageBoard() {
  // State untuk daftar pesan dan input
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Event handler untuk input
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Event handler untuk submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return; // validasi sederhana
    setMessages([...messages, input]); // tambah pesan ke list
    localStorage.setItem("messages", JSON.stringify([...messages,input])); // simpan ke localStorage   
    
    setInput(""); // reset input
  };

  return (
    <div className="board-container">
      <h2>📬 Message Board</h2>

      {/* Form untuk menambah pesan */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Tulis pesan..."
        />
        <button type="submit">Tambah</button>
      </form>

      {/* Conditional Rendering & List Rendering */}
      {messages.length === 0 ? (
        <p>Belum ada pesan. Yuk tambahkan!</p>
      ) : (
        <ul>
          {messages.map((msg, index) => (
            <li key={index} className="message-item">{msg}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MessageBoard;
