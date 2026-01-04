import Phorm from "../components/organism/Phorm";

const Login = () => {
    return (
      <section className="px-10 py-10 md:gap-50 flex flex-col md:flex-row md:items-center justify-center gap-10 mb-40">
        <div className="absolute top-[1%] left-[20%] w-50 h-50 md:w-120 md:h-120 bg-circle2 rounded-full z-[-1]"></div>
        <div className="absolute bottom-[-8%] md:bottom-[1%] left-[10%] md:left-[-1%] w-50 h-50 md:w-120 md:h-120 bg-circle1 rounded-full z-[-1]"></div>

        <div className="md:py-10">
            <h1 className="text-6xl font-bold leading-relaxed">Join the <br className="md:hidden"></br><span className="text-acent-text">fun.</span></h1>
        </div>
        <div className="bg-footer-icons  rounded-xl md:w-1/3 ">
                <Phorm />
        </div>
        </section>
    )
}
export default Login;