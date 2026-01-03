import { Link } from "react-router";

const Home =() => {
    return (
        <section >
            <div>
                <img src="/images/landing-page-girl.png" />
            </div>
            <div>
                <h1>Feel the music</h1>
                <p>Steam over 20 thousand songs with one click</p>
                <Link to="/join">Join Now</Link>
            </div>
        </section>
    )
}
export default Home;