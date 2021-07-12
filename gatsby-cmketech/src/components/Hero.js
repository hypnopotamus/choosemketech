import React from 'react';
import '../assets/sass/components/_hero.scss';

const Hero = (props) => {
    return (
            <section className="hero--media--container">
                {
                    props.movieMedia ?
                    <video src="https://f.hubspotusercontent00.net/hubfs/436951/Elite-Home.mp4"
                        height="50%" autoPlay="1" muted="" loop=""/> :
                    <img src="https://via.placeholder.com/1280x500" alt="hero image" /> 
                }
            </section>
    );
};

export default Hero;