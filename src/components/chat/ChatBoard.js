import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"

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
        fetch(`http://localhost:8088/posts`)
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
                    postFetcher()
                }
            )
    }

    return (
        <>
            <div>
                <button onClick={() => history.push("/chat/post")}>New Post</button>
            </div>

            {
                posts.map(
                    (post) => {
                        return <p key={`post--${post.id}`}>
                            {post.tip} submitted by {post.user.name}
                            <button onClick={() => {
                                deletePost(post.id)
                            }}>Delete</button>

                        </p>
                    }
                )
            }


        </>
    )
}