import React from "react"
import { PlantList } from "./plants/PlantList"
import { SeasonList } from "./seasons/SeasonList"
import { ZoneList } from "./zones/ZoneList"


export const HomeGrown = () => {

    return (
        <>
            <h1>Home Grown</h1>
            <PlantList />
            <SeasonList />
            <ZoneList />

        </>
    )
}
