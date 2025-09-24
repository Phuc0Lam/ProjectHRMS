import React from 'react'
import Menu from './Menu'
import Header from './Header'
const Setting = () => {
  return (
    <div className='flex p-5'>
          <Menu className='w-1/5' content="Setting"/>
      
      <div className='w-4/5'>
        <Header content="Setting"/>

      </div>
    </div>
  )
}

export default Setting