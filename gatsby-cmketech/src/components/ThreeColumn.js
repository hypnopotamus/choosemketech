import React from "react"
import Slider from "react-slick"

const ThreeColumn = ({columns, title, content}) => {
    const settings = {
        dots: true,
        arrows: false,
        centerMode: false,
        centerPadding: '0px',
        slidesPerRow: 3,
        rows: 2,

        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesPerRow: 1,
                    rows: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '20px'
                },
            },
        ],
    }

    let threeColumnTitle,
        threeColumnContent;

    if (title) {
        threeColumnTitle = <div className="threeColumn__heading"><h2 dangerouslySetInnerHTML={ {__html : title} }></h2></div>;
    }

    if (content) {
        threeColumnContent = <div className="threeColumn__content" dangerouslySetInnerHTML={ {__html : content} } ></div>;
    }

    return (
        <div className="threeColumn">
            
            { threeColumnTitle }

            { threeColumnContent }

            <div className="threeColumn__container">
                <Slider {...settings}>
                    {columns.map((col, index) => {
                        let threeColumnLink;
                        if(col.linkLabel && col.link) {
                            threeColumnLink = <a href={col.link} className="linked">{col.linkLabel}</a>
                        }
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
                                        { threeColumnLink }
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
