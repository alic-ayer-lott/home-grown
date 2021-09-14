import React, { useEffect, useState } from "react"

export const PlantList = () => {
    const [plants, seePlants] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/plants")
                .then(res => res.json())
                .then((plantArray) => {
                    seePlants(plantArray)
                })
        },
        []
    )

    return (
        <>

            {
                plants.map(
                    (plantObject) => {
                        return <h2 key={`plant--${plantObject.id}`}>{plantObject.name}</h2>
                    }
                )
            }
        </>
    )
}
