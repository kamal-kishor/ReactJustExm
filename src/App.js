import logo from "./logo.svg";
import './App.css';
import ContactUs from "./components/ContactUs";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import React, { useState } from "react";
import HomeContainer from "./container/HomeContainer";
import HeaderContainer from "./container/HeaderContainer";

function App() {
  const [mode, setMode] = useState("light ");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "sucess");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "sucess");
    }
  };
  return (
    <>
      <NavBar
        title="Heading"
        home="homeOne"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      {/* <ContactUs/> */}
      {/* <HeaderContainer /> */}
      {/* <HomeContainer /> */}
      <ContactUs heading="Contact Us" mode={mode} />
    </>
  );
}

export default App;
