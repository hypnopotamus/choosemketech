import React from "react"
import Slider from "react-slick"

const ThreeColumn = ({columns, title}) => {
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

    let threeColumnTitle;

    if (title) {
        threeColumnTitle = <div className="threeColumn__heading"><h2 dangerouslySetInnerHTML={ {__html : title} }></h2></div>;
    }

    return (
        
        <div className="threeColumn">
            
            { threeColumnTitle }

            <div className="threeColumn__container">
                <Slider {...settings}>
                    {columns.map((col, index) => {
                        return (
                            <div className="threeColumn__column" key={index}>
                            <div className="threeColumn__column__container" tabIndex="0" aria-labelledby={`header${index}, content${index}`}>
                                <div className="threeColumn__column__image">
                                    <img src={col.image.sourceUrl} alt=""/>
                                </div>
                                <div className="threeColumn__column__content">
                                    <h4 dangerouslySetInnerHTML={ {__html : col.title} } id={`header${index}`}></h4>
                                    <p dangerouslySetInnerHTML={ {__html : col.content } } id={`content${index}`}></p>
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
    )
}

export default ThreeColumn
