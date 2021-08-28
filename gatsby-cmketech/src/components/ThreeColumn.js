import React from "react"
import Slider from "react-slick"

const ThreeColumn = ({columns}) => {
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
    
    console.log(columns)

    const data = columns.wpPage.Pages_CF;

    return (
        <div className="threeColumn">
            <div className="container">
                <div className="threeColumn__heading">
                    <h2 dangerouslySetInnerHTML={ {__html : data.threeColumnHeaderText} }></h2>
                </div>
                <div className="threeColumn__container">
                    <Slider {...settings}>
                        {data.threeColumnCards.map((col, index) => {
                            return (
                                <div className="threeColumn__column" key={index}>
                                <div className="threeColumn__column__container">
                                    <div className="threeColumn__column__image">
                                        <img src={col.image.sourceUrl} />
                                    </div>
                                    <div className="threeColumn__column__content">
                                        <h4 dangerouslySetInnerHTML={ {__html : col.title} }></h4>
                                        <p dangerouslySetInnerHTML={ {__html : col.content } }></p>
                                        <div className="threeColumn__column__ctas">
                                            <a href={col.link} className="linked">
                                                {col.linkLabel}
                                            </a>
                                        </div>
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
