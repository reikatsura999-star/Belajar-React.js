import React from 'react'
import Counter from '../Tugasday5/Counter'
import UserProfile from '../Tugasday5/UserProfile'
import ContactForm from '../Tugasday5/ContactForm'
import TodoList from '../Tugasday5/TodoList'

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">⚛️ Day 5 - React State</h1>

      <div className="app-layout">
        <Counter />
        <UserProfile />
        <TodoList />
        <ContactForm />
      </div>
    </div>
  )
}

export default App
