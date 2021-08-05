import React from "react"
import Slider from "react-slick"

const ThreeColumn = ({}) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        slidesToScroll: 3,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    

    return (
        <div className="threeColumn">
            <div className="container">
                <div className="threeColumn__heading">
                    <h2>Choose Your Journey</h2>
                </div>
                <div className="threeColumn__container">
                    <Slider {...settings}>
                        <div className="threeColumn__column">
                            <div className="threeColumn__column__container">
                                <div className="threeColumn__column__image">
                                    <img src="https://via.placeholder.com/384x249" />
                                </div>
                                <div className="threeColumn__column__content">
                                    <h4>SUBHEADING</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur
                                        sadipscing elitr, sed diam nonumy eirmod
                                        tempor <a href="#">invidunt ut</a> labore
                                        et dolore magna aliquyam erat, sed diam
                                        voluptua.
                                    </p>
                                    <div className="threeColumn__column__ctas">
                                        <a href="#" className="linked">
                                            This is a hyper link
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="threeColumn__column">
                            <div className="threeColumn__column__container">
                                <div className="threeColumn__column__image">
                                    <img src="https://via.placeholder.com/384x249" />
                                </div>
                                <div className="threeColumn__column__content">
                                    <h4>SUBHEADING</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur
                                        sadipscing elitr, sed diam nonumy eirmod
                                        tempor <a href="#">invidunt ut</a> labore
                                        et dolore magna aliquyam erat, sed diam
                                        voluptua.
                                    </p>
                                    <div className="threeColumn__column__ctas">
                                        <a href="#" className="linked">
                                            This is a hyper link
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="threeColumn__column">
                            <div className="threeColumn__column__container">
                                <div className="threeColumn__column__image">
                                    <img src="https://via.placeholder.com/384x249" />
                                </div>
                                <div className="threeColumn__column__content">
                                    <h4>SUBHEADING</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur
                                        sadipscing elitr, sed diam nonumy eirmod
                                        tempor <a href="#">invidunt ut</a> labore
                                        et dolore magna aliquyam erat, sed diam
                                        voluptua.
                                    </p>
                                    <div className="threeColumn__column__ctas">
                                        <a href="#" className="linked">
                                            This is a hyper link
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default ThreeColumn
