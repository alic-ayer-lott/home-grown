import React from "react"
import { Route } from "react-router-dom"
import { PlantList } from "./plants/PlantList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/plants">
                <PlantList />
            </Route>
        </>
    )
}
