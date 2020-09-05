import React from 'react';
import Banner from '../../image/2375B_Banner1_WAVE_2048x497.jpg';
import "./Home.css";

const Home = ()=>{
    return(
        <div className="home">
            <img src={Banner} alt="" className="home__image"/>
        </div>
    )
};

export default Home;