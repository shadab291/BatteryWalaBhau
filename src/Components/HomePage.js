import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AnimatedText from '../Common/AnimatedText '; // Corrected import path
import Slider from "react-slick";
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LandingPage from '../Media/Banner1.jpg';
import CarouselImage1 from '../Media/Exide brand.png';
import CarouselImage2 from '../Media/Luminous brand.jpg';
import CarouselImage3 from '../Media/livguard brand.jpg';
import CarouselImage4 from '../Media/okaya brand.jpg';
import CarouselImage5 from '../Media/ameron brand.png';
import CarouselImage6 from "../Media/sf battaries brand.jpg";
import bgimage from "../Media/homepagebg.png";
import LandingPage2 from '../Media/Banner2.jpg';
import LandingPage3 from '../Media/Banner3.jpg';

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
  const separateCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
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
    ] // Show navigation arrows
  }
  ;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Container style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor:'rgba(255, 255, 255,0)' }} className="py-20">
        <h1 className="mt-2"><AnimatedText/></h1>
        <Typography variant="h1" component="h1" className="text-2xl text-center mb-8  ">
          Battery Wala Bhau
        </Typography>
        <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial animation state (opacity: 0, y: 20)
      animate={{ opacity: 1, y: 0 }} // Animation to (opacity: 1, y: 0)
      transition={{ duration: 2 }} // Animation duration
      className="text-lg text-center p-2 mb-8"
    >
      "Fueling Your Everyday Journey with Reliable Energy Solutions, Powering Possibilities!"
    </motion.div>
      </Container>

      <div className="mt-8">
        <Slider {...separateCarouselSettings}>
          <div>
            <img className="w-full" src={LandingPage} alt="Carousel Image 1" />
          </div>
          <div>
            <img className="w-full" src={LandingPage2} alt="Carousel Image 1" />
          </div>
          <div>
            <img className="w-full" src={LandingPage3} alt="Carousel Image 1" />
          </div>
          {/* Add additional carousel items here */}
        </Slider>
      </div>

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
