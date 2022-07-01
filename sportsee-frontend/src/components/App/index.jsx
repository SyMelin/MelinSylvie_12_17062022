import React from 'react';
import Header from '../../components/Header'
import NavVertical from '../../components/NavVertical'
import Profile from '../../pages/Profile';
import '../../styles/App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className='main'>
        <NavVertical />
        <Profile />
      </main>
      
    </React.Fragment>
  )
}

export default App;