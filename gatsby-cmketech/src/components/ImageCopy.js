import React from "react"
import Slider from "react-slick"

const ImageCopy = ({flip, content, header}) => {
  var settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="imageCopy" className={flip ? `imageCopy imageCopy--reversed` : `imageCopy`}>
      {header ? (
        <div className="imageCopy__heading">
          <h2>Header</h2>
        </div>
      ) : null }
      <Slider {...settings}>
        {
          content.map((el, inx) => {
            return (
              <div className="imageCopy__container imageCopy__featured" key={inx}>
                <div className="row imageCopy__row">
                  <div className="imageCopy__image">
                    <img src={el.image.link} alt={el.image.altText} />
                  </div>
                  <div className="imageCopy__copy">
                  <div dangerouslySetInnerHTML={{ __html: el.copy }}></div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}

export default ImageCopy
