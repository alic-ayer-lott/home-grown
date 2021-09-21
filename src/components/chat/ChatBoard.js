import React, {useEffect, useState} from "react"
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
                    </p>
                }
            )
        }


        </>
    )
}