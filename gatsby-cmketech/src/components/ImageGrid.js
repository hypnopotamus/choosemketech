import React from "react";
import Slider from "react-slick";

const ImageGrid = ({gallery}) => {

    const ImgageGrid_slide_settings = {
        dots: false,
        arrows: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
        ],
    }

    return (
        <div className="image-grid--container ">
            <Slider className="image-grid__slider" {...ImgageGrid_slide_settings}>
                {gallery.map((image, index) => {
                    return (
                        <div className="image-grid--slot" key={index}>
                            <img src={image.imagePath.sourceUrl} alt={image.altText} />
                            <div className="image-grid--caption">{image.title}</div>
                        </div>
                    )
                })}
            </Slider>
            <div className="gallery">
                {gallery.map((image, index) => {
                    return (
                        <div className={image.gridArea} key={index}>
                            <img src={image.imagePath.sourceUrl} alt={image.altText} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ImageGrid;