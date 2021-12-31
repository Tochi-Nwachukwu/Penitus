import React, { useState, useEffect } from 'react'
import Logo from '../images/logo.png'
import hamburger from '../images/hamburger.png'
import closeIcon from '../images/close-icon.png'
import { NavLink, useLocation } from 'react-router-dom'


function NavBar({ getFunction }) {

    const location = useLocation()
    const [open, setOpen] = useState(false)

    const openNav = (item) => {
        setOpen(!open)
        getFunction(open)
    }

    function locationGetter() {
        if (location.pathname == "/") {

            return 'Welcome'

        } else {
            return location.pathname.split("/")[1].charAt(0).toUpperCase() + location.pathname.split("/")[1].slice(1)
        }
    }

    return (
        <div className=''>
            <div className={open ? "w-full h-screen bg-[#09083E] py-4 flex flex-col items-center  text-white " : "sm:w-[150px] w-full sm:h-screen bg-[#09083E] py-4 flex sm:flex-col justify-between items-center  text-white "}>
                <div style={{ backgroundImage: `url(${Logo})` }} className="ml-4 sm:mb-12 sm:ml-0 w-[96px] h-[22px] mb-4"></div>

                <div onClick={() => { openNav() }} style={{ backgroundImage: `url(${!open ? hamburger : closeIcon})` }} className="mr-4 sm:w-[85px] w-[24px] sm:h-[85px] h-[24px]  flex bg-contain mb-4"></div>

                {!open && <div className="sm:flex hidden flex-col items-center mt-[131px]">
                    <h1 className="text-white -rotate-90 mb-12 font-bold">
                        {locationGetter()}
                    </h1>

                    <div className="w-px bg-white h-[120px]">

                    </div>
                </div>}

                {open && <div className='text-white sm:mt-2 mt-12 flex flex-col items-center'>
                    <NavLink onClick={() => { openNav(false) }}
                        className="text-5xl text-center m-6 font-bold"
                        activeClassName="text-5xl text-center m-6 font-bold text-[#ffff00]"
                        to="/"
                        exact
                    >
                        Home
                    </NavLink>
                    <NavLink onClick={() => { openNav(false) }}
                        className="text-5xl text-center m-6 font-bold"
                        activeClassName="text-5xl text-center m-6 font-bold text-[#ffff00]"
                        to="/about"
                        exact
                    >
                        About
                    </NavLink>
                    <NavLink onClick={() => { openNav(false) }}
                        className="text-5xl text-center m-6 font-bold"
                        activeClassName="text-5xl text-center m-6 font-bold text-[#ffff00]"
                        to="/services"
                        exact
                    >
                        Services
                    </NavLink>
                    <NavLink onClick={() => { openNav(false) }}
                        className="text-5xl text-center m-6 font-bold"
                        activeClassName="text-5xl text-center m-6 font-bold text-[#ffff00]"
                        to="/contact"
                        exact
                    >
                        Contact
                    </NavLink>

                </div>}
            </div>

        </div >
    )
}

export default NavBar
