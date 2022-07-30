import React from 'react'
import Header from '../../components/Header'
import NavVertical from '../../components/NavVertical'
import Profile from '../../pages/Profile'
import sportsList from '../../utils/constantes/sportsList'

import '../../styles/App.css'

/**
 * React component: App
 * 
 * @type { React.FC }
 * @returns { React.ReactElement }
 */
function App() {
  return (
    <React.Fragment>
      <Header />
      <main className='main'>
        <NavVertical sportsList={sportsList}/>
        <Profile />
      </main>
      
    </React.Fragment>
  )
}

export default App