import React, { useState, useEffect } from 'react'

function UserProfile ({ userId }) {
  const [user, setUser] = useState(null)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      console.log(`Sedang melakukan fethcing data dari User dgn id :${userId}`)

      fetch('https://mocki.io/v1/315278a8-9f67-47f9-8755-6339341fd2fb')
        .then(res => res.json())
        .then(data => {
          setUser(data.find(user => user.id === userId))
          setLoading(false)
        })
        .catch(err => {
          console.error('Error fetching user data:', err)
          setLoading(false)
        })
    }, 3000)
    return () => clearTimeout(timer)
  }, [userId])

  if (loading)
    return (
      <p>
        Sedang Memuat Data ... <br />
        Mohon Di Tunggu
      </p>
    )
  if (!user) return <p>Pengguna Tidak Di Temukan</p>

  return (
    <div>
      <h2>Profile Pengguna</h2>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}
export default UserProfile

/*
Catatan React: useState & useEffect
----------------------------------
- useState: dipakai untuk menyimpan data yang bisa berubah (state).
- useEffect: dipakai untuk menjalankan efek samping (fetch data, pasang event listener, timer).
- Dependency array:
  []  → efek hanya sekali saat komponen pertama kali muncul.
  [variabel] → efek dijalankan ulang setiap kali variabel berubah.
- Cleanup function: return di dalam useEffect untuk bersih-bersih (hapus interval, listener, dll).
*/