import React from 'react';
import Sapa from './components/Sapa';
import ProductCard from './components/ProductCard';
import Card from './components/Card';
import Comment from './components/Comment';
import './App.css';

function App() {
    const commentdata = {
        date: new Date(),
        text: "Semoga kamu Baik-baik saja",
        author: {
            name: "yanto",
            avatarUrl: "https://img.freepik.com/vektor-gratis/ilustrasi-pria-muda-tersenyum_1308-174669.jpg?semt=ais_hybrid&w=740&q=80"
        }
    }

    return (
        <div style={{ padding: '20px', backgroundColor: '#131517ff', minHeight: '100vh' }}>
            <Sapa name='Andi' message='Bagaimana Kabarmu' />

            <ProductCard
                productName="Sepatu Sneakers"
                price={450000}
                stock={20}
                isAvailable={true}
            />

            <ProductCard
                productName="Tas Ransel"
                price={250000}
                stock={15}
                isAvailable={true}
            />

            <ProductCard
                productName="Jaket Denim"
                price={350000}
                stock={0}
                isAvailable={false}
            />

            <ProductCard
                productName="Topi Baseball"
                price={75000}
            // stock dan isAvailable menggunakan defaultProps
            />
            <Card>
                <h1>ini adalah card 1</h1>
                <p>Ini adalah isi dari card 1</p>
            </Card>
            <Card>
                <h1>ini adalah card 2</h1>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </Card>

            <h1>ini adalah contoh komponen sederhana</h1>
            <Comment
                author={commentdata.author}
                text={commentdata.text}
                date={commentdata.date}
            />

            <Comment
                author={{ name: "lover coding", avatarUrl: "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" }}
                text="Semangat belajar coding ya!"
                date={new Date()}
            />
        </div>
    );
}


export default App;