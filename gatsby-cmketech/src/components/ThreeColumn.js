import React from "react"
import Slider from "react-slick"

const ThreeColumn = ({header, headline, copy, background, content}) => {
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
        <div className={`threeColumn ${background === "blue" ? "blue" : "white"}`}>
            <div className="container">
                <div className="threeColumn__heading">
                    {header ? (
                        <h2>{headline}</h2>
                    ) : null}
                    <div dangerouslySetInnerHTML={{ __html: copy }}></div>
                </div>
                <div className="threeColumn__container">
                    <Slider {...settings}>
                        {content.map((el, idx) => {
                            return (
                            <div className="threeColumn__column" key={idx}>
                                <div className="threeColumn__column__container">
                                    <div className="threeColumn__column__image">
                                        <img src={el.threeColumnImage.link} alt={el.threeColumnImage.altText} />
                                    </div>
                                    <div className="threeColumn__column__content">
                                        <p dangerouslySetInnerHTML={{ __html: el.threeColumnContent }}></p>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default ThreeColumn
