import React, { useEffect, useState } from "react"

export const Planner = () => {
    const [seasons, showSeasons] = useState([])

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

                                    }
                                }>
                                {seasonObject.season}
                            </button>
                            //itterate through seasons array to render the seasonObject's season
                        )
                    }
                </article>

                <h1>Viable Seeds</h1>

            </main>
        </>
    )

}