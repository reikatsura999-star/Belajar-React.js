import React from 'react';
import ProfileBox from './components/ProfileBox';
import Card from './components/Card';
import Button from './components/Button';
import AlertBoxDemo from './components/AlertBox';
import ResponsiveCard from './components/ResponsiveCard';
import './App.css';

function App() {
  return (
    <div style={{
      padding: '15px',
      backgroundColor: '#ecf0f1',
      minHeight: '100vh'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#2c3e50',
        fontSize: '18px',
        marginBottom: '15px'
      }}>
        🎨\ Demonstrasi Styling React Components
      </h1>

      {/* Grid Layout untuk semua komponen */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '15px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* 1. ProfileBox - Inline Styles */}
        <div>
          <h2 style={{
            fontSize: '12px',
            color: '#34495e',
            marginBottom: '8px',
            padding: '6px',
            backgroundColor: '#fff',
            borderRadius: '4px',
            textAlign: 'center'
          }}>
            1️⃣ Inline Styles
          </h2>
          <ProfileBox />
        </div>

        {/* 2. Card - CSS Classes */}
        <div>
          <h2 style={{
            fontSize: '12px',
            color: '#34495e',
            marginBottom: '8px',
            padding: '6px',
            backgroundColor: '#fff',
            borderRadius: '4px',
            textAlign: 'center'
          }}>
            2️⃣ CSS Classes
          </h2>
          <Card />
        </div>

        {/* 3. Button - CSS Modules */}
        <div>
          <h2 style={{
            fontSize: '12px',
            color: '#34495e',
            marginBottom: '8px',
            padding: '6px',
            backgroundColor: '#fff',
            borderRadius: '4px',
            textAlign: 'center'
          }}>
            3️⃣ CSS Modules
          </h2>
          <Button />
        </div>

        {/* 4. AlertBox - Dynamic Styling */}
        <div>
          <h2 style={{
            fontSize: '12px',
            color: '#34495e',
            marginBottom: '8px',
            padding: '6px',
            backgroundColor: '#fff',
            borderRadius: '4px',
            textAlign: 'center'
          }}>
            4️⃣ Dynamic Styling
          </h2>
          <AlertBoxDemo />
        </div>

        {/* 5. ResponsiveCard - Responsive Design */}
        <div style={{ gridColumn: 'span 2' }}>
          <h2 style={{
            fontSize: '12px',
            color: '#34495e',
            marginBottom: '8px',
            padding: '6px',
            backgroundColor: '#fff',
            borderRadius: '4px',
            textAlign: 'center'
          }}>
            5️⃣ Responsive Design
          </h2>
          <ResponsiveCard />
        </div>
      </div>
    </div>
  );
}

export default App;
