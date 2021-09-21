import React from "react"
import { Route } from "react-router-dom"
import { MyGarden } from "./gardens/MyGarden"
import { HomePage } from "./home/HomePage"
import { ChatBoard } from "./chat/ChatBoard"
import { ChatForm } from "./chat/ChatForm"


export const ApplicationViews = () => {
    return (
        <>
            <Route path="/mygarden">
                <MyGarden />
            </Route>
            <Route exact path="/">
                <HomePage />
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
