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
        <h1>Available Plants</h1>
            {
                plants.map(
                    (plantObject) => {
                        return <ul><h2 key={`plant--${plantObject.id}`}><input type="radio" />{plantObject.name}</h2></ul>
                    }
                )
            }
        </>
    )
}
