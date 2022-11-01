import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Works from "./component/Works";
import Alert from "./component/Alert";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (image, message, type) => {
    setAlert({
      img: image,
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  document.querySelector("body").style.backgroundColor = "#ecf3fb";
  return (
    <>
      <Router>
        <Navbar />
        <Alert alert={alert} type="danger" />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Home showAlert={showAlert} />
              </>
            }
          ></Route>
          <Route
            exact
            path="/works"
            element={
              <>
                <Works showAlert={showAlert} />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
