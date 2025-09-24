import React from 'react'
import Menu from './Menu'
import Header from './Header'
const Jobs = () => {
  return (
    <div className='flex p-5'>
          <Menu className='w-1/5' content="Jobs"/>
      
      <div className='w-4/5'>
        <Header content="Jobs"/>

      </div>
    </div>
  )
}

export default Jobs