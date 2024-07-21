import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import "./Contact/Contact.css"


const AddEmployeeee = () => {

    const [employeee, setEmployeee]=useState({
        id:"",
        fullName:"",
        idNumber:"",
        phone:"",
        emailId:"",
        city:"",
        people:"",
        room:"",
        cIn:"",
        cOut:"",
        price:"",
        message:"",

    });

    const navigate = useNavigate();

    const handleChange = (e) =>{
        const value = e.target.value;
        setEmployeee({ ...employeee, [e.target.name]: value });
    };

    const saveEmployeeee =(e) =>{
        e.preventDefault();

      

        EmployeeService.saveEmployeeee(employeee).then((response) => {
            console.log(response);
            navigate("/");
        })
        .catch((error) => {
            console.log(error);
        });
    };


    const reset = (e) => {
        e.preventDefault();
        setEmployeee({
            id:"",
            fullName:"",
            idNumber:"",
            phone:"",
            emailId:"",
            city:"",
            people:"",
            room:"",
            cIn:"",
            cOut:"",
            price:"",
            message:"",
        });
    };

    return (   



    <>





    <div className="flex max-w-2xl mx-auto shadow border-b">
    <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
            <h1>Book Now </h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Full Name <label className="text-red-600">*</label></label>
            <input 

            type="text" 
            name="fullName"
           value={employeee.fullName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            required>
            
            </input>
             

        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">ID Number<label className="text-red-600">*</label></label>
            <input 

            type="text" 
            name="idNumber"
           value={employeee.idNumber}
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
            value={employeee.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            required>

            </input>
            
        </div>
       

        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Contact Number<label className="text-red-600">*</label></label>
            <input 

            type="text" 
            name="phone"
            value={employeee.phone}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            required>

            </input>

        </div>

   
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">City<label className="text-red-600">*</label></label>
            <input 

            type="text" 
            name="city"
            value={employeee.city}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            required>

            </input>
            
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">People<label className="text-red-600">*</label></label>
            <input 

            type="number" 
            name="people"
            value={employeee.people}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            required>

            </input>
            
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Rooms<label className="text-red-600">*</label></label>
            <input 

            type="number" 
            name="room"
            value={employeee.room}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            required>

            </input>
            
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Date Check In<label className="text-red-600">*</label></label>
            <input 

            type="date" 
            name="cIn"
            value={employeee.cIn}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            required>

            </input>
            
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Date Check Out<label className="text-red-600">*</label></label>
            <input 

            type="date" 
            name="cOut"
            value={employeee.cOut}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            required>

            </input>
            
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Price<label className="text-red-600">*</label></label>
            <input 

            type="text" 
            name="price"
            value={employeee.price}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            required>

            </input>
            
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">Message<label className="text-red-600">*</label></label>
            <input 

            type="text" 
            name="message"
            value={employeee.message}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
            required>

            </input>
            
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button 
            onClick={saveEmployeeee}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6 ">Book</button>
            <button 
            onClick={reset}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6 ">Clear</button>
      
        </div>

    
    </div>

 


</div>

</>
);
};
export default AddEmployeeee;





/*

<div className='side-content'>
            <h3>Visit our location</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur.</p>
            <br />

            <h3>Message us</h3>
            <span>RoyalHotel@gmail.com</span>
            <br />
            <span>+11 0235 657 12</span>
            <br />

            <div className='icon'>
              <h3>Follow Us</h3>

              <div className='flex_space'>
                <i className='fab fa-facebook-f'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-linkedin'></i>
                <i className='fab fa-instagram'></i>
                <i className='fab fa-pinterest'></i>
                <i className='fab fa-youtube'></i>
              </div>
            </div>
          </div>

          */


