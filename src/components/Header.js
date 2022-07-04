import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../assets/css/header.css'
import {Logo} from './Images'
function Header()
{
    const [isShow,setIsShow] = useState(false)
    return <>
    <header className='custom-header'>
        <div className='logo-section'>
        <img src={Logo}/>
        </div>
            <div className={isShow ? "header-main header-show" : "header-main header-hide"}>
            <div className='mobile-header-top'>
            <img src={Logo}/>
            <i class="fa-solid fa-xmark" onClick={(e) =>setIsShow(false)}></i>
            </div>
            <ul className='header-body'>
                <li>
                    <NavLink to={"/"}>BEGINNING</NavLink>
                </li>
                <li>
                    <NavLink to={"/we-are-java"}>WE ARE JAVA</NavLink>
                </li>
                <li>
                    <NavLink to={"/menu"}>MENU</NavLink>
                </li>
                <li>
                    <NavLink to={"/shop"}>SHOP</NavLink>
                </li>
                <li>
                    <NavLink to={"/offices"}>BRANCH OFFICES</NavLink>
                </li>
                <li>
                    <NavLink to={"/investment"}>INVESTMENT</NavLink>
                </li>
                <li>
                    <NavLink to={"/race"}>RACE</NavLink>
                </li>
                <li>
                    <NavLink to={"/blog"}>BLOG</NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"}>CONTACT</NavLink>
                </li>
            </ul>
            <div className='header-bottom'>
                <button className='btn primary-btn'>DOWNLOAD APP</button>
            </div>
            </div>
            <i class="fa-solid fa-bars mobile-show" onClick={setIsShow}></i>
            <button className='btn primary-btn mobile-hide'>DOWNLOAD APP</button>
    </header>
    </>
}

export default Header;