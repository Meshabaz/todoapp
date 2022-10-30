import './App.css';
import {BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from './component/Home'
import Works from './component/Works';
function App() {
  document.querySelector('body').style.backgroundColor='#ecf3fb'
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<><Home/></>}></Route>
        <Route exact path='/works' element={<><Works/></>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
