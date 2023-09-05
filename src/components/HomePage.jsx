import React from "react";
import Content from "./Content";
import '../App.css'


function HomePage({ handleClick, inputVal }) {

    return (
        <div className="lg:bg-charcoalGray lg:px-7 lg:justify-center lg:h-screen lg:flex lg:items-center">
            <div className="max-w-full lg:flex lg:flex-row-reverse lg:bg-white md:rounded-3xl lg:p-7 lg:h-[85%] xl:w-[56%] lg:justify-between">
                <img alt="design illustration" className="w-full lg:w-auto bg-image" />
                <Content handleClick={handleClick} inputVal={inputVal} />
            </div>
        </div>
    );
};


export default HomePage;