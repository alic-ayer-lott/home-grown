import React from "react"
import { Route } from "react-router-dom"
import { MyGarden } from "./gardens/MyGarden"
import { HomePage } from "./home/HomePage"


export const ApplicationViews = () => {
    return (
        <>
            <Route path="/mygarden">
                <MyGarden />
            </Route>
            <Route exact path="/">
                <HomePage />
            </Route>
        </>
    )
}
