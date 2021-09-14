import React, { useEffect, useState } from "react"

export const ZoneList = () => {
    const [zones, setZones] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/zones")
                .then(res => res.json())
                .then((zoneArray) => {
                    setZones(zoneArray)
                })
        },
        []
    )

    return (
        <>

            {
                zones.map(
                    (zoneObject) => {
                        return <h2 key={`zone--${zoneObject.id}`}>{zoneObject.zoneNumber}</h2>
                    }
                )
            }
        </>
    )
}
