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
            fontSize: '10px'
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
            info: {
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

    // Style untuk title
    const titleStyle = {
        fontSize: '11px',
        fontWeight: 'bold',
        marginBottom: '4px',
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
    };

    // Style untuk message
    const messageStyle = {
        fontSize: '10px',
        lineHeight: '1.3',
        marginLeft: '18px'
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

// Komponen wrapper untuk menampilkan semua variasi AlertBox
function AlertBoxDemo() {
    return (
        <div style={{ padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
            <h3 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '8px', fontSize: '12px' }}>
                🔔 Dynamic Styling
            </h3>

            <AlertBox
                type="success"
                title="Berhasil!"
                message="Data berhasil disimpan."
            />

            <AlertBox
                type="warning"
                title="Peringatan!"
                message="3 tugas belum diselesaikan."
            />

            <AlertBox
                type="error"
                title="Error!"
                message="Terjadi kesalahan."
            />
        </div>
    );
}

export default AlertBoxDemo;
export { AlertBox };
