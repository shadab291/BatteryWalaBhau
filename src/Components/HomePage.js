import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AnimatedText from '../Common/AnimatedText ';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LandingPage from '../Media/Banner1.jpg';
import CarouselImage1 from '../Media/Exide brand.png';
import CarouselImage2 from '../Media/Luminous brand.jpg';
import CarouselImage3 from '../Media/livguard brand.jpg';
import CarouselImage4 from '../Media/okaya brand.jpg';
import CarouselImage5 from '../Media/ameron brand.png';
import CarouselImage6 from "../Media/sf battaries brand.jpg"

function Homepage() {
  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 3000, // Set auto-sliding speed in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Container className="py-20">
        <h1 className="mt-2"><AnimatedText/></h1>
        <Typography variant="h1" component="h1" className="text-2xl text-center mb-8">
          Battery Wala Bhau
        </Typography>
        <Typography variant="body1" component="p" className="text-lg text-center p-2 mb-8">
          "Fueling Your Everyday Journey with Reliable Energy Solutions, Powering Possibilities!"
        </Typography>
      </Container>

      <img src={LandingPage} alt="Battery 2" className="w-full" />

      <div className="mt-8">
        <Slider {...settings}>
          <div>
            <img className="h-40 w-40" src={CarouselImage1} alt="Carousel Image 1" />
          </div>
          
          <div>
            <img className="h-40 w-40" src={CarouselImage2} alt="Carousel Image 2" />
          </div>
          
          <div>
            <img className="h-40 w-40" src={CarouselImage3} alt="Carousel Image 3" />
          </div>

          <div>
            <img className="h-40 w-40" src={CarouselImage4} alt="Carousel Image 4" />
          </div>
          
          <div>
            <img className="h-40 w-40" src={CarouselImage5} alt="Carousel Image 5" />
          </div>
          
          <div>
            <img className="h-40 w-40" src={CarouselImage6} alt="Carousel Image 5" />
          </div>

        </Slider>
      </div>
    </div>
  );
}

export default Homepage;
