import React, { useRef, useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menuOpen from '../../assets/menu_open.svg'
import menuClose from '../../assets/menu_close.svg'

const Navbar = () => {
    // Setting the initial active menu to 'home'
    const [menu, setMenu] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef();

    //open the side menu
    const openMenu = () => {
        menuRef.current.style.right = "0";
        setIsMenuOpen(true);
    }

    //for closing the side menu
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
        setIsMenuOpen(false);
    }

    // Function to handle menu item click and set the active menu
    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
    }

    return (
        <div className='navbar container-fluid'>
            <h1> Devika </h1>

            {/* ------------------ Side Menu Open Icon ------------- */}
            <img src={menuOpen} onClick={openMenu} className='nav-mobile-open' alt="open menu" />

            <ul className='nav-menu' ref={menuRef}>

                {/* ------------------Side Menu Close Icon ------------- */}
                <img src={menuClose} onClick={closeMenu} className='nav-mobile-close' alt="close menu" />

                <li className={menu === 'home' ? 'active' : ''} onClick={() => handleMenuClick('home')}>
                    <AnchorLink className='anchor-link' href='#hero' >Home </AnchorLink>
                </li>

                <li className={menu === 'about' ? 'active' : ''} onClick={() => handleMenuClick('about')}>
                    <AnchorLink className='anchor-link' offset={50} href='#about' > About Me </AnchorLink>
                </li>

                <li className={menu === 'services' ? 'active' : ''} onClick={() => handleMenuClick('services')} >
                    <AnchorLink className='anchor-link' offset={50} href='#service' >  Services </AnchorLink>
                </li>

                <li className={menu === 'projects' ? 'active' : ''} onClick={() => handleMenuClick('projects')} >
                    <AnchorLink className='anchor-link' offset={50} href='#project' > Projects </AnchorLink>
                </li>

                <li className={menu === 'contact' ? 'active' : ''} onClick={() => handleMenuClick('contact')} >
                    <AnchorLink className='anchor-link' offset={50} href='#contact' > Contact </AnchorLink>
                </li>
            </ul>

            {/* --------- connect with me button ------------  */}
            <button className="nav-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with me </AnchorLink></button>
        </div>
    );
};

export default Navbar;
