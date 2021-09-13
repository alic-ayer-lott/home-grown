import React, { useEffect, useState } from "react"

export const HomeGrown = () => {
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
            <h1>Home Grown</h1>

            {
                plants.map(
                    (plantObject) => {
                        return <h2>{plantObject.name}</h2>
                    }
                )
            }
        </>
    )
}
