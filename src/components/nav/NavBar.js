import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="">Planner</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/plants">My Garden</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="">Logout</Link>
            </li>
        </ul>
    )
}
