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
            title: 'IndiaFest',
            gridArea: 'image image--vertical'
        },
        {
            imagePath: imageGrid3,
            altText: altTextPre + 'Milwaukee Lakefront',
            title: 'Milwaukee Lakefront',
            gridArea: 'image'
        },
        {
            imagePath: imageGrid8,
            altText: altTextPre + 'Milwaukee Fireworks',
            title: 'Milwaukee Fireworks',
            gridArea: 'image'
        },
        {
            imagePath: imageGrid2,
            altText: altTextPre + 'Milwaukee Art Museum',
            title: 'Milwaukee Art Museum',
            gridArea: 'image image--horizontal'
        },
        {
            imagePath: imageGrid4,
            altText: altTextPre + 'Summerfest',
            title: 'Summerfest',
            gridArea: 'image'
        },
        {
            imagePath: imageGrid6,
            altText: altTextPre + 'Milwaukee Collectivo',
            title: 'Milwaukee Collectivo',
            gridArea: 'image image--horizontal'
        },
        {
            imagePath: imageGrid5,
            altText: altTextPre + 'hubbard',
            title: 'Hubbard',
            gridArea: 'image'
        },
        {
            imagePath: imageGrid7,
            altText: altTextPre + 'Estabrook park',
            title: 'Estrabrook Park',
            gridArea: 'image image--big'
        },
        {
            imagePath: 'https://source.unsplash.com/random/835',
            altText: altTextPre + 'Estabrook park',
            title: 'Estrabrook Park',
            gridArea: 'image'
        },
        {
            imagePath: 'https://source.unsplash.com/random/735',
            altText: altTextPre + 'Estabrook park',
            title: 'Estrabrook Park',
            gridArea: 'image'
        },
        {
            imagePath: 'https://source.unsplash.com/random/615',
            altText: altTextPre + 'Estabrook park',
            title: 'Estrabrook Park',
            gridArea: 'image image--vertical'
        },
        {
            imagePath: 'https://source.unsplash.com/random/685',
            altText: altTextPre + 'Estabrook park',
            title: 'Estrabrook Park',
            gridArea: 'image image--horizonal'
        },
        {
            imagePath: 'https://source.unsplash.com/random/745',
            altText: altTextPre + 'Estabrook park',
            title: 'Estrabrook Park',
            gridArea: 'image'
        },
        {
            imagePath: 'https://source.unsplash.com/random/555',
            altText: altTextPre + 'Estabrook park',
            title: 'Estrabrook Park',
            gridArea: 'image'
        },
        {
            imagePath: 'https://source.unsplash.com/random/225',
            altText: altTextPre + 'Estabrook park',
            title: 'Estrabrook Park',
            gridArea: 'image'
        },
        {
            imagePath: 'https://source.unsplash.com/random/115',
            altText: altTextPre + 'Estabrook park',
            title: 'Estrabrook Park',
            gridArea: 'image'
        },
        {
            imagePath: 'https://source.unsplash.com/random/385',
            altText: altTextPre + 'Estabrook park',
            title: 'Estrabrook Park',
            gridArea: 'image'
        }
    ]

    return (
        // <section className="image-grid--container">
        //     <div className="image-grid">
        //         {gallery.map((image, index) => {
        //             return (
        //                 <div className={image.gridArea} key={index}>
        //                     <img src={image.imagePath} alt={image.altText} />
        //                 </div>
        //             )
        //         })}
        //     </div>
        // </section>
        <div class="gallery">
            {gallery.map((image, index) => {
                return (
                    <div className={image.gridArea} key={index}>
                        <img src={image.imagePath} alt={image.altText} />
                    </div>
                )
            })}
        </div>
    )
}

export default ImageGrid;