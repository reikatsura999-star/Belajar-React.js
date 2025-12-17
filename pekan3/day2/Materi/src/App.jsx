// import React, { useState, useEffect } from 'react';

// // Custom Hook: useFriendStatus
// function useFriendStatus(friendId) {
//   const [isOnline, setIsOnline] = useState(null);

//   useEffect(() => {
//     const checkStatus = () => {
//       // Logika kompleks untuk memeriksa status online
//       // Bisa berupa panggilan API, WebSocket, dll.
//       const status = friendId % 2 === 0 ? true : false; // Contoh sederhana
//       setIsOnline(status);
//     };

//     checkStatus();
//     const intervalId = setInterval(checkStatus, 5000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [friendId]); // Dependensi: friendId

//   return isOnline; // Mengembalikan nilai state
// }

// // Komponen yang menggunakan Custom Hook
// function FriendStatus({ friendId }) {
//   const isOnline = useFriendStatus(friendId); // Menggunakan Custom Hook

//   if (isOnline === null) {
//     return 'Memuat...';
//   }
//   return isOnline ? 'Online' : 'Offline';
// }

// // Komponen lain yang menggunakan Custom Hook yang sama
// function UserStatus() {
//   // Kita bisa menggunakan useFriendStatus dengan ID dummy atau logika lain
//   // untuk menunjukkan penggunaan kembali logika yang sama
//   const isOnline = useFriendStatus(100); // Contoh: ID 0 untuk pengguna sendiri

//   if (isOnline === null) {
//     return 'Memuat status Anda...';
//   }
//   return isOnline ? 'Anda Online' : 'Anda Offline';
// }

// function App() {
//   return (
//     <div>
//       <h2>Contoh dengan Custom Hook</h2>
//       <p>Status Teman 1: <FriendStatus friendId={1} /></p>
//       <p>Status Teman 2: <FriendStatus friendId={2} /></p>
//       <p>Status Anda: <UserStatus /></p>
//     </div>
//   );
// }

// export default App;




//////////////////////////////////////////////////////////////////////////////////




import React, { useState, useEffect } from 'react';

// Custom Hook untuk fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPostId, setCurrentPostId] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Effect dijalankan ulang jika URL berubah

  return { data, loading, error }; // Mengembalikan state
}

// Komponen yang menggunakan Custom Hook useFetch
function PostViewer({ postId }) {
  const { data: post, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  if (loading) return <p>Memuat postingan...</p>;
  if (error) return <p>Terjadi kesalahan: {error.message}</p>;
  if (!post) return <p>Postingan tidak ditemukan.</p>;

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

function App() {
  const [currentPostId, setCurrentPostId] = useState(1);

  return (
    <div>
      <h2>Contoh Hooks Composition (useFetch)</h2>
      <PostViewer postId={currentPostId} />
      <button onClick={() => setCurrentPostId(prevId => prevId + 1)}>
        Lihat Postingan Berikutnya
      </button>
    </div>
  );
}

export default App;