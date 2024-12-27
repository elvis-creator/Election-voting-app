import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { IoIosMoon } from 'react-icons/io';
import { IoMdSunny } from 'react-icons/io';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { AiOutlineClose } from 'react-icons/ai';


function Navbar() {

    const [showNav, setShowNav] = useState(false)
    const [darkTheme, setDarkTheme] = useState(localStorage.getItem('voting-app-theme'))

//function to close nav menu on small screen when menu link is clicked 
    const closeNavMenu = () => {
        if(window.innerWidth < 600) {
            setShowNav(false);
        }
        else{
            setShowNav(true)
        }
    }

//function to change toggle theme
    const changeTheme = ()=> {
        if(localStorage.getItem('voting-app-theme') === 'dark' ) {
            localStorage.setItem('voting-app-theme', '')
        }
        else {
            localStorage.setItem('voting-app-theme', 'dark')
        }
        setDarkTheme(localStorage.getItem('voting-app-theme'))
    }

    useEffect( ()=> {
       document.body.className = localStorage.getItem('voting-app-theme');
    }, [darkTheme])




  return (
    <nav>
        <div className="container nav-container">
            <Link to="/" className='nav-logo'>EL DEV</Link>
            <div>
                { showNav &&
                <menu>
                    <NavLink to="/election" onClick={closeNavMenu} >Elections</NavLink>
                    <NavLink to="/results" onClick={closeNavMenu} >Results</NavLink>
                    <NavLink to="/logout" onClick={closeNavMenu} >Logout</NavLink>
                </menu> }
                <button className="theme-toggle-btn" onClick={changeTheme}> {darkTheme ? <IoMdSunny/> : <IoIosMoon/>} </button>
                <button onClick={ ()=>{setShowNav(!showNav)} } className="nav-toggle-btn"> { showNav ? <AiOutlineClose/>:<HiOutlineBars3/>} </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;