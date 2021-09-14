import React, { useEffect, useState } from "react"
import { PlantList } from "../plants/PlantList"
import { useHistory } from "react-router-dom"

export const MyGarden = () => {
    const [plants, choosePlants] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/plantsByUsers")
                .then(res => res.json())
                .then((data) => {
                    choosePlants(data)
                })

        },
        []
    )

    return (
        <>
        <PlantList />

        </>
    )
}
