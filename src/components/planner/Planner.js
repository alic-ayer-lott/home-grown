import React, { useEffect, useState } from "react"
import "./Planner.css"

export const Planner = () => {
    const [seasons, showSeasons] = useState([])
    const [chosenSeasons, chooseSeasons] = useState({
        season: "Choose Season"
    })
    const [viableSeeds, showSeeds] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/seasons")
                .then(res => res.json())
                .then((seasonArray) => {
                    showSeasons(seasonArray)
                })
            //get seasons data from API and pull into application state
            //initiate http request to local API for seasons data
            //convert json encoded string to javascript
            //invoke showSeasons function and store seasonArray as seasons

        },
        []
    )

    useEffect(
        () => {
            fetch("http://localhost:8088/plantsBySeasons?_expand=plant&_expand=season")
            .then(res => res.json())
            .then((viableArray) => {
                showSeeds(viableArray)
            })
        },
        []
    )

    const updateSelectedSeason = (propToMod, newValue) => {
        const newSeason = { ...chosenSeasons }
        newSeason[propToMod] = newValue
        chooseSeasons(newSeason)
    }

    return (
        <>
            <main className="planner--options">

                <div className="desired__season">

                <h1>Please select desired planting season.</h1>

                <article className="season--options">
                    {
                        seasons.map(
                            (seasonObject) => <button className="season__button"
                                onClick={
                                    () => {
                                        updateSelectedSeason("season", seasonObject.season)
                                    }
                                }>
                                {seasonObject.season}
                            </button>
                            //itterate through seasons array to render the seasonObject's season
                        )
                    }

                </article>

                </div>

                {/* <p>Season: {chosenSeasons.season}</p> */}

                <div className="available__container">

                <h1>Available seeds to plant in {chosenSeasons.season} :</h1>

                <article className="viable--options">
                    {
                        viableSeeds.map((seed) => {
                            if (seed.season.season === chosenSeasons.season)
                                return <div>{seed.plant.name}</div>
                        }
                        )
                    }



                </article>
                </div>

            </main>
        </>
    )

}
