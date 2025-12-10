```jsx
import React from 'react';
import styles from './Button.module.css'; // Import CSS Modules

// Komponen Button menggunakan CSS Modules
function Button() {
    return (
        <div className={styles.buttonContainer}>
            <h3
                style={{
                    width: '100%',
                    textAlign: 'center',
                    color: '#2c3e50',
                    marginBottom: '5px',
                    fontSize: '12px'
                }}
            >
                🎨 CSS Modules
            </h3>

            {/* Button Default */}
            <button className={`${styles.button} ${styles.default}`}>
                📄 Default Button
            </button>

            {/* Button Primary */}
            <button className={`${styles.button} ${styles.primary}`}>
                ⭐ Primary Button
            </button>

            {/* Button Success */}
            <button className={`${styles.button} ${styles.success}`}>
                ✅ Success Button
            </button>

            {/* Button Danger */}
            <button className={`${styles.button} ${styles.danger}`}>
                ❌ Danger Button
            </button>
        </div>
    );
}

export default Button;
