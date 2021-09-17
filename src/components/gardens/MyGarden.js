import { useEffect, useState } from 'react';
import "./MyGarden.css"

export const MyGarden = () => {
  const [plants, updatePlants] = useState([])
  const [orders, populateOrders] = useState([])
  const [order, updateOrder] = useState({
    userId: parseInt(localStorage.getItem("grow_customer"))
  })
  const [chosenOptions, updateOptions] = useState({
    plant: "Click Available Seed"
  })

  const userId = parseInt(localStorage.getItem("grow_customer"))


  useEffect(
    () => {
      console.log("Plants state changed", plants)
    },
    [plants]
  )

  const orderFetcher = () => {
    fetch(`http://localhost:8088/plantsByUsers?userId=${userId}&_expand=user&_expand=plant&_sort=user`)
      .then(response => response.json())
      .then((data) => {
        console.log("Got plants response from API")
        populateOrders(data)
      })
  } //using JSON to to filter the users

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

  const deletePlant = (id) => {
    fetch(`http://localhost:8088/plantsByUsers/${id}`, {
      method: "DELETE"
    })
      .then(
        () => {
          orderFetcher()
        }
      )
  } //use delete function then get data again without deleted object with orderFetcher()



  return (
    <>
      {console.log(`JSX rendered`)} 
      {/* first step */}
      <div className="container--mygarden">
        <h1>Available Seeds</h1>
        <article>
          {
            plants.map(
              (plantObject) => <button className="plantButton"
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
        } //posting saved seed options after clicking save seeds button

        >Save Seeds</button>

        <h1>My Garden</h1>

        <article className="chosenPlantList">
          {
            orders.map(order => {
              return <div>
                {order.plant.name}
                <button onClick={() => {
                  deletePlant(order.id)
                }}>Delete</button>

              </div>
            })}
        </article>
      </div>
    </>
  );
}