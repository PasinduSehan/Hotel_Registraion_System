/*import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './Components/AddEmployee';
import Navbar from './Components/Navbar';
import EmployeeList from './Components/EmployeeList';
import UpdateEmployee from './Components/UpdateEmployee';

import AddEmployeee from './Components/AddEmployeee';
import Navbar1 from './Common/Navbar1';

import Home from './Components/Pages/Home';
import Hero from './Components/HomeSection/Hero'; 

function App() {
  
  return (
  <>
  <BrowserRouter>
  <Navbar />
  <Routes>
  <Route index element={<Navbar1 />} />
    <Route path="/" element={<Navbar1 />}></Route>
    
    <Route path="/employeeList" element={<EmployeeList />} />
    <Route path="/addEmployee" element={<AddEmployee />} />
    <Route path="/editEmployee/:id" element={<UpdateEmployee />} />

    <Route path="/addEmployeee" element={<AddEmployeee />} />
    <Route path="/navbar1" element={<Navbar1 />} />
    <Route path="/home" element={<Home />} /> 

  </Routes>
  <Hero />
  </BrowserRouter>
 
  </>
 
 
  );
}
export default App;

*/


/*
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './Components/AddEmployee';
import Navbar from './Components/Navbar';
import EmployeeList from './Components/EmployeeList';
import UpdateEmployee from './Components/UpdateEmployee';
import AddEmployeee from './Components/AddEmployeee';
import Navbar1 from './Common/Navbar1';
import Home from './Components/Pages/Home';
import Hero from './Components/HomeSection/Hero'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/home" element={<>
          <Navbar1 />
          <Home />
          <Hero />
        </>} />

 
        <Route path="/" element={<>
          <Navbar1 />
       
        </>} />
    
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar1 from './Common/Navbar1';
import Home from './Components/Pages/Home';



import About from './Components/About/About';
import Gallery from './Components/gallery/Gallery';
import Destinations from './Components/Destinations/Home';
import SinglePages from './SinglePage/SinglePages';
import Blog from './Components/Blog/Blog';
import BlogSingle from './Components/Blog/blog-single-page/BlogSingle';
import Testimonial from './Components/Testimonial/Testimonial';


import Footer from './Common/footer/Footer';
import AddEmployee from './Components/AddEmployee';
import AddEmployeee from './Components/AddEmployeee';
import EmployeeList from './Components/EmployeeList';
import UpdateEmployee from './Components/UpdateEmployee';
import AddEmployeeee from './Components/AddEmployeeee';
import Contact from './Components/Contact/Contact'



function App() {
  return (
    <BrowserRouter>
      <Navbar1 />
      <Routes>
     
        <Route path="/" element={<>
          <Home />
          <Footer />
        </>} />

        <Route path="/sign-in" element={<>
      <AddEmployeee />
        </>} />
        <Route path="/register" element={<>
      <AddEmployee />
        </>} />
       
        <Route path="/about" element={<>
      <About />
      <Footer />
        </>} />
        <Route path="/gallery" element={<>
      <Gallery />
      <Footer />
        </>} />

        <Route path="/destination" element={<>
      <Destinations />
      <Footer />
        </>} />
       
       
        <Route path="/singlepage/:id" element={<>
      <SinglePages />
      <Footer />
        </>} />

        <Route path="/blog" element={<>
      <Blog />
      <Footer />
        </>} />

        <Route path="/blogsingle/:id" element={<>
      <BlogSingle />
      <Footer />
        </>} />

        <Route path="/testimonali" element={<>
      <Testimonial />
      <Footer />
        </>} />

        <Route path="/contact" element={<>
      <Contact />
      <Footer />
        </>} />

        <Route path="/employeeList" element={<>
      <EmployeeList />
     
        </>} />
        
        <Route path="/editEmployee/:id" element={<>
      <UpdateEmployee />
     
        </>} />
        <Route path="/btn" element={<>
      <AddEmployeeee />
      <Footer />
        </>} />
 

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;



