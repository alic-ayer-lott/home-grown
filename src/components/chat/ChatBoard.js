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
                <div>
                    <button onClick={() => history.push("/chat/post")}>New Post</button>
                </div>

                {
                    posts.map(
                        (post) => {
                            return <p key={`post--${post.id}`}>
                                {post.tip} submitted by {post.user?.name}
                                <button onClick={() => {
                                    deletePost(post.id)
                                }}>Delete</button>

                            </p>
                        }
                    )
                }

            </main>
        </>
    )
}