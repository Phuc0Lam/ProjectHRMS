import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
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
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

const EditEmployee = () => {
  const { employeeId } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://mindx-mockup-server.vercel.app/api/resources/employee?apiKey=68a46a3021c34bd2bac8356d"
        );
        const found = res.data.data.data.find((emp) => emp._id === employeeId);
        if (found) setEmployee(found);
        else setError("Không tìm thấy nhân viên");
      } catch (err) {
        setError("Lỗi khi lấy dữ liệu");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [employeeId]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  const handleConfirm = async () => {
    try {
      await axios.put(
        `https://mindx-mockup-server.vercel.app/api/resources/employee/${employeeId}?apiKey=68a46a3021c34bd2bac8356d`,
        employee
      );
      setShowConfirm(false);
      navigate(`/Allemployee/Details/${employeeId}`);
    } catch (err) {
      setShowConfirm(false);
      alert("Cập nhật thất bại!");
    }
  };

  if (loading) return <div className="flex justify-center items-center h-screen" > <p><Spin  indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} /></p></div>;
  if (error) return <p>{error}</p>;
  if (!employee) return <p>Not Exist</p>;

  return (
    <div className="flex p-5">
      <Menu className="w-1/5" content="Edit Employee" />
      <div className="w-4/5">
        <Header content="Edit Employee" />
        <form
          onSubmit={handleSubmit}
          className="h-[550px] p-4 border border-gray-200 rounded-lg m-4"
        >
          <div className="flex gap-[20px]">
            <FontAwesomeIcon className="text-[72px]" icon={faCircleUser} />
            <div className="flex flex-col content-center">
              <div className="text-xl font-bold"> {employee.name} </div>
              <div className="text-l">
                {" "}
                <FontAwesomeIcon icon={faBriefcase} />{" "}
                {employee.designation}{" "}
              </div>
              <div className="text-l">
                {" "}
                <FontAwesomeIcon icon={faEnvelope} /> {employee.email}{" "}
              </div>
            </div>
          </div>

          {/* Giữ nguyên form chi tiết như Details */}
          <div className="border-t border-gray-200 mt-5 pt-2 flex flex-wrap gap-y-[30px] gap-x-[40px]">
            <div>
              <div className="text-gray-500">EmployeeID</div>
              <input
                type="text"
                name="_id"
                value={employee.id}
                readOnly
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
          </div>

          {/* Nút lưu */}
          <div className="mt-5">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>

        {/* ConfirmDialog */}
        {showConfirm && (
          <ConfirmDialog
            title="Confirm update"
            message="Do you want to save?"
            onConfirm={handleConfirm}
            onCancel={() => setShowConfirm(false)}
          />
        )}
      </div>
    </div>
  );
};

export default EditEmployee;
