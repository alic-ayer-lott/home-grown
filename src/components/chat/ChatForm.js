import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import "./Chat.css"

export const ChatForm = () => {

    const [post, createPost] = useState({
        tip: "",
    })
    const history = useHistory()

    const savePost = (evt) => {
        evt.preventDefault()

        const newPost = {
            tip: post.tip,
            userId: parseInt(localStorage.getItem("grow_customer"))
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        }

        return fetch("http://localhost:8088/posts", fetchOption)
            .then(() => {
                history.push("/chat")
            })
    }

    return (
        <form className="chatForm">
            <h2 className="chatForm--title">New Post</h2>
            <fieldset>
                <div className="form--dets">
                    {/* <label htmlFor="post">Tip:</label> */}
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...post }
                                copy.tip = evt.target.value //modify tip property
                                createPost(copy) // copy is new state
                            }
                        } //event listener to update tip property; capture event that is passed as parameter
                        required autoFocus
                        type="text" id="post"
                        className="form-control"
                        placeholder="Please type your favorite gardening tip!"
                    />
                </div>
            </fieldset>
            <button onClick={savePost} className="btn-save">
                Save
            </button>
        </form>
    )
}