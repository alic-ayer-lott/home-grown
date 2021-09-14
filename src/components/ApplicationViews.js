import React from "react"
import { Route } from "react-router-dom"
import { PlantList } from "./plants/PlantList"
// import { MyGarden } from "./gardens/MyGarden"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/mygarden">
                <PlantList />
            </Route>
        </>
    )
}
