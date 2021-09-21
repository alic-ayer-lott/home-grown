import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
//create NavBar to have links to home, planner, mygarden, and logout pages
export const NavBar = () => {
    return (
        <ul className="navbar">
            {/* <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li> */}
            <li className="navbar__item active">
                <Link className="navbar__link" to="/mygarden">My Garden</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/planner">Planner</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/chat">Gardening Tips</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/login"
                onClick={
                    () => {
                        localStorage.removeItem("grow_customer")
                    }
                }>
                    Logout
                </Link>
            </li>
        </ul>
    )
}
