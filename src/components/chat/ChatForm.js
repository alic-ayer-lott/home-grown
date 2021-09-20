import React, { useState } from "react"

export const ChatForm = () => {

    const [post, createPost] = useState({
        tip:"",
    })

    const savePost = () => {
        const newPost = {
            tip: post.tip,
            userId: parseInt(localStorage.getItem("grow_customer"))
        }
    }

    return (
        <form className="chatForm">
            <h2 className="chatForm--title">New Post</h2>
        <fieldset>
            <div className="form--dets">
                <label htmlFor="post">Tip:</label>
                <input
                    onChange={
                        (evt) => {
                            const copy = {...post}
                            copy.tip = evt.target.value //modify tip property
                            createPost(copy)
                        }
                    } //event listener to update tip property; capture event that is passed as parameter
                    required autoFocus
                    type="text" id="post"
                    className="form-control"
                    placeholder="Please type your favorite gardening tip!"
                    />
            </div>
        </fieldset>
        <button className="btn-save">
            Save
        </button>
        </form>
    )
}