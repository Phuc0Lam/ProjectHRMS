import { useState } from 'react'
import './App.css'
import Menu from './components/Menu.jsx'
import Header from './components/Header.jsx'
import ContainerAllEmployee from './components/ContainerAllEmployee.jsx'
function App() {
  

  return (
    <div className="flex p-5">
      <Menu className='w-1/5'/>
      
      {/* <div className='w-4/5'>
        <Header/>
        <ContainerAllEmployee />
      </div> */}
      
    </div>
  )
}

export default App
