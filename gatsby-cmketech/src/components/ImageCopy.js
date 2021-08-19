import React from "react"
import Slider from "react-slick"

const ImageCopy = ({flip}) => {
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
      <div className="imageCopy__heading">
        <h2>Header</h2>
      </div>
      <Slider {...settings}>
        <div className="imageCopy__container imageCopy__featured">
          <div className="row imageCopy__row">
            <div className="imageCopy__image">
              <span className="tag tag--gold tag--gold--featured">Featured</span>
              <img src="https://via.placeholder.com/592x372" />
            </div>
            <div className="imageCopy__copy">
              <h3>SubHeading </h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor.
              </p>
              <div className="imageCopy__copy__ctas">
                <button className="button button--primary">Button Style</button>
                <a  href="#" className="linked">
                  This is a link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="imageCopy__container imageCopy__featured">
          <div className="row imageCopy__row">
            <div className="imageCopy__image">
              <span className="tag tag--gold tag--gold--featured">Featured</span>
              <img src="https://via.placeholder.com/592x373" />
            </div>
            <div className="imageCopy__copy">
              <h3>SubHeading 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor.
              </p>
              <div className="imageCopy__copy__ctas">
                <button className="button button--primary">Button Style</button>
                <a  href="#" className="linked" >
                  This is a link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="imageCopy__container imageCopy__featured">
          <div className="row imageCopy__row">
            <div className="imageCopy__image">
              <span className="tag tag--gold tag--gold--featured">Featured</span>
              <img src="https://via.placeholder.com/592x375" />
            </div>
            <div className="imageCopy__copy">
              <h3>SubHeading 2</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor.
              </p>
              <div className="imageCopy__copy__ctas">
                <button className="button button--primary">Button Style</button>
                <a  href="#" className="linked">
                  This is a link
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </Slider>
    </div>
  )
}

export default ImageCopy
