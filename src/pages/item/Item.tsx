import React from "react";
import { useResultItem, usePicturesState } from "../../hooks";
import css from "./item.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { addToCart } from "../../lib/api";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoScroll: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoScroll: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export function Item() {
  const result = useResultItem();
  const pictures = usePicturesState();
  async function handleAddCart() {
    const added = await addToCart(result.id);
  }

  return (
    <div className={css.container}>
      <div className={css.slider_container}>
        <Slider {...settings}>
          {pictures?.map((pic) => {
            return (
              <div className={css.pictureContainer}>
                <img src={pic.url} alt={result.title} className={css.picture} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className={css.textContainer}>
        <h4 className={css.title}>{result.title}</h4>
        <div className={css.bottom_textContainer}>
          <h4 className={css.price}>Price :${result.price}</h4>
          <h4 className={css.addCart} onClick={handleAddCart}>
            Add to cart
          </h4>
        </div>
      </div>
    </div>
  );
}
