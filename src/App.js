import React from 'react';
import './App.css'; 
import Header from './Header';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <ComponentOne className="component" />
        <ComponentTwo className="component" />
      </div>
    </div>
  );
}

export default App;
