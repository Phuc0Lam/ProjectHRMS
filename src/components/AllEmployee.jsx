
import Menu from './Menu.jsx'
import Header from './Header.jsx'
import ContainerAllEmployee from './ContainerAllEmployee.jsx'
import React from 'react'

const AllEmployee = () => {
  
  return (
    <div className='flex p-5'>
          <Menu className='w-1/5' content="All Employee"/>
      
      <div className='w-4/5'>
        <Header content="All Employee" />
        <ContainerAllEmployee />
      </div>
    </div>
  )
}

export default AllEmployee