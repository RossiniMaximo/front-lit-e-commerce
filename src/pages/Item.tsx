import React from "react";
import { useResultItem, usePicturesState } from "../hooks";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./item.css";

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
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
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
  console.log("result : ", result);

  const pictures = usePicturesState();
  console.log("pictures : ", pictures);

  return (
    <div className={css.container}>
      <h4>{result.title}</h4>
      <h4>${result.price}</h4>
      <Slider {...settings}>
        {pictures?.map((pic) => {
          return <img src={pic.url} alt="" />;
        })}
      </Slider>
    </div>
  );
}
