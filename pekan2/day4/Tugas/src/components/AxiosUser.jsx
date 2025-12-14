import React, { useState, useEffect } from 'react'
import axios from 'axios'

function AxiosUser () {
  const [data, setData] = useState(null)
  const [userId, setUserId] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    const fetchData = async id => {
      setIsLoading(true)
      setError(null)
      setData(null)

      const url = `https://jsonplaceholder.typicode.com/users/${id}`

      try {
        const response = await axios.get(url)
        console.log('data telah di ambil dari api')

        if (response.status === 404) {
          throw new Error(`Pengguna dengan ID ${id} tidak ditemukan.`)
        }

        setData(response.data)
      } catch (err) {
        if (id > 10) {
          setError('Batas maksimal ID (10) telah tercapai pada API ini.')
        } else {
          setError(
            err?.message || `Terjadi kesalahan saat mengambil data ID ${id}.`
          )
          console.log('❌gagal memuat data')
        }
        console.error('Terjadi kesalahan:', err)
        setData(null)
      } finally {
        setIsLoading(false)
      }
      fetchData()
    }
    return () => {
      abortController.abort()
      console.log('data di batakan')
    }
  })
  useEffect(() => {
    fetchData(userId)
  }, [userId])

  const handleNextUser = () => {
    setUserId(prevId => prevId + 1)
  }

  if (isLoading) return <p>Sedang Memuat Data ID {userId}...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>Detail Pengguna (ID: {userId})</h1>

      <ul>
        {data.map(data =>(
          <li key={data.id}>
            {data.name} - {data.email} - {data.city}
          </li>
        ))}
      </ul>

      <div>
        <button onClick={handleNextUser} disabled={userId >= 10 && error}>
          ID Berikutnya
        </button>
      </div>

    </div>
  )
}

export default AxiosUser
