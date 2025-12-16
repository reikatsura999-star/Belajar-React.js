import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const ThemedParagraph = () => {
    const { theme } = useContext(ThemeContext);

    const style = {
        color: theme === 'light' ? '#333' : '#eee',
        backgroundColor: theme === 'light' ? '#fff' : '#444',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px'
    };

    return (
        <p style={style}>
            Ini adalah paragraf dengan tema {theme}. Coba ganti tema dengan tombol di atas!
        </p>
    );
};

export default ThemedParagraph;
