import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Belajar React', completed: false },
        { id: 2, text: 'Mengerjakan tugas', completed: false },
    ]);
    const [inputValue, setInputValue] = useState('');

    // Fungsi untuk menambah tugas baru
    const addTodo = () => {
        if (inputValue.trim() === '') return;

        const newTodo = {
            id: Date.now(), // ID unik berdasarkan timestamp
            text: inputValue,
            completed: false
        };

        setTodos([...todos, newTodo]); // Menambahkan ke array
        setInputValue(''); // Reset input
    };

    // Fungsi untuk menandai tugas selesai/belum
    const toggleComplete = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
        ));
    };

    // Fungsi untuk menghapus tugas
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // Handle tombol Enter
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    return (
        <div className="todo-container">
            <h2 className="todo-title">📝 Todo List</h2>

            {/* Input untuk menambah tugas */}
            <div className="todo-input-group">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Tambah tugas baru..."
                    className="todo-input"
                />
                <button onClick={addTodo} className="btn-add">
                    ➕ Tambah
                </button>
            </div>

            {/* Daftar tugas */}
            <ul className="todo-list">
                {todos.length === 0 ? (
                    <p className="todo-empty">Tidak ada tugas. Tambahkan tugas baru!</p>
                ) : (
                    todos.map(todo => (
                        <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                            <span
                                className="todo-text"
                                onClick={() => toggleComplete(todo.id)}
                            >
                                {todo.completed ? '✅' : '⬜'} {todo.text}
                            </span>
                            <button
                                onClick={() => deleteTodo(todo.id)}
                                className="btn-delete"
                            >
                                🗑️
                            </button>
                        </li>
                    ))
                )}
            </ul>

            {/* Info jumlah tugas */}
            <div className="todo-info">
                <span>Total: {todos.length} tugas</span>
                <span>Selesai: {todos.filter(t => t.completed).length}</span>
            </div>
        </div>
    );
}

export default TodoList;
