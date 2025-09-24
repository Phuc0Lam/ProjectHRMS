import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCirclePlus, faFilter, faTrash, faPen, faEye } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router';
import axios from "axios";
import ConfirmDialog from "./ConfirmDialog.jsx";   // ✅ thêm dòng này

const ContainerAllEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);  // ✅ dialog state
  const [deleteId, setDeleteId] = useState(null);         // ✅ lưu id cần xóa

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://mindx-mockup-server.vercel.app/api/resources/employee?apiKey=68a46a3021c34bd2bac8356d");
        setEmployees(res.data.data.data);
      } catch (err) {
        console.error("Không thể lấy dữ liệu");
      }
    };
    fetchData();
  }, []);

  // ✅ Khi bấm nút delete
  const handleDelete = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  // ✅ Xác nhận xóa
  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`https://mindx-mockup-server.vercel.app/api/resources/employee/${deleteId}?apiKey=68a46a3021c34bd2bac8356d`);
      setEmployees(employees.filter((employee) => employee._id !== deleteId));
    } catch (err) {
      console.error("Lỗi khi xóa:", err);
    } finally {
      setShowConfirm(false);
      setDeleteId(null);
    }
  };

  return (
    <div className='h-[500px] p-4 border border-gray-200 rounded-lg m-4'>
      <div className='flex justify-between mb-4 items-center'>
        <div className='border border-gray-100 rounded-lg p-2 flex items-center'>
          <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          <input className='ml-2 p-1' type="text" placeholder='Search...' />
        </div>
        <div className='flex justify-between w-1/3'>
          <div className='bg-[#7152F3] text-base text-white p-2 rounded-lg flex items-center'>
            <NavLink to="/AllEmployee/AddEmployee">
              <FontAwesomeIcon className='mr-2' icon={faCirclePlus} />
              Add New Employee
            </NavLink>
          </div>
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
          <tr>
            <th>EmployeeName</th>
            <th>EmployeeID</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.id}</td>
              <td>{employee.department}</td>
              <td>{employee.designation}</td>
              <td>{employee.type}</td>
              <td>{employee.status}</td>
              <td className='flex justify-between'>
                <NavLink className='cursor-pointer hover:bg-gray-400' to={`/AllEmployee/Details/${employee._id}`} >
                  <FontAwesomeIcon icon={faEye} />
                </NavLink>
                <NavLink className='cursor-pointer hover:bg-gray-400' to={`/AllEmployee/EditEmployee/${employee._id}`}>
                  <FontAwesomeIcon icon={faPen} />
                </NavLink>
                <button
                  className='cursor-pointer hover:bg-gray-400'
                  onClick={() => handleDelete(employee._id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ ConfirmDialog thay thế alert */}
      {showConfirm && (
        <ConfirmDialog
          title="Confirm delete"
          message="Are you sure you want to delete this employee?"
          onConfirm={handleConfirmDelete}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  )
}

export default ContainerAllEmployee;
