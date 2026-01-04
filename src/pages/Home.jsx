import { Link } from "react-router";

const Home =() => {
    return (
        <section className="relative flex gap-50 items-center justify-center flex-col md:flex-row py-60 md:py-30">
           
            <div className="absolute top-[1%] left-[35%] w-50 h-50 md:w-100 md:h-100 bg-circle2 rounded-full z-[-1]"></div>
            <div className="absolute bottom-[-20%] md:bottom-[-10%] right-[-10%] w-50 h-50 md:w-170 md:h-170 bg-circle2 rounded-full z-[-1]"></div>
            <div className="absolute bottom-[-8%] md:bottom-[20%] left-[10%] w-50 h-50 md:w-100 md:h-100 bg-circle1 rounded-full z-[-1]"></div>

            <div className="hidden md:block">
                <img src="/images/landing-page-girl.png" alt="girl listen music" className="w-130 hidden md:block"/>
            </div>
            <div className="max-w-sm">
                <h1 className="text-5xl font-medium">Feel the music</h1>
                <p className="py-8">Steam over 20 thousand songs with one click</p>
                <Link to="/login" className="bg-button-bck py-3 px-5 rounded-md hover:bg-button-hover focus:bg-button-focus">Join Now</Link>
            </div>
        </section>
    )
}
export default Home;