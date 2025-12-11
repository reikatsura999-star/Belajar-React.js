import React, { useState } from 'react';
import WindowSizeTracker from './components/WindowSizeTracker';
import MultiEffectComponent from './components/MultiEffectComponent';


function App() {
  const [showTracker, setShowTracker] = useState(true);
  
  return (
  <div>
    <h1>Materi React useEffect</h1>
    <MultiEffectComponent />
    
    </div>
  )
}

export default App;