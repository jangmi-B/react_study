import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../static/image/banner1.png";
import banner2 from "../static/image/banner2.png";
import banner3 from "../static/image/banner3.png";

export const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div>
          <img style={{ height: "35vh", width: "100%", objectFit: "contain" }} src={banner2}></img>
        </div>
        <div>
          <img style={{ height: "35vh", width: "100%", objectFit: "contain" }} src={banner1}></img>
        </div>
        <div>
          <img style={{ height: "35vh", width: "100%", objectFit: "contain" }} src={banner3}></img>
        </div>
      </Slider>
    </div>
  );
};
