import React from 'react';
import ProfileBox from './components/ProfileBox';
import Card from './components/Card';
import Button from './components/Button';
import AlertBoxDemo from './components/AlertBox';
import ResponsiveCard from './components/ResponsiveCard';

function App() {
  return (
    <div>
      <h1>Demonstrasi Styling React Components</h1>

      <div>
        <h2>Inline Styles</h2>
        <ProfileBox />
      </div>

      <div>
        <h2>CSS Classes</h2>
        <Card />
      </div>

      <div>
        <h2>CSS Modules</h2>
        <Button />
      </div>

      <div>
        <h2>Dynamic Styling</h2>
        <AlertBoxDemo />
      </div>

      <div>
        <h2>Responsive Design</h2>
        <ResponsiveCard />
      </div>
    </div>
  );
}

export default App;
