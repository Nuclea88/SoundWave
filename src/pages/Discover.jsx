const Discover = () => {
    return (
       <section className="relative flex gap-10 items-center justify-center flex-col md:flex-row py-10 md:py-30">
        <div className="px-10">
            <h1 className="text-5xl font-medium">Discover new music</h1>
            <div className="flex gap-10 py-10">
                <div className="bg-footer-icons py-4 px-6">
                    <img src="/images/microphone.svg" alt="Microphone" />
                    <p className="py-1">Charts</p>
                </div>
                <div className="bg-footer-icons py-4 px-6">
                    <img src="/images/albums.svg" alt="Albums"/>
                    <p className="py-1">Albums</p>
                </div>
                <div className="bg-footer-icons py-4 px-6">
                    <img src="/images/more.svg" alt="Arrow more"/>
                    <p className="py-1">More</p>
                </div>
               
            </div>
            <p>By joining you can benefit by listeting to the latest albums released</p>
        </div>
        <div className="px-10">
            <img src="/images/covers.jpg" className="w-[60vw] md:w-[25vw]" />
        </div>
        </section>
    )
}
export default Discover;