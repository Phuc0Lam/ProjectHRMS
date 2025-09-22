import React from 'react'
import Menu from './Menu.jsx'
import Header from './Header.jsx'
const AllDepartment = () => {
    return (
    <div className='flex p-5'>
          <Menu className='w-1/5' content="All Department"/>
      
      <div className='w-4/5'>
        <Header content="All Department"/>

      </div>
    </div>
  )
}

export default AllDepartment