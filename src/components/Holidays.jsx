import React from 'react'
import Menu from './Menu'
import Header from './Header'
const Holidays = () => {
  return (
    <div className='flex p-5'>
          <Menu className='w-1/5' content="Holidays"/>
      
      <div className='w-4/5'>
        <Header content="Holidays"/>

      </div>
    </div>
  )
}

export default Holidays