// import React, { useEffect, useState } from "react"

// export const PlantList = () => {
//     const [plants, seePlants] = useState([])

//     useEffect(
//         () => {
//           fetch(`http://localhost:8088/plants`)
//             .then(response => response.json())
//             .then((apiPlantData) => {
//               console.log("Got plants from API")
//               seePlants(apiPlantData)
//             })
//         },
//         []
//       )
    
//       useEffect(
//         () => {
//           console.log("Plants state changed", plants)
//         },
//         [plants]
//       )
    
    
//       return (
//         <>
//             <article className="plant options">
//               {
//                 plants.map(
//                   (plantObject) => <button
//                     onClick={
//                       () => {
//                       }
//                     }
//                     key={`plant--${plantObject.id}`}>
//                     {plantObject.name}
//                   </button>
//                 )
//               }
//             </article>
//         </>
//       );
//     }