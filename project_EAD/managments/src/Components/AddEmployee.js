import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {

    const [employee, setEmployee]=useState({
        id:"",
        firstName:"",
        lastName:"",
        emailId:"",
        
        number:"",
        address:"",
        password:"",

    });

    const navigate = useNavigate();

    const handleChange = (e) =>{
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
    };


    const saveEmployee =(e) =>{
        e.preventDefault();
        EmployeeService.saveEmployee(employee).then((response) => {
            console.log(response);
            navigate("/");
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
            
            number:"",
            address:"",
            password:"",
        });
    };

    return (   <div className="flex max-w-2xl mx-auto shadow border-b">
    <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
            <h1>Register</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Full Name <label className="text-red-600">*</label></label>
            <input 

            type="text" 
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            required>
            
            </input>

        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Last Name<label className="text-red-600">*</label></label>
            <input 

            type="text" 
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            required>

            </input>
            
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Email <label className="text-red-600">*</label></label>
            <input 
            
            type="email" 
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            required>

            </input>
            
        </div>
       

        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Contact Number<label className="text-red-600">*</label></label>
            <input 

            type="text" 
            name="number"
            value={employee.number}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            required>

            </input>

        </div>

   
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Address</label>
            <input 

            type="text" 
            name="address"
            value={employee.address}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            required>

            </input>
            
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Password<label className="text-red-600">*</label></label>
            <input 

            type="text" 
            name="password"
            value={employee.password}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            required>

            </input>
            
        </div>
       
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button 
            onClick={saveEmployee}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6 ">Save</button>
            <button 
            onClick={reset}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6 ">Clear</button>
      
        </div>

    </div>

</div>


);
};
export default AddEmployee;


