import { useEffect, useState } from 'react';
import "./MyGarden.css"

export const MyGarden = () => {
  const [plants, updatePlants] = useState([])
  const [orders, populateOrders] = useState([]) //orders is copy of userId; make copy in buildOrderObject; expanding user on fetch
  const [order, updateOrder] = useState({
    userId: parseInt(localStorage.getItem("grow_customer"))
  })
  const [chosenOptions, updateOptions] = useState({
    plant: "Click Available Seed"
  })

  const userId = parseInt(localStorage.getItem("grow_customer"))


  const orderFetcher = () => {
    fetch(`http://localhost:8088/plantsByUsers?userId=${userId}&_expand=user&_expand=plant&_sort=user`)
      .then(response => response.json())
      .then((data) => {
        // console.log("Got plants response from API")
        populateOrders(data)
      })
  } //using JSON to to filter the users; allows to use locally; putting new data into populateOrders function

  useEffect(
    () => {
      fetch(`http://localhost:8088/plants`)
        .then(response => response.json())
        .then((apiPlantData) => {
          // console.log("Got plants response from API")
          updatePlants(apiPlantData)
        })

      orderFetcher()
    },
    []
  )

  const buildOrderObject = (idToModify, newValue) => {
    const newOrder = { ...order } // newOrder is a copy of order
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
  } //using delete method to delete only clicked id delete function then get data again without deleted object with orderFetcher()



  return (
    <>
      {/* first step */}
      <div className="container--mygarden">
        <h1>Available Seeds</h1>
        <article className="plantButtonOptions">
          {
            plants.map( //mapping through plant array to show the name of all available plants
              (plantObject) => <button className="plantButton"
                onClick={
                  () => {
                    updateOrderState("plant", plantObject.name) //update seed chosen option; passing plant as propToModify and plantObject.name as newValue
                    buildOrderObject("plantId", plantObject.id) //update my garden list; passing plantId as idToModidy; plantObject.id passing in as newValue
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

        <button className="save--button" onClick={
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
        } //posting saved seed options after clicking save seeds button and converting object to readable string; take data and POST it to URL API; making data permanent

        >Save Seeds</button>

        <h1>My Garden</h1>

        <article className="chosenPlantList">
          {
            orders.map(order => { //mapping through orders array
              return <div>
                {order.plant.name}
                <button className="delete--button" onClick={() => {
                  deletePlant(order.id)
                }}>Delete</button>

              </div>
            })}
        </article>
      </div>
    </>
  );
}