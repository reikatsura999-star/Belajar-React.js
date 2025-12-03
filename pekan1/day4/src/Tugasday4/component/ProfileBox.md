import React from 'react';

// Komponen ProfileBox menggunakan Inline Styles
function ProfileBox() {
    // Style object untuk header
    const headerStyle = {
        backgroundColor: '#3498db',
        color: '#ffffff',
        padding: '8px',
        borderRadius: '6px 6px 0 0',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: 'bold'
    };

    // Style object untuk content
    const contentStyle = {
        backgroundColor: '#ecf0f1',
        color: '#2c3e50',
        padding: '10px',
        border: '2px solid #3498db',
        borderTop: 'none',
        borderRadius: '0 0 6px 6px',
        fontSize: '11px',
        lineHeight: '1.4'
    };

    // Style untuk info item
    const infoItemStyle = {
        backgroundColor: '#ffffff',
        padding: '5px 8px',
        marginBottom: '4px',
        borderRadius: '3px',
        borderLeft: '3px solid #e74c3c'
    };

    // Style untuk label
    const labelStyle = {
        fontWeight: 'bold',
        color: '#e74c3c',
        marginRight: '5px'
    };

    return (
        <div>
            {/* Header dengan style pertama */}
            <div style={headerStyle}>
                👤 Profile Pengguna
            </div>

            {/* Content dengan style kedua */}
            <div style={contentStyle}>
                <div style={infoItemStyle}>
                    <span style={labelStyle}>Nama:</span>
                    <span>Budi Santoso</span>
                </div>

                <div style={infoItemStyle}>
                    <span style={labelStyle}>Email:</span>
                    <span>budi.santoso@email.com</span>
                </div>

                <div style={infoItemStyle}>
                    <span style={labelStyle}>Pekerjaan:</span>
                    <span>Full Stack Developer</span>
                </div>

                <div style={infoItemStyle}>
                    <span style={labelStyle}>Lokasi:</span>
                    <span>Jakarta, Indonesia</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileBox;
