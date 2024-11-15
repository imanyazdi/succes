import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'boxicons/css/boxicons.min.css';

import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Resume from "./pages/resume/Resume";
import Services from "./pages/services/Services";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Childapp/>
      </BrowserRouter>
  )
}
  function Childapp() {
    return(
      <div className='app'> 
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='resume' element={<Resume/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='portfolio' element={<Portfolio/>}/>
          <Route path='contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </div>
    )
  }


export default App;
