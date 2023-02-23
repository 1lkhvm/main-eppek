import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.scss'

const Navbar = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (

        <div className="navbar-container">
            <div className="mobile-nav">


                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>

                </div>
            </div>
            {/* responsive bar menu */}
            <div className={menu_class}>
                <div className="navbar-mobile-menu">

                    <li>
                        <Link className='nav-listing-mobile' to={`/Shop-Kargo`}>Shop</Link>

                    </li>
                    <li>
                        <Link className='nav-listing-mobile' to={`/Mill`}>Değirmen</Link>
                    </li>
                    <li>
                        <Link className='nav-listing-mobile' to={`/Contact`}>İletişim</Link>
                    </li>



                </div>

            </div>
            {/* responsive bar menu end */}
            <div className="navbar" >



                <div className="navbar-menu">
                    <ul>
                        <li>
                            <Link className='nav-listing' to={`/Shop-Kargo`}>Shop</Link>

                        </li>
                        <li>
                            <Link className='nav-listing' to={`/Mill`}>Değirmen</Link>
                        </li>
                        <li>
                            <Link className='nav-listing' to={`/Contact`}>İletişim</Link>
                        </li>
                    </ul>
                </div>
                <div className="eppek-logo">
                    <Link to={"/"}>
                        <img src="https://static.wixstatic.com/media/d7323f_1934e318bccd45789af4e662463ffe97~mv2.png/v1/crop/x_0,y_159,w_800,h_465/fill/w_150,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/eppek_logo-nT-white-transparent.png" alt="/" />
                    </Link>

                </div>

                <div className="nav-login-basket">
                    <div className='nav-login'>
                        {localStorage.getItem("username") ? 
                        <>
                        <span style={{ color: "white" }} className=""> {localStorage.getItem("username")}  </span> 
                        <Link to="/logout" > Logout  </Link> 
                        </>
                        :
                            <Link className='nav-logining' to={`/Login`}>
                                <i className='fa-solid fa-circle-user'></i>
                            </Link>}
                    </div>
                    
                    <div className='nav-shop-basket' >
                        <i className="fa-solid fa-store" ></i>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Navbar
