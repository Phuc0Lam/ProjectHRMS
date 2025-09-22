import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
const Header = (props) => {
  return (
    <div className='h-[60px] px-[30px] py-[10px] text-xl flex justify-between items-center'>
        <h1 className='text-[30px] font-bold'>{props.content}</h1>
        <div className="w-[40%] flex justify-between items-center gap-5 mr-5 text-xl">
            <div className="h-[40px] border border-gray-400 px-[10px] py-[10px] rounded-[10px] flex items-center">
                <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            <input className='w-[200px] text-[15px] border-none bg-transparent' type="text" placeholder='Search...'> 
            </input>
            </div>
            <div >
                <button className='cursor-pointer'><FontAwesomeIcon icon={faBell} /></button>
            </div>
            <div className="w-52 h-10 border border-gray-400 p-1.5 flex items-center rounded-lg">
                
            </div>
        </div>
    </div>
  )
}

export default Header