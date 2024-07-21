/*
import React, { useState } from "react"
import "./Contact.css"

const ContactFrom = () => {
  const [fname, setFname] = useState("")
  const [id, setId] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
  const [people, setPeople] = useState("")
  const [room, setRoom] = useState("")
  const [cin, setCin] = useState("")
  const [cout, setCout] = useState("")
  const [price, setPrice] = useState("")
  const [message, setMessage] = useState("")

  const [allValue, setAllValue] = useState([])
  const formSubmit = (e) => {
    e.preventDefault()

    const newValue = { fname, id, phone, email, city, people,room, cin,cout,price,  message }
    setAllValue([...allValue, newValue])

    setFname("")
    setId("")
    setPhone("")
    setEmail("")
    setCity("")
    setPeople("")
    setRoom("")
    setCin("")
    setCout("")
    setPrice("")
    setMessage("")
  }
  return (
    <>
      <section className='contact mtop'>
        <div className='container flex'>
          <div className='main-content'>
            <h2>Contact From</h2>
            <p>Fill out the form below, we will get back you soon.</p>

            <form onSubmit={formSubmit}>
              <div className='grid1'>
                <div className='input'>
                  <span>
                    Full Name <label>*</label>
                  </span>
                  <input type='text' name='fname' value={fname} onChange={(e) => setFname(e.target.value)} required />
                </div>
                <div className='input'>
                  <span>
                    ID Number <label>*</label>
                  </span>
                  <input type='text' name='id' value={id} onChange={(e) => setId(e.target.value)} required />
                </div>
                <div className='input'>
                  <span>
                    Phone Number <label>*</label>
                  </span>
                  <input type='text' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className='input'>
                  <span>
                    Email <label>*</label>
                  </span>
                  <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='input'>
                  <span>
                    Hotel City <label>*</label>
                  </span>
                  <input type='text' name='city' value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className='input'>
                  <span>
                    How many People <label>*</label>
                  </span>
                  <input type='text' name='people' value={people} onChange={(e) => setPeople(e.target.value)} />
                </div>
                <div className='input'>
                  <span>
                    How many Rooms <label>*</label>
                  </span>
                  <input type='number' name='room' value={room} onChange={(e) => setRoom(e.target.value)} />
                </div>
                <div className='input'>
                  <span>
                    Day Check In <label>*</label>
                  </span>
                  <input type='date' name='cin' value={cin} onChange={(e) => setCin(e.target.value)} />
                </div>
                <div className='input'>
                  <span>
                    Day Check Out <label>*</label>
                  </span>
                  <input type='date' name='cout' value={cout} onChange={(e) => setCout(e.target.value)} />
                </div>
                <div className='input'>
                  <span>
                    Price Range <label>*</label>
                  </span>
                  <input type='text' name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>

              </div>
              <div className='input inputlast'>
                <span>
                  Write Your Message <label>*</label>
                </span>
                <textarea cols='30' rows='10' name='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              <button className='primary-btn'>Submit Now</button>
            </form>
          </div>

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
        </div>
      </section>

      <section className='show-data'>
        {allValue.map((cureentValue) => {
          const { fname, id, phone, email,city,people,room, cin,cout,price,  message } = cureentValue
          return (
            <>
              <div className='sign-box'>
                <h1>Send Successfully</h1>
                <h3>
                  Full Name : <p>{fname}</p>
                </h3>
                <h3>
                  ID Number : <p>{id}</p>
                </h3>
                <h3>
                  Contact Number : <p>{phone}</p>
                </h3>
                <h3>
                  Email : <p>{email}</p>
                </h3>
                <h3>
                  City : <p>{city}</p>
                </h3>
                <h3>
                  How many People : <p>{people}</p>
                </h3>
                <h3>
                  How many Rooms : <p>{room}</p>
                </h3>
                <h3>
                  Date Check In : <p>{cin}</p>
                </h3>
                <h3>
                  Date Check out : <p>{cout}</p>
                </h3>
                <h3>
                  Price : <p>{price}</p>
                </h3>
                <h3>
                  Your Message : <p>{message}</p>
                </h3>
              </div>
            </>
          )
        })}
      </section>

    </>
  )
}

export default ContactFrom
*/



import React, { useState } from "react"
import "./Contact.css"

const ContactFrom = () => {
  /*const [fname, setFname] = useState("")
  const [id, setId] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
  const [people, setPeople] = useState("")
  const [room, setRoom] = useState("")
  const [cin, setCin] = useState("")
  const [cout, setCout] = useState("")
  const [price, setPrice] = useState("")
  const [message, setMessage] = useState("")
*/
  const [allValue, setAllValue] = useState([])
  const formSubmit = (e) => {
    e.preventDefault()
/*
    const newValue = { fname, id, phone, email, city, people,room, cin,cout,price,  message }
    setAllValue([...allValue, newValue])

    setFname("")
    setId("")
    setPhone("")
    setEmail("")
    setCity("")
    setPeople("")
    setRoom("")
    setCin("")
    setCout("")
    setPrice("")
    setMessage("")*/
  }
  return (
    <>
      <section className='contact mtop'>
        <div className='container flex'>
         

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
        </div>
      </section>

    

    </>
  )
}

export default ContactFrom


