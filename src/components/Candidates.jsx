import React from 'react'
import Menu from './Menu'
import Header from './Header'
const Candidates = () => {
  return (
    <div className='flex p-5'>
          <Menu className='w-1/5' content="Candidates"/>
      
      <div className='w-4/5'>
        <Header content="Candidates"/>

      </div>
    </div>
  )
}

export default Candidates