import React from 'react'
import Menu from './Menu'
import Header from './Header'
const Leaves = () => {
  return (
    <div className='flex p-5'>
          <Menu className='w-1/5' content="Leaves"/>
      
      <div className='w-4/5'>
        <Header content="Leaves"/>

      </div>
    </div>
  )
}

export default Leaves