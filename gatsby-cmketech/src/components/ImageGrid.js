import React from "react";
import Slider from "react-slick";
import { Link } from "gatsby";

import { imageGrid1, imageGrid2, imageGrid3, imageGrid4, imageGrid5, imageGrid6, imageGrid7, imageGrid8 } from '../assets/assets';

const ImageGrid = ({ }) => {

    const altTextPre = `Image shown of `

    var settings = {
        dots: true,
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
    
    const gallery = [
        {
            imagePath: imageGrid1,
            altText: altTextPre + 'Milwaukee Art Museum'
        },
        {
            imagePath: imageGrid2,
            altText: altTextPre + 'Milwaukee collectivo'
        },
        {
            imagePath: imageGrid3,
            altText: altTextPre + 'Estabrook park'
        },
        {
            imagePath: imageGrid4,
            altText: altTextPre + 'Summerfest'
        },
        {
            imagePath: imageGrid5,
            altText: altTextPre + 'hubbard'
        },
        {
            imagePath: imageGrid6,
            altText: altTextPre + 'Indiafest'
        },
        {
            imagePath: imageGrid7,
            altText: altTextPre + 'Milwaukee Lakefront'
        },
        {
            imagePath: imageGrid8,
            altText: altTextPre + 'Milwaukee Fireworks'
        },
    ]

    return (
        <section className="image-grid--container">
            <Slider className="image-grid__slider" {...settings}>
                {gallery.map((image, index) => {
                    return (
                        <div key={index}>
                            <img src={image.imagePath} alt={image.altText} />
                        </div>
                    )
                })}
            </Slider>
            <div className="image-grid">
                {gallery.map((image, index) => {
                    return (
                        <div key={index}>
                            <img src={image.imagePath} alt={image.altText} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ImageGrid;