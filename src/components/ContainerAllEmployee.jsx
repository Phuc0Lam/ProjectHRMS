import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCirclePlus, faFilter } from "@fortawesome/free-solid-svg-icons";
import { data, NavLink } from 'react-router';
import { useEffect, useState } from "react";
import axios from "axios";
import { faTrash, faPen,faEye } from '@fortawesome/free-solid-svg-icons';
const ContainerAllEmployee = () => {
    const [employees, setEmployees] = useState([]);
    
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://mindx-mockup-server.vercel.app/api/resources/employee?apiKey=68a46a3021c34bd2bac8356d");
        setEmployees(res.data.data.data);
      } catch (err) {
        setError("Không thể lấy dữ liệu");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
      
  }, []);
    const handleDelete = async (id) => {
    try {
      await axios.delete(`https://mindx-mockup-server.vercel.app/api/resources/employee/${id}?apiKey=68a46a3021c34bd2bac8356d`);
      // Xóa khỏi state
      setEmployees(employees.filter((employee) => employee._id !== id));
    } catch (err) {
      console.error("Lỗi khi xóa:", err);
    }
    alert("Delete successfully");
  };
  
  return (
    <div className='h-[500px] p-4 border border-gray-200 rounded-lg m-4'>
        <div className='flex justify-between mb-4 items-center'>
            <div className='border border-gray-100 rounded-lg p-2 flex items-center'>
                <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                <input className='ml-2 p-1' type="text" placeholder='Search...'> 
                </input>
            </div>
            <div className='flex justify-between w-1/3'>
                <NavLink to={"./AddEmployee"} >
                  <div className='bg-[#7152F3] text-base text-white p-2 rounded-lg flex items-center'>
                
                    <FontAwesomeIcon className='mr-2' icon={faCirclePlus} />
                    Add New Employee
                   
                </div>
                </NavLink>
                <div className='w-[100px] border border-gray-200 p-2 rounded-lg flex items-center justify-center'>
                    <button>
                        <FontAwesomeIcon className='mr-2' icon={faFilter} />
                        Filter
                    </button>
                </div>
            </div>
        </div>
        <table className='tabble-auto w-full text-left border-separate border-spacing-y-2'>
            <thead>
                <th>EmployeeName</th>
                <th>EmployeeID</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Type</th>
                <th>Status</th>
                <th>Action</th>
            </thead>
            <tbody> 
                {
                    employees.map((employee) => {
                        return (
                            <tr>
                                <td>{employee.name}</td>
                                <td>{employee.id}</td>
                                <td>{employee.department}</td>
                                <td>{employee.designation}</td>
                                <td>{employee.type}</td>
                                <td>{employee.status}</td>
                                <td className='flex justify-between'>
                                    <NavLink className='cursor-pointer hover:bg-gray-400' to={`/AllEmployee/Details/${employee._id}`} ><FontAwesomeIcon icon={faEye} /></NavLink>
                                    <NavLink className='cursor-pointer hover:bg-gray-400' to={`/AllEmployee/EditEmployee/${employee._id}`}><FontAwesomeIcon icon={faPen} /></NavLink>
                                    <button className='cursor-pointer hover:bg-gray-400' onClick={() => handleDelete(employee._id)}><FontAwesomeIcon icon={faTrash} /></button>
                                </td>
                            </tr>
                        );
                    })
                }

            </tbody>
        </table>
    </div>
  )
}

export default ContainerAllEmployee