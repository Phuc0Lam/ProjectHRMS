import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Menu from "./Menu.jsx";
import Header from "./Header.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faEnvelope,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import ConfirmDialog from "./ConfirmDialog.jsx";
import Password from "antd/es/input/Password.js";

const AddEmployee = () => {
  const navigate = useNavigate();

  // Khởi tạo state trống cho nhân viên mới
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    age: "",
    nationality: "",
    department: "",
    designation: "",
    user: "",
    type: "",
    email: "",
    password:"123"
  });

  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  const handleConfirm = async () => {
    try {
      const res = await axios.post(
        `https://mindx-mockup-server.vercel.app/api/resources/employee?apiKey=68a46a3021c34bd2bac8356d`,
        employee
      );
      setShowConfirm(false);
      // Sau khi thêm thành công chuyển đến detail của nhân viên vừa tạo
      navigate(`/AllEmployee/Details/${res.data.data._id}`);
    } catch (err) {
      setShowConfirm(false);
      alert("Thêm mới thất bại!");
    }
  };

  return (
    <div className="flex p-5">
      <Menu className="w-1/5" content="Add Employee" />
      <div className="w-4/5">
        <Header content="Add Employee" />
        <form
          onSubmit={handleSubmit}
          className="h-[650px] p-4 border border-gray-200 rounded-lg m-4"
        >
          <div className="flex gap-[20px]">
            <FontAwesomeIcon className="text-[72px]" icon={faCircleUser} />
            <div className="flex flex-col content-center">
              <div className="text-xl font-bold">
                {employee.name || "New Employee"}
              </div>
              <div className="text-l">
                <FontAwesomeIcon icon={faBriefcase} />{" "}
                {employee.designation || "Designation"}
              </div>
              <div className="text-l">
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                {employee.email || "email@example.com"}
              </div>
            </div>
          </div>

          {/* Form nhập liệu giữ nguyên kích thước với Edit/Detail */}
          <div className="border-t border-gray-200 mt-5 pt-2 flex flex-wrap gap-y-[30px] gap-x-[40px]">
            <div>
              <div className="text-gray-500">EmployeeID</div>
              <input
                type="text"
                name="id"
                value={employee.id}
                onChange={handleChange}
                className="flex w-[400px] border border-gray-200 rounded-lg p-1 mt-2"
              />
            </div>
            <div>
              <div className="text-gray-500">Name</div>
              <input
                type="text"
                name="name"
                value={employee.name}
                onChange={handleChange}
                className="flex w-[400px] border border-gray-200 rounded-lg p-1 mt-2"
              />
            </div>
            <div>
              <div className="text-gray-500">Age</div>
              <input
                type="number"
                name="age"
                value={employee.age}
                onChange={handleChange}
                className="flex w-[400px] border border-gray-200 rounded-lg p-1 mt-2"
              />
            </div>
            <div>
              <div className="text-gray-500">Nationality</div>
              <input
                type="text"
                name="nationality"
                value={employee.nationality}
                onChange={handleChange}
                className="flex w-[400px] border border-gray-200 rounded-lg p-1 mt-2"
              />
            </div>
            <div>
              <div className="text-gray-500">Department</div>
              <input
                type="text"
                name="department"
                value={employee.department}
                onChange={handleChange}
                className="flex w-[400px] border border-gray-200 rounded-lg p-1 mt-2"
              />
            </div>
            <div>
              <div className="text-gray-500">Designation</div>
              <input
                type="text"
                name="designation"
                value={employee.designation}
                onChange={handleChange}
                className="flex w-[400px] border border-gray-200 rounded-lg p-1 mt-2"
              />
            </div>
            <div>
              <div className="text-gray-500">User</div>
              <input
                type="text"
                name="user"
                value={employee.user}
                onChange={handleChange}
                className="flex w-[400px] border border-gray-200 rounded-lg p-1 mt-2"
              />
            </div>
            <div>
              <div className="text-gray-500">Type</div>
              <input
                type="text"
                name="type"
                value={employee.type}
                onChange={handleChange}
                className="flex w-[400px] border border-gray-200 rounded-lg p-1 mt-2"
              />
            </div>
            <div>
              <div className="text-gray-500">Email</div>
              <input
                type="email"
                name="email"
                value={employee.email}
                onChange={handleChange}
                className="flex w-[400px] border border-gray-200 rounded-lg p-1 mt-2"
              />
            </div>
            <div>
              <div className="text-gray-500">Status</div>
              <input
                type="text"
                name="status"
                value={employee.status}
                onChange={handleChange}
                className="flex w-[400px] border border-gray-200 rounded-lg p-1 mt-2"
              />
            </div>
          </div>
        
          {/* Nút thêm mới */}
          <div className="mt-5">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add
            </button>
          </div>
        </form>
        
        {/* ConfirmDialog */}
        {showConfirm && (
          <ConfirmDialog
            title="Confirm add"
            message="Do you want to add this employee?"
            onConfirm={handleConfirm}
            onCancel={() => setShowConfirm(false)}
          />
        )}
      </div>
    </div>
  );
};

export default AddEmployee;
