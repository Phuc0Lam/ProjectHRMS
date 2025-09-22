import React from 'react'
import Menu from './Menu.jsx'
import Header from './Header.jsx'
const Attendance = () => {
    return (
    <div className='flex p-5'>
          <Menu className='w-1/5' content="Attendance"/>
      
      <div className='w-4/5'>
        <Header content="Attendance"/>

      </div>
    </div>
  )
}

export default Attendance