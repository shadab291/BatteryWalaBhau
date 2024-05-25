import React, { Component } from 'react';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Spring } from 'react-spring';
import battery1 from '../Media/pngegg.png';
import battery2 from '../Media/1.png';
import battery3 from '../Media/2.png';
import battery4 from '../Media/3.png';
import battery5 from '../Media/4.png';


export default class About extends Component {
  render() {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Container className="py-20">
        <Typography variant="h1" component="h1" className="text-4xl text-center mb-8">
            About
          </Typography>
          <Typography variant="body1" component="p" className="text-lg text-black mb-8">
            Battery Wala Bhau is a trusted name in the energy solutions industry, dedicated to providing reliable and sustainable power solutions for individuals and businesses. With years of experience and a commitment to innovation, we offer a wide range of products and services tailored to meet the diverse needs of our customers.
          </Typography>
          <Spring
            from={{ opacity: 0, transform: 'translateY(50px)' }}
            to={{ opacity: 1, transform: 'translateY(0)' }}
          >
            {props => (
              <div style={props} className="flex justify-center flex-wrap mb-8">
                <img src={battery1} alt="Battery 1" className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 md:mr-4 lg:mr-8" />
                <img src={battery2} alt="Battery 2" className="w-full md:w-1/2 lg:w-1/4" />
                <img src={battery3} alt="Battery 2" className="w-full md:w-1/2 lg:w-1/4" />
                <img src={battery4} alt="Battery 2" className="w-full md:w-1/2 lg:w-1/4" />
                <img src={battery5} alt="Battery 2" className="w-full md:w-1/2 lg:w-1/4" />
              </div>
            )}
          </Spring>
          <Typography variant="body1" component="p" className="text-lg mb-8">
            Our product range includes high-quality batteries, solar panels, energy storage solutions, and more. Whether you're looking to power your home, business, or community, Battery Wala Bhau has you covered. We pride ourselves on delivering exceptional service and ensuring customer satisfaction every step of the way.
          </Typography>
          <Typography variant="body1" component="p" className="text-lg mb-8">
            At Battery Wala Bhau, we believe in the power of possibilities. Our team of experts is dedicated to fueling a brighter and sustainable future for all, one powered by reliable and eco-friendly energy solutions.
          </Typography>
        </Container>
      </div>
    );
  }
}
