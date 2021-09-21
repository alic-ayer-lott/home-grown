import React from "react"
import { Route } from "react-router-dom"
import { MyGarden } from "./gardens/MyGarden"
// import { HomePage } from "./home/HomePage"
import { ChatBoard } from "./chat/ChatBoard"
import { ChatForm } from "./chat/ChatForm"
import { Planner } from "./planner/Planner"


export const ApplicationViews = () => {
    return (
        <>
            <Route path="/mygarden">
                <MyGarden />
            </Route>
            <Route path="/planner">
                <Planner />
            </Route>
            <Route exact path="/">
                <MyGarden />
            </Route>
            <Route exact path="/chat">
                <ChatBoard />
            </Route>
            <Route exact path="/chat/post">
                <ChatForm />
            </Route>
        </>
    )
}
