import React from "react"
import Slider from "react-slick"
import { Link } from "gatsby"

const ImageCopy = ({ cards, title, flip }) => {
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

  let cardTitle

  if (title) {
    cardTitle = (
      <div className="imageCopy__heading">
        <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
      </div>
    )
  }

  return (
    <div className="imageCopy" className={flip ? `imageCopy imageCopy--reversed` : `imageCopy`}>
      {cardTitle}
      <Slider {...settings}>
        {cards.map((card, index) => {
          let cardButton, cardLink, cardFeatured, cardImage

          if (!card.buttonLabel || !card.buttonUrl) {
            return
          } else {
            cardButton = (
              <Link to={card.buttonUrl} className="button button--primary">
                {card.buttonLabel}
              </Link>
            )
          }

          if (card.linkUrl || card.linkLabel) {
            cardLink = (
              <Link to={card.linkUrl} className="linked">
                {card.linkLabel}
              </Link>
            )
          }

          if (card.featured === "true") {
            cardFeatured = <span className="tag tag--gold tag--gold--featured">Featured</span>
          }

          if (card.image.sourceUrl) {
            cardImage = <img src={card.image.sourceUrl} alt={card.altText} alt="" role="presentation" />
          }

          return (
            <div className="imageCopy__container imageCopy__featured" key={index}>
              <div className="row imageCopy__row">
                <div className="imageCopy__image">
                  {cardFeatured}
                  {cardImage}
                </div>
                <div className="imageCopy__copy">
                  <h3>{card.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: card.content }} />
                  <div className="imageCopy__copy__ctas">
                    {cardButton}
                    {cardLink}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default ImageCopy
