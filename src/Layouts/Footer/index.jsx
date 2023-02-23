import React from 'react'
import { NavLink } from "react-router-dom";
import './style.scss'
function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <div className='footer-links'>
                    <ul>
                        <li>
                            <NavLink className='footer-listing'>Satış Sözlenmesi</NavLink>
                        </li>
                        <li>
                            <NavLink className='footer-listing'>Ödeme ve Teslimat</NavLink>
                        </li>
                        <li>
                            <NavLink className='footer-listing'>Gizlilik Politikası</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='instagram-Link'>
                    <img src="https://static.wixstatic.com/media/da7ef6dd1302486c9a67baebe4b364bc.png/v1/fill/w_36,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/da7ef6dd1302486c9a67baebe4b364bc.png" alt="" />
                    <span>Eppek.net</span>
                </div>
            </div>

        </div>
    )
}

export default Footer