import './App.css';
import {BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from './component/Home'
function App() {
  document.querySelector('body').style.backgroundColor='#ecf3fb'
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<><Navbar/><Home/></>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
