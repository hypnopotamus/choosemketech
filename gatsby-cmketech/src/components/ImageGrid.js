import React from "react";
import { Link } from "gatsby";
import { imageGrid1, imageGrid2, imageGrid3, imageGrid4, imageGrid5, imageGrid6, imageGrid7 } from '../assets/assets';

const ImageGrid = ({ }) => {

    const altTextPre = `Image shown of `

    // TODO: Slick slider for mobile, grid for desktop

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
    ]

    return (
        <section className="image-grid">
            {gallery.map((image, index )=> {
                return (
                    <div key={index}>
                        <img src={image.imagePath} alt={image.altText} />
                    </div>
                )
            })}
        </section>
    )
}

export default ImageGrid;