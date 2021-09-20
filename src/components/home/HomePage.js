import HomeGrown from "../images/homegrown.png"
import "./HomePage.css"

export const HomePage = () => {
    return (
        <main class="main--home">
            <h2>Plan for your best harvest to date with HomeGrown!</h2>
        <img src={HomeGrown} class="home--logo"alt="HomeGrown logo" />
        </main>
    )
}