import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"


export const HomeGrown = () => {

    return (
        <>
            <NavBar />
            <h1>Home Grown</h1>
    
            <ApplicationViews />

        </>
    )
}
