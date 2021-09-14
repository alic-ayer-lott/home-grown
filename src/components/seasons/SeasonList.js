import React, { useEffect, useState } from "react"

export const SeasonList = () => {
    const [seasons, setSeasons] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/seasons")
                .then(res => res.json())
                .then((seasonArray) => {
                    setSeasons(seasonArray)
                })
        },
        []
    )

    return (
        <>

            {
                seasons.map(
                    (seasonObject) => {
                        return <h2 key={`season--${seasonObject.id}`}>{seasonObject.season}</h2>
                    }
                )
            }
        </>
    )
}
