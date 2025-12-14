import { useEffect, useState } from 'react'

const NewsComponent = () => {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const API_Key = 'a50b6a6c7fa94d408770747d76461e88'
      const URL = `https://newsapi.org/v2/everything?q=tesla&from=2025-11-13&sortBy=publishedAt&language=id&apiKey=${API_Key}`

      try {
        const response = await fetch(URL)

        if (!response.ok) {
          throw new Error(`Gagal mengambil data berita: ${response.status}`)
        }

        const data = await response.json()
        console.log("Data dari API:", data) 

        if (data.status !== 'ok') {
          throw new Error(`API Status Error: ${data.message}`)
        }

        setArticles(data.articles)
        setIsLoading(false)
        console.log("Jumlah artikel:", data.articles.length) 
        
      } catch (err) {
        setError(err.message)
        setIsLoading(false)
        console.error("Terjadi error:", err) 
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <div>Memuat berita terbaru...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h1>Berita Utama Hari Ini</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.url} target='_blank' rel='noopener noreferrer'>
              {article.title}
            </a>
            <p>Sumber: {article.source.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewsComponent
