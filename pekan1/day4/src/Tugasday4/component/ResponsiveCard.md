```jsx
import React from 'react';
import styles from './ResponsiveCard.module.css';

// Komponen ResponsiveCard dengan Media Queries
function ResponsiveCard() {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                📱💻 Responsive Card
            </h3>

            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    🎯 Produk Premium
                </div>

                <div className={styles.cardContent}>
                    <div className={styles.infoItem}>
                        <span className={styles.label}>📦 Produk:</span>
                        <span>Laptop Gaming ROG</span>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.label}>💰 Harga:</span>
                        <span>Rp 25.000.000</span>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.label}>⭐ Rating:</span>
                        <span>4.8/5.0</span>
                    </div>

                    <div className={styles.badge}>
                        🔥 Diskon 20%
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResponsiveCard;
