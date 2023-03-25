/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./Footer.css"
export const Footer = () => {
    return(
        <>
        <footer class="footer">
        <div class="container">
            <nav class="nav">
            <div class="nav__logo-footer">Search for Books</div>
                <ul class="nav__list nav__list-logo">
                    <li><a href="#" >Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li ><a href="#">Contact</a></li>  
                </ul>
                <div class="nav__login">
                    <div class="nav__iu-bl"><a href="#">Sign up</a></div>
                    <div class="nav__cont"><a class="nav__sign" href="#">Contacts</a></div>
                </div>



            </nav>
        </div>
    </footer>
    </>
    )
        
}