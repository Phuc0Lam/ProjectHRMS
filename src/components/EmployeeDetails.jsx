import React from "react";
import Menu from "./Menu.jsx";
import Header from "./Header.jsx";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faEnvelope,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const EmployeeDetails = () => {
  const { employeeId } = useParams();
  console.log("s", employeeId);
  const [employees, setEmployees] = useState([]);
  const [foundEmployee, setFoundEmployee] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://mindx-mockup-server.vercel.app/api/resources/employee?apiKey=68a46a3021c34bd2bac8356d"
        );
        setEmployees(res.data.data.data);
      } catch (err) {
        setError("Không thể lấy dữ liệu");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
     
  }, []);
     
 useEffect(() => {
    if (employees.length > 0) {
      const found = employees.find((emp) => emp._id === employeeId);
      setFoundEmployee(found);
    }
  }, [employees, employeeId]);
  return (
    <div className="flex p-5">
      <Menu className="w-1/5" content="All Employee" />

      <div className="w-4/5">
        <Header content="All Employee" />
        <div className="h-[590px] p-4 border border-gray-200 rounded-lg m-4">
          <div className="flex gap-[20px]">
            <FontAwesomeIcon className="text-[72px]" icon={faCircleUser} />
                  <div className="flex flex-col content-center">
                    <div className="text-xl font-bold">
                      {" "}
                      {foundEmployee.name}{" "}
                    </div>
                    <div className="text-l">
                      {" "}
                      <FontAwesomeIcon icon={faBriefcase} />{" "}
                      {foundEmployee.designation}{" "}
                    </div>
                    <div className="text-l">
                      {" "}
                      <FontAwesomeIcon icon={faEnvelope} />{" "}
                      {foundEmployee.email}{" "}
                    </div>
                  </div>
                

          </div>

          
           
                <div className="border-t border-gray-200 mt-5 pt-2 flex flex-wrap gap-y-[30px] gap-x-[40px] ">
                  <div>
                    <div className="text-gray-500">EmployeeID</div>
                    <div className="flex w-[400px] items-center border border-gray-200 rounded-lg p-1 mt-2 w-1/3 ">
                      {foundEmployee.id}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Name</div>
                    <div className="flex w-[400px] items-center border border-gray-200 rounded-lg p-1 mt-2 w-1/3 ">
                      {foundEmployee.name}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Age</div>
                    <div className="flex w-[400px] items-center border border-gray-200 rounded-lg p-1 mt-2 w-1/3 ">
                      {foundEmployee.age}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Nationality</div>
                    <div className="flex w-[400px] items-center border border-gray-200 rounded-lg p-1 mt-2 w-1/3 ">
                      {foundEmployee.nationality}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Department</div>
                    <div className="flex w-[400px] items-center border border-gray-200 rounded-lg p-1 mt-2 w-1/3 ">
                      {foundEmployee.department}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Designation</div>
                    <div className="flex w-[400px] items-center border border-gray-200 rounded-lg p-1 mt-2 w-1/3 ">
                      {foundEmployee.designation}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">User</div>
                    <div className="flex w-[400px] items-center border border-gray-200 rounded-lg p-1 mt-2 w-1/3 ">
                      {foundEmployee.user}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Type</div>
                    <div className="flex w-[400px] items-center border border-gray-200 rounded-lg p-1 mt-2 w-1/3 ">
                      {foundEmployee.type}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500">Status</div>
                    <div className="flex w-[400px] items-center border border-gray-200 rounded-lg p-1 mt-2 w-1/3 ">
                      {foundEmployee.status}
                    </div>
                  </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
