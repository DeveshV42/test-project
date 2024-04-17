import React from 'react';
import Header from './Header';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

function App() {
  
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around', 
    padding: '100px'
  };

  return (
    <div>
      <Header />
      <div style={containerStyle}>
        <ComponentOne />
        <ComponentTwo />
      </div>
    </div>
  );
}

export default App;
