import React from "react"
import { Route } from "react-router-dom"
import { MyGarden } from "./gardens/MyGarden"
import { HomePage } from "./home/HomePage"
import { Planner } from "./planner/Planner"


export const ApplicationViews = () => {
    return (
        <>
            <Route path="/mygarden">
                <MyGarden />
            </Route>
            <Route path="/home">
                <HomePage />
            </Route>
            <Route path="/planner">
                <Planner />
            </Route>
        </>
    )
}
