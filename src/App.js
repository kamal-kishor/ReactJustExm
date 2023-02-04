import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContactUs from './components/ContactUs'
import NavBar from './components/NavBar'
import Alert from './components/Alert'
import LogIn from './components/LogIn'
import React, { useState } from 'react'
import FormDataContextProvider from './context/Context'
import Temperatrure from './components/Temperatrure'
import Time from './components/Time'

function App() {
  const [mode, setMode] = useState('light ')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'sucess')
    } else {
      setMode('light')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enabled', 'sucess')
    }
  }
  return (
    <>
      <BrowserRouter>
        <NavBar title="Heading" home="Weather" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/weather" element={<Temperatrure />} />
          {/* <Route path="/time" component={Time} /> */}
          <Route path="/time" element={<Time />} />
        </Routes>

        <Alert alert={alert} />
        <ContactUs heading="Contact Us" mode={mode} />
        <FormDataContextProvider>
          <LogIn />
        </FormDataContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
