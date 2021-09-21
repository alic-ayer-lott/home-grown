import React, { useEffect, useState } from "react"

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
            <main className="planner-options">

                <h1>Select Season</h1>

                <article className="season--options">
                    {
                        seasons.map(
                            (seasonObject) => <button
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

                {/* <p>Season: {chosenSeasons.season}</p> */}

                <h1>Seeds to plant in {chosenSeasons.season} :</h1>

                <article className="viable--options">
                    {
                        viableSeeds.map((seed) => {
                            if (seed.season.season === chosenSeasons.season)
                                return <button>{seed.plant.name}</button>
                        }
                        )
                    }



                </article>

            </main>
        </>
    )

}
