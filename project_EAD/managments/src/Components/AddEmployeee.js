/*
import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployeee = () => {

    const [employee, setEmployee]=useState({
        id:"",
        firstName:"",
        lastName:"",
        emailId:"",
    });

    const navigate = useNavigate();

    const handleChange = (e) =>{
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
    };

    const saveEmployeee=(e) =>{
        e.preventDefault();
        EmployeeService.saveEmployeee(employee).then((response) => {
            console.log(response);
            navigate("/employeeList");
        })
        .catch((error) => {
            console.log(error);
        });
    };


    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id:"",
            firstName:"",
            lastName:"",
            emailId:"",
        });
    };

    return (   <div className="flex max-w-2xl mx-auto shadow border-b">
    <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
            <h1>Sing-In  (Admin-Only)</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Full Name</label>
            <input 

            type="text" 
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2">

            </input>

        </div>
      
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Email </label>
            <input 
            
            type="email" 
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2">

            </input>
            
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Password</label>
            <input 

            type="text" 
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2">

            </input>
            
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button 
            onClick={saveEmployeee}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6 ">Login</button>
            <button 
            onClick={reset}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6 ">Clear</button>
      
        </div>

    </div>
</div>
);
};
export default AddEmployeee;

*/





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployeee = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    password: "",
    emailId: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!employee.firstName || !employee.password || !employee.emailId) {
      setError("Please enter all fields.");
      return;
    }

    if (employee.firstName === "123" && employee.password === "123" && employee.emailId === "123@gmail.com") {
      setError("");
      navigate("/employeeList");
    } else {
      setError("Invalid login credentials.");
    }
  };

  const handleClear = () => {
    setEmployee({
      firstName: "",
      password: "",
      emailId: "",
    });
    setError("");
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Login (Only-Admin)</h1>
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">Full Name</label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">Email</label>
          <input
            type="email"
            name="emailId"
            value={employee.emailId}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">Password</label>
          <input
            type="text"
            name="password"
            value={employee.password}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={handleLogin}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
          >
            Login
          </button>
          <button
            onClick={handleClear}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeee;


