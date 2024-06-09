import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Recentwork from './Components/Recentwork';
import Resume from './Components/Resume';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App () { 

  return (
    <>
      <div className='landing'>
        <h1>WELCOME</h1>
        <h1>TO MY</h1>
        <h1>PORTFOLIO</h1>
      </div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/recentwork' element={ <Recentwork/>} />          
          <Route path='/resume' element={ <Resume /> } />
          <Route path='/skills' element={ <Skills/>} />          
          <Route path='/contact' element={ <Contact/>} />          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
