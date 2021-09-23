import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import logoOnly from "../images/logoOnly.png"
//create NavBar to have links to home, planner, mygarden, and logout

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/mygarden">MY GARDEN</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/planner">PLANNER</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/chat">GARDENING TIPS</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/login"
                onClick={
                    () => {
                        localStorage.removeItem("grow_customer")
                    }
                }>
                    LOGOUT
                </Link>
            </li>
            <li className="navbar__item">
            <img src={logoOnly} className="logo--nav" alt="HomeGrown logo" />
            </li>
        </ul>
    )
}
