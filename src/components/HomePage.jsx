import React, { useEffect, useState } from "react";
import mobile from '../assets/images/illustration-sign-up-mobile.svg';
import desktop from '../assets/images/illustration-sign-up-desktop.svg'
import Content from "./Content";

function HomePage({ handleClick }) {

    const [isMobile, setMobile] = useState(false)

    useEffect(() => {
        if (window.screen.width <= 770) {
            setMobile(true);
        }
    }, []);

    return (
        <div className="lg:bg-darkSlateGray lg:px-7 lg:justify-center lg:h-screen lg:flex lg:items-center">
            <div className="max-w-full lg:flex lg:flex-row-reverse lg:bg-white md:rounded-3xl lg:p-7 lg:h-[85%] xl:w-[56%] lg:justify-between">
                <img src={isMobile ? mobile : desktop} alt="mobile design illustration" className="w-full lg:w-auto" />
                <Content handleClick={handleClick} />
            </div>
        </div>
    );
};


export default HomePage;