import React from 'react';
import { Link } from 'react-router-dom';
import serv1 from "../Media/Battery Brands and Pricing as per Quality (Exide & Ameron)_prev_ui.png";
import serv2 from "../Media/Battery Free Home Delivery on Site.jpg";
import serv3 from "../Media/Battery Repairing.jpeg";
import serv5 from "../Media/Battery Testing And Maintenance (Services).jpg";
import serv4 from "../Media/Jump Start.jpeg";
import serv6 from "../Media/UPS Inverter Repairing.jpg";
import serv7 from "../Media/charging.jpeg";
import CarouselImage1 from '../Media/1.png';
import CarouselImage2 from '../Media/2.png';
import CarouselImage3 from '../Media/3.png';
import CarouselImage4 from '../Media/4.png';
import CarouselImage5 from '../Media/5.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const ServiceComponent = ({ title, description, imageUrl }) => {
  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <img src={imageUrl} alt={title} className="h-64 w-auto mb-4 rounded-lg" />
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <Link to="/contact" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </Link>
      </div>
    </div>
  );
};
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

const ServiceComponents = () => {
  return (
    <div>
    <div className="flex flex-wrap justify-center">
      <ServiceComponent
        title="Battery Charging"
        description="This service involves charging your battery to ensure it reaches its optimal capacity. Our experts utilize industry-standard equipment and techniques to efficiently charge your battery, extending its lifespan and enhancing its performance."
        imageUrl={serv7}
      />
      <ServiceComponent
        title="JUMP Start"
        description="Our JUMP Start service provides quick assistance to start your vehicle when your battery is low or dead. Our skilled technicians will promptly arrive at your location equipped with the necessary tools to jump-start your vehicle."
        imageUrl={serv4}
      />
      <ServiceComponent
        title="Battery Repairing"
        description="If your battery is experiencing issues such as poor performance or failure to hold a charge, our Battery Repairing service is here to help. Our experienced technicians will diagnose the problem and perform the necessary repairs."
        imageUrl={serv3}
      />
      <ServiceComponent
        title="Battery Free Home Delivery on Site"
        description="We offer the convenience of free home delivery for batteries right to your doorstep. Our team will deliver the battery directly to your location and provide on-site installation if required, ensuring a hassle-free experience for our customers."
        imageUrl={serv2}
      />
      <ServiceComponent
        title="Battery Testing (Services)"
        description="Our comprehensive Battery Testing and Maintenance service assesses the condition of your battery to ensure optimal performance. Depending on the battery's condition, our technicians will conduct thorough testing.."
        imageUrl={serv5}
      />
      <ServiceComponent
        title="UPS/Inverter Repairing"
        description="If your UPS or inverter is malfunctioning or in need of repair, our skilled technicians are equipped to diagnose and fix the problem efficiently. Whether it's a minor issue or a major repair, you can rely on us to restore your UPS or inverter to working condition."
        imageUrl={serv6}
      />
      <ServiceComponent
        title="Battery Brands and Pricing as per Quality (Exide & Ameron)"
        description="We offer a range of battery brands, including Exide and Ameron, known for their quality and reliability. Our selection includes batteries tailored to various budgets and requirements, ensuring you find the perfect fit for your needs without compromising on quality."
        imageUrl={serv1}
      />
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
        </Slider>
      </div>
    </div>

  );
};

export default ServiceComponents;
