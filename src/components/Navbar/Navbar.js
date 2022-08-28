import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import './Navbar.css'
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    <div>
      <nav id="home" className={toggle ? 'navbar expanded' : 'navbar'}>
          <h2>
            <a href="#home" className='logo'>CT.</a>
          </h2>
          <ul className="links">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        <div className="toggle-icon" onClick={handleToggle}>
          {toggle ? <FiX className="menu" /> : <FiMenu className="menu" />}
        </div>
      </nav>
    </div>

  )
}
export default Navbar