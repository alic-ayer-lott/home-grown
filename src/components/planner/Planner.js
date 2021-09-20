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

        },
        []
    )

    return (
        <>
            <h1>Select Season</h1>

            {
                seasons.map(
                    (seasonObject) => <button>
                        {seasonObject.season}
                    </button>
                )
            }
        </>
    )

}