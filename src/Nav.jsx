import React, { useEffect, useState } from 'react'
import "./Nav.css"
import {useHistory} from "react-router-dom"
const Nav = () => {
    const [show, handleShow] = useState(false)
    const history = useHistory()

    const transitionNavbar = () =>{
        if(window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", transitionNavbar)
        return () => window.removeEventListener("scroll", transitionNavbar)
    },[])
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__content">
        <img 
        onClick={() => history.push("/")}
        className='nav__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" 
        alt="" />
        <img 
        onClick={() => history.push("/profile")}
        className='nav__avatar'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel4c26sEwdj81loUzjfgikPTZXdlfHh3MnJAcKP2vkA&s" 
        alt="" />
        </div>
    </div>
  )
}

export default Nav