import React from "react";

function DaftarProduk() {
    const Produk = [
        // Untuk menguji empty state, Anda bisa hapus semua objek di sini
        // const Produk = [];

        {
            id: 101,
            nama: "Laptop Ultrabook X1",
            harga: 15500000
        },
        {
            id: 102,
            nama: "Monitor Gaming 27 Inci",
            harga: 4200000
        },
        {
            id: 103,
            nama: "Keyboard Mekanikal Pro",
            harga: 1800000
        },
        {
            id: 104,
            nama: "Mouse Wireless Ergonomis",
            harga: 450000
        },
        {
            id: 105,
            nama: "Hard Drive Eksternal 2TB",
            harga: 900000
        }
    ];
    
    return (
        <div>
            <h2>Daftar Produk</h2>

            {Produk.length > 0 ? (
                <ul>
                    {Produk.map(item => (
                        <li key={item.id}>
                            **{item.nama}** - Rp. {item.harga.toLocaleString('id-ID')}
                        </li>
                    ))}
                </ul>
            ) : (
                <div style={{ 
                    padding: '20px', 
                    border: '1px dashed #ffa000', 
                    backgroundColor: '#fffbe6', 
                    borderRadius: '5px',
                    color: '#e65100'
                }}>
                    <p style={{ fontWeight: 'bold' }}>⚠️ Data Produk Tidak Ditemukan</p>
                    <p>Silakan periksa koneksi data atau tambahkan item baru ke inventaris.</p>
                </div>
            )}
        </div>
    );
}

export default DaftarProduk;