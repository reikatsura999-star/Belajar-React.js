import React, { useState } from "react"; 

function LinkPreventer() {
    // Definisikan state untuk menyimpan nilai input
    const [inputValue, setInputValue] = useState("");

    const HandleMove = (event) => {
        // Mencegah link membuka halaman baru
        event.preventDefault();
        console.log("Link berbahaya telah dihentikan.");
        alert("Link dicegah untuk membuka halaman baru");
    }

    const HandleInputChange = (event) => {
        const value = event.target.value;
        // Simpan nilai input ke dalam state
        setInputValue(value);
        
        console.log("Pengguna sedang mengetik:", value);
    }

    return (
        // Gunakan casing "camelCase" untuk style (boxShadow)
        <div>
            
            <hr />
            
            {/* 1. Link Pencegahan */}
            <div>
                <h3>Pengujian Link:</h3>
                <a href="https://www.youtube.com" onClick={HandleMove} style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
                    Klik di sini ya guys! (Dicegah)
                </a>
            </div>
            
            <hr />

            {/* 2. Input Teks */}
            <div>
                <h2>Input Teks</h2>
                <input 
                    type="text" 
                    onChange={HandleInputChange} 
                    // Input terkontrol (value terikat pada state)
                    value={inputValue} 
                    placeholder="Ketik di sini..."
                />
            </div>
            
            {/* 3. Tampilkan Hasil Input */}
            <div>
                <h3>Hasil Ketikan:</h3>
                {/* Tampilkan state inputValue secara langsung tanpa tag <p> kosong yang tidak perlu */}
                <div>
                    <strong>{inputValue || "Belum ada teks..."}</strong>
                </div>
            </div>
        </div>
    )
}

export default LinkPreventer;