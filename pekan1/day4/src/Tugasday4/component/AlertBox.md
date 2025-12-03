```jsx
import React from 'react';

// Komponen AlertBox dengan Dynamic Styling berdasarkan props
function AlertBox({ type = 'info', message, title }) {
    
    // Fungsi untuk mendapatkan style berdasarkan type
    const getAlertStyle = (alertType) => {
        const baseStyle = {
            padding: '8px',
            borderRadius: '4px',
            marginBottom: '6px',
            border: '2px solid',
            fontSize: '10px' // Ukuran font dasar
        };

        const typeStyles = {
            success: {
                backgroundColor: '#d4edda',
                borderColor: '#28a745',
                color: '#155724'
            },
            warning: {
                backgroundColor: '#fff3cd',
                borderColor: '#ffc107',
                color: '#856404'
            },
            error: {
                backgroundColor: '#f8d7da',
                borderColor: '#dc3545',
                color: '#721c24'
            },
            info: { // Default type
                backgroundColor: '#d1ecf1',
                borderColor: '#17a2b8',
                color: '#0c5460'
            }
        };

        return { ...baseStyle, ...typeStyles[alertType] };
    };

    // Fungsi untuk mendapatkan icon berdasarkan type
    const getIcon = (alertType) => {
        const icons = {
            success: '✅',
            warning: '⚠️',
            error: '❌',
            info: 'ℹ️'
        };
        return icons[alertType] || icons.info;
    };

    // Style untuk title (judul)
    const titleStyle = {
        fontSize: '11px',
        fontWeight: 'bold',
        marginBottom: '4px',
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
    };

    // Style untuk message (pesan)
    const messageStyle = {
        fontSize: '10px',
        lineHeight: '1.3',
        marginLeft: '18px' // Indentasi agar sejajar dengan teks judul
    };

    return (
        <div style={getAlertStyle(type)}>
            <div style={titleStyle}>
                <span style={{ fontSize: '14px' }}>{getIcon(type)}</span>
                <span>{title}</span>
            </div>
            <div style={messageStyle}>
                {message}
            </div>
        </div>
    );
}

// export { AlertBox }; // Tambahkan ini jika ingin mengekspor komponen ini saja
