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
            altText: altTextPre + 'Indiafest',
            gridArea: 'image-grid-a'
        },
        {
            imagePath: imageGrid3,
            altText: altTextPre + 'Milwaukee Lakefront',
            gridArea: 'image-grid-b'
        },
        {
            imagePath: imageGrid8,
            altText: altTextPre + 'Milwaukee Fireworks',
            gridArea: 'image-grid-c'
        },
        {
            imagePath: imageGrid2,
            altText: altTextPre + 'Milwaukee Art Museum',
            gridArea: 'image-grid-d'
        },
        {
            imagePath: imageGrid4,
            altText: altTextPre + 'Summerfest',
            gridArea: 'image-grid-e'
        },
        {
            imagePath: imageGrid6,
            altText: altTextPre + 'Milwaukee collectivo',
            gridArea: 'image-grid-f'
        },
        {
            imagePath: imageGrid5,
            altText: altTextPre + 'hubbard',
            gridArea: 'image-grid-g'
        },
        {
            imagePath: imageGrid7,
            altText: altTextPre + 'Estabrook park',
            gridArea: 'image-grid-h'
        }
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
                        <div className={image.gridArea} key={index}>
                            <img src={image.imagePath} alt={image.altText} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ImageGrid;