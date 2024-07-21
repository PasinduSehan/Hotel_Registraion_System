/*import React, { useState } from 'react'
import Data from "./Data"

const Slide = ({slides}) => {


    const [current,setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)

    }
    const prevSlide = () => {
        setCurrent(current ===  0 ? length - 1 : current - 1)
        
    }
    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }

  return (
   <>
   <section className='slider'>
    <div className='control-btn'>
        <button className='prev' onClick={prevSlide}>
            <i className='fas fa-caret-left'></i>
        </button>
        <button className='next' onClick={nextSlide}>
            <i className='fas fa-caret-right'></i>
        </button>
    </div>
   </section>

   {Data.map((slide,index)=> {
    return(
        <div className={index === current? "slide active": "slide"} key={index}>
            {index === current && <img src= {slide.images} alt='Home Image' />}

        </div>
    )
   })}


   </>
  )
}

export default Slide

*/
/*
import React, { useState } from 'react';
import Data from './Data'

const Slide = ({ slides }) => {
    console.log(Data);
  const [current, setCurrent] = useState(0);
  const length = slides?.length || 0;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <>
      <section className="slider">
        <div className="control-btn">
          <button className="prev" onClick={prevSlide}>
            <i className="fas fa-caret-left"></i>
          </button>
          <button className="next" onClick={nextSlide}>
            <i className="fas fa-caret-right"></i>
          </button>
        </div>
      </section>

      {slides.map((slide, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && <img src={slide.images} alt={`Slide ${index + 1}`} />}
        </div>
      ))}
    </>
  );
};

export default Slide;


*/



import React, { useState } from 'react';
import Data from './Data';
import "./Home.css"
import { useNavigate } from 'react-router-dom';


const Slide = ({ slides }) => {
  const navigate = useNavigate();


  const [current,setCurrent] = useState(0)
   const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }



  return (
 
    <>
      <section className="slider" >
        <div className="control-btn">
          <button className="prev" onClick={prevSlide}>
            <i className="fas fa-caret-left"></i>
          </button>
          <button className="next" onClick={nextSlide}>
            <i className="fas fa-caret-right"></i>
          </button>
        </div>
      
      {Data.map((slide, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && <img src={slide.images} alt="Home Images"  />}
        </div>
      ))}
      </section>

      <section className='slide-form'>
        <div className='container'>
          <h2>Enjoy Your Holiday</h2>
          <span>Book Hotel Now</span>

          <form action=''>
           <br></br>
           <br></br>
           
           <span>~We are now search for the our customer best hotel </span>
           <h5>~First click the book hotel after come some form and it will fill the all details</h5>
           <span>~Book our site you can get more offer</span>
           <br></br><br></br>
            <input  
             onClick={() => navigate("/btn")} 
            type='Submit' value='Book Now' className='submit'  />
       
          </form>
        </div>

      </section>

    </>
  
  );
};

export default Slide;


/*

 <input type='text' placeholder='hotel City' name='' id='' />
            <div className='flex_space'>
              <input type='date' placeholder='Check In (mm/dd/yyyy)' />
              <input type='date' placeholder='Check Out (mm/dd/yyyy)' />
         
            </div>
            <div className='flex_space'  >
              <input type='number' placeholder='Adult(s)(+18)' />
              <input type='number' placeholder='Children(0 - 17)' />
            </div>
            <input type='number' placeholder='Rooms' />

**/

