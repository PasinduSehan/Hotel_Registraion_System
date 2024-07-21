import React from 'react'
import AboutCard from './AboutCard'
import HeadTitle from '../../Common/HeadTitle/HeadTitle'

const About = () => {
  return (
    <>
    <HeadTitle />
    <section className='about top'>
      <div className='container'>
        <AboutCard />
      </div>
    </section>
    <section className='features top'>
    <br></br>
        <div className='container aboutCard flex_space'>
        <br></br>
          <div className='row row1'>
          <br></br>
            <h1>
              
              Our <span>Features</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
            <button className='secondary-btn'>
                Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
          </div>
 
          <div className='row image'>
          <br>




         </br>
           <img className='about-image' src='/image/90.jpg' alt='' />
            <div className='control-btn'>
              <button className='prev'>
               <i className='fas fa-play'></i>
              </button>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default About

