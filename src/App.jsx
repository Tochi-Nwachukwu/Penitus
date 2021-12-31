import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom"
import NavBar from '../src/components/NavBar'
import './App.css'
import Welcome from './Pages/Welcome'
import Services from './Pages/Services'
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Communication from "./Pages/Communication";
import Biometrics from "./Pages/Biometrics";
import Consulting from "./Pages/Consulting";
import DataAnalysis from "./Pages/DataAnalysis";
import Security from "./Pages/Security";
import Networking from "./Pages/Networking";
import SoftwareDevelopment from "./Pages/SoftwareDevelopment";
import ProjectManagement from "./Pages/ProjectManagement";
import Devops from "./Pages/Devops";
import Footer from "./components/Footer";


function App() {
  const [isOpen, setIsOpen] = useState(true)

  const getOpen = (open) => {
    setIsOpen(open)
    console.log(isOpen)

  }

  return (

    <Router>
      <div className="App bg-[#090776]">
        <div className={!isOpen ? "fixed w-full z-10 " : "fixed sm:w-[150px] w-full z-10"}>
          <NavBar getFunction={getOpen} />
        </div>
        <div className="content w-full">
          <Switch>
            <Route path='/' exact>
              <Welcome />
            </Route>
            <Route path='/about' exact>
              <About />
            </Route>
            <Route path='/contact' exact>
              <Contact />
            </Route>
            <Route path='/services' exact>
              <Services />
            </Route>
            <Route path='/services/communication-products' exact>
              <Communication />
            </Route>
            <Route path='/services/biometric-access-control' exact>
              <Biometrics />
            </Route>
            <Route path='/services/consulting' exact>
              <Consulting />
            </Route>
            <Route path='/services/data-analysis' exact>
              <DataAnalysis />
            </Route>
            <Route path='/services/security' exact>
              <Security />
            </Route>
            <Route path='/services/networking' exact>
              <Networking />
            </Route>
            <Route path='/services/software-development' exact>
              <SoftwareDevelopment />
            </Route>
            <Route path='/services/project-management' exact>
              <ProjectManagement />
            </Route>
            <Route path='/services/devops' exact>
              <Devops />
            </Route>
          </Switch>
        </div>


        <Footer />
      </div>


    </Router >
  )
}

export default App
