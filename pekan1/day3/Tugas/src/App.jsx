import React from 'react';
import Sapa from './components/Sapa';
import ProductCard from './components/ProductCard';
import Card from './components/Card';
import Comment from './components/Comment';

function App() {
  const commentData = {
    date: new Date(),
    text: "Semoga kamu Baik-baik saja",
    author: {
      name: "Yanto",
      avatarUrl: "https://img.freepik.com/vektor-gratis/ilustrasi-pria-muda-tersenyum_1308-174669.jpg?semt=ais_hybrid&w=740&q=80"
    }
  };

  return (
    <div>
      {/* Komponen sapaan */}
      <Sapa name="Andi" message="Bagaimana Kabarmu" />

      {/* Komponen produk */}
      <ProductCard productName="Sepatu Sneakers" price={450000} stock={20} isAvailable />
      <ProductCard productName="Tas Ransel" price={250000} stock={15} isAvailable />
      <ProductCard productName="Jaket Denim" price={350000} stock={0} isAvailable={false} />
      <ProductCard productName="Topi Baseball" price={75000} /> {/* defaultProps dipakai */}

      {/* Komponen card */}
      <Card>
        <h2>Card 1</h2>
        <p>Ini adalah isi dari card 1</p>
      </Card>
      <Card>
        <h2>Card 2</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Card>

      {/* Komponen komentar */}
      <h2>Contoh Komponen Sederhana</h2>
      <Comment author={commentData.author} text={commentData.text} date={commentData.date} />
      <Comment
        author={{
          name: "Lover Coding",
          avatarUrl: "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
        }}
        text="Semangat belajar coding ya!"
        date={new Date()}
      />
    </div>
  );
}

export default App;
