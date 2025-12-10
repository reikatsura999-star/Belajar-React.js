import React from 'react'
import Counter from './components/Counter'
import UserProfile from './components/UserProfile'
import ContactForm from './components/ContactForm'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title"> Day 5 - React State</h1>

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
