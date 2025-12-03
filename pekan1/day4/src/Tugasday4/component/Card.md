import React from 'react';
import './Card.css'; // Import file CSS

// Komponen Card menggunakan CSS Classes dan className
function Card() {
    return (
        <div className="card-container">
            <div className="card-header">
                🎓 Informasi Kursus
            </div>

            <div className="card-body">
                <p className="card-text">
                    <strong>Nama Kursus:</strong> React.js Fundamental
                </p>
                <p className="card-text">
                    <strong>Instruktur:</strong> Prof. Ahmad Wijaya
                </p>
                <p className="card-text">
                    <strong>Durasi:</strong> 8 Minggu
                </p>
                <p className="card-text">
                    <strong>Level:</strong> Intermediate
                </p>

                <span className="card-badge">⭐ Best Seller</span>
            </div>

            <div className="card-footer">
                "Belajar React.js dengan mudah dan menyenangkan!"
            </div>
        </div>
    );
}

export default Card;
