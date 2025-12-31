import React from "react";
const Footer = () => {
    return(
        <footer className = "bg-[#2F303A] text-white font-bold py-8 px-6 md:px-60">
            <nav className=" w-full flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0" >
                <div className = "flex gap-10">
                    <p>About Us</p>
                    <p>Contact</p>
                </div>
                <div className = "flex gap-6">
                    <div className= "flex items-center gap-2">
                        <img src="/images/twitter.svg" alt = "twitter logo" />
                        <p>Twitter</p>
                    </div>
                    <div className= "flex items-center gap-2">
                        <img src="/images/facebook.svg" alt = "facebook logo" />
                        <p>Facebook</p>
                    </div>
                </div>
            </nav>
        </footer>
    );
};
export default Footer;