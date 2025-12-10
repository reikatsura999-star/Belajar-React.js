import React from 'react';

function Button({ onClick, text, color }) {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color, color: 'white', padding: '10px', border: 'none', borderRadius: '5px', margin: '5px' }}
        >
            {text}
        </button>
    );
}

export default Button;