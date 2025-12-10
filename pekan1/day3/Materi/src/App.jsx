// App.jsx
import React from 'react';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';
import ProductCard from './components/ProductCard';
import Button from './components/Button';
import GreetingCard from './components/GreetingCard';
import Card from './components/Card';
import Comment from './components/Comment';
function App() {
  const handleClick = () => {
    alert('Tombol diklik!');
  }

  const commentData = {
    date: new Date(),
    text: 'Saya harap Anda menikmati belajar React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://via.placeholder.com/50/FF0000/FFFFFF?text=HK',
    },
  };

  return (
    <div>

      <Greeting />
      <p>Ini adalah aplikasi React pertama saya.</p>

      <Welcome name="Ikhya" />


      <card>
        <ProductCard
          productName="Laptop Acer"
          price={2000000}
          stock={10}
          isAvailable={true}
        />
      </card>


      <Button onClick={handleClick} text="Klik Saya" color="blue" />
      <Button onClick={() => console.log('Tombol kedua diklik')} text="Tombol Lain" color="green"
      />


      <card>
        <GreetingCard name="Siti" message="Selamat Pagi" />
        <GreetingCard name="Budi" />
        <GreetingCard name="andi" message="selamat malam" />
      </card>

      <card>
        <h1>Contoh Komposisi Komponen</h1>
      <Comment
        author={commentData.author}
        text={commentData.text}
        date={commentData.date}
      />
      <Comment
        author={{ name: 'React Lover', avatarUrl: 'https://via.placeholder.com/50/0000FF/FFFFFF?text=RL' }}
        text="React membuat pengembangan UI menjadi menyenangkan!"
        date={new Date()}
      />
      </card>
    </div>
  );
}

export default App;