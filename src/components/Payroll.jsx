import React from 'react'
import Menu from './Menu.jsx'
import Header from './Header.jsx'
const Payroll = () => {
    return (
    <div className='flex p-5'>
          <Menu className='w-1/5' content="Payroll"/>
      
      <div className='w-4/5'>
        <Header/>

      </div>
    </div>
  )
}

export default Payroll