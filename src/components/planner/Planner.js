import { useEffect, useState } from 'react';


export const Planner = () => {
    const [seasons, pickSeasons] = useState([])
    const [avilableSeasons, unnamedFunction] = useState([])
    const [chosenOptions, updateSeasons] = useState({
        season: "Choose Seed"
      })

      useEffect(
          () => {
              console.log("Season state changed", seasons)
        },
        [seasons]
      )


    const updateSeasonState = (propToModify, newValue) => {
        const newSeason = {...avilableSeasons}
        newSeason[propToModify] = newValue
        updateSeasons(newSeason)
    }

    return (
        <main className="main--planner">

            <h2>Which season?</h2>
            <article className="season--list">
                {
                    seasons.map(
                        (seasonObject) => <button
                            onClick={
                                () => {
                                    updateSeasonState("season", seasonObject.name)
                                 }
                            }
                            key={`season--${seasonObject.id}`}>
                            {seasonObject.name}
                        </button>
                    )
                }

            <h2>Viable Plants</h2>

            </article>

        </main>
    )
}

//user will have a zoneId
//zone will have a zoneNumber
//there will be a box where season options render
//box where viablePlants will render; user can chose and add to garden