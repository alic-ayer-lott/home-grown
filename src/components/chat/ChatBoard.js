import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import "./Chat.css"

export const ChatBoard = () => {
    const [posts, updatePosts] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/posts?_expand=user")
                .then(res => res.json())
                .then((newData) => {
                    updatePosts(newData)
                })
        },
        []
    )

    const postFetcher = () => {
        fetch(`http://localhost:8088/posts?_expand=user`)
            .then(response => response.json())
            .then((data) => {
                updatePosts(data)
            })
    }

    const deletePost = (id) => {
        fetch(`http://localhost:8088/posts/${id}`, {
            method: "DELETE"
        })
            .then(
                () => {
                    return postFetcher()
                }
            )
    }

    return (
        <>
            <main className="main--chat">

                {
                    posts.map(
                        (post) => {
                            return <div className="single__post" key={`post--${post.id}`}>
                                {post.tip} Posted by: {post.user?.name}
                                <p><button className="delete-post-button" onClick={() => {
                                    deletePost(post.id)
                                }}>Delete</button></p>

                            </div>
                        }
                    )
                }

                <div className="new__button">
                    <button className="new-post-button" onClick={() => history.push("/chat/post")}>New Post</button>
                </div>

            </main>
        </>
    )
}