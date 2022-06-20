import React from "react";
import css from "./home.css";
import { useLocalStoragePictures } from "../../hooks";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoScroll: true,
  autoplay: true,
  arrows: false,
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

export function Home() {
  const storagedPics = useLocalStoragePictures();
  const parsedStoragedPicst = JSON.parse(storagedPics);
  return (
    <div className={css.container}>
      <div className={css.sliderContainer}>
        <Slider {...settings}>
          {parsedStoragedPicst?.map((p) => {
            return (
              <div className={css.imgContainer}>
                <img src={p.url} alt="" className={css.img} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
