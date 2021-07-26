import React from "react";
import Slider from "react-slick";
import { Link } from "gatsby";

import { imageGrid1, imageGrid2, imageGrid3, imageGrid4, imageGrid5, imageGrid6, imageGrid7, imageGrid8 } from '../assets/assets';

const ImageGrid = ({ }) => {

    const altTextPre = `Image shown of `

    const ImgageGrid_slide_settings = {
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
            title: 'India Fest',
            gridArea: 'image-grid-a'
        },
        {
            imagePath: imageGrid3,
            altText: altTextPre + 'Milwaukee Lakefront',
            title: 'Milwaukee Lakefront',
            gridArea: 'image-grid-b'
        },
        {
            imagePath: imageGrid8,
            altText: altTextPre + 'Milwaukee Fireworks',
            title: 'Milwaukee Fireworks',
            gridArea: 'image-grid-c'
        },
        {
            imagePath: imageGrid2,
            altText: altTextPre + 'Milwaukee Art Museum',
            title: 'Milwaukee Art Museum',
            gridArea: 'image-grid-d'
        },
        {
            imagePath: imageGrid4,
            altText: altTextPre + 'Summerfest',
            title: 'Summerfest',
            gridArea: 'image-grid-e'
        },
        {
            imagePath: imageGrid6,
            altText: altTextPre + 'Milwaukee Collectivo',
            title: 'Milwaukee Collectivo',
            gridArea: 'image-grid-f'
        },
        {
            imagePath: imageGrid5,
            altText: altTextPre + 'hubbard',
            title: 'Hubbard',
            gridArea: 'image-grid-g'
        },
        {
            imagePath: imageGrid7,
            altText: altTextPre + 'Estabrook park',
            title: 'Estrabrook Park',
            gridArea: 'image-grid-h'
        }
    ]

    return (
        <section className="image-grid--container">
            <Slider className="image-grid__slider" {...ImgageGrid_slide_settings}>
                {gallery.map((image, index) => {
                    return (
                        <div className="image-grid--slot" key={index}>
                            <img src={image.imagePath} alt={image.altText} />
                            <div className="image-grid--caption">{image.title}</div>
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