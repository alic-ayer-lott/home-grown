import { useEffect, useState } from 'react';

export const MyGarden = () => {
  const [plants, updatePlants] = useState([])
  const [orders, populateOrders] = useState([])
  const [order, updateOrder] = useState({
        userId:parseInt(localStorage.getItem("grow_customer"))
  })
  const [chosenOptions, updateOptions] = useState({
    plant: "Choose Seed"
  })


  useEffect(
    () => {
      console.log("Plants state changed", plants)
    },
    [plants]
  )

  const orderFetcher = () => {
    fetch(`http://localhost:8088/plantsByUsers?_expand=user&_expand=plant`)
      .then(response => response.json())
      .then((data) => {
        console.log("Got plants response from API")
        populateOrders(data)
      })
  }

  useEffect(
    () => {
      fetch(`http://localhost:8088/plants`)
        .then(response => response.json())
        .then((apiPlantData) => {
          console.log("Got plants response from API")
          updatePlants(apiPlantData)
        })

      orderFetcher()
    },
    []
  )

  useEffect(
    () => {
      console.log("Options updated", chosenOptions)
    },
    [chosenOptions]
  )

  useEffect(
    () => {
      console.log("Plant state changed", plants)
    },
    [plants]
  )

  const buildOrderObject = (idToModify, newValue) => {
    const newOrder = { ...order }
    newOrder[idToModify] = newValue
    updateOrder(newOrder)
  }

  const updateOrderState = (propToModify, newValue) => {
    const newObject = { ...chosenOptions }  // Copy of state
    newObject[propToModify] = newValue
    updateOptions(newObject)              // Update state with copy
  }


  return (
    <>
      {console.log(`JSX rendered`)}

      <h2>Available Seeds</h2>

      <main className="plants">
        <article className="plant options">
          {
            plants.map(
              (plantObject) => <button
                onClick={
                  () => {
                    updateOrderState("plant", plantObject.name)
                    buildOrderObject("plantId", plantObject.id)
                  }
                }
                key={`plant--${plantObject.id}`}>
                {plantObject.name}
              </button>
            )
          }
        </article>

      </main>

      <article>

        <p>Seed: {chosenOptions.plant}</p>
      </article>

      <button onClick={
        () => {
          const fetchOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
          }

          fetch(`http://localhost:8088/plantsByUsers`, fetchOptions)
            .then(() => {
              orderFetcher()
            })
        }
      }>Save Seeds</button>

      <h2>My Garden</h2>

      <article className="chosenPlantList">
        {
          orders.map(order => {
            return <div>
              {order.plant.name}
            </div>
          })
        }
      </article>
    </>
  );
}