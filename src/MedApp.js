import React from 'react';
import Navigation from './components/Navigation/Navigation'
import './MedApp.module.css';


function MedApp() {
  return (
    <>
      <Navigation />
      <div style={{ marginTop: '100px' }}>body </div>
      <div>footer</div>
    </>
  );
}


export default MedApp;
