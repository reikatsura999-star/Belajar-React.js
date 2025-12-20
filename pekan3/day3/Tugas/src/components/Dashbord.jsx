import React, { useState, useCallback } from 'react'
import MemoActionButton from './MemoActionButton'

function Dashboard () {
  const [score, setScore] = useState(0)
  const [extra, setExtra] = useState(0)

  // Callback dengan nama baru: increaseScore
  const increaseScore = useCallback(() => {
    console.log('increaseScore dipanggil, score =', score)
    setScore(score + 1)
  }, [score])

  return (
    <div>
      <h2>Dashboard Component</h2>
      <p>Score: {score}</p>
      <p>Extra: {extra}</p>

      <button onClick={() => setExtra(extra + 1)}>Tambah Extra</button>

      {/* MemoActionButton menerima callback */}
      <MemoActionButton onExecute={increaseScore} />
    </div>
  )
}

export default Dashboard
