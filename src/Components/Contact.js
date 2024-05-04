import React from 'react';
import { useSpring, animated } from 'react-spring';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import lg from "../Media/5.png";
import bg from "../Media/bg1.jpg"

const Contact = () => {
  const textAnimationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const imageAnimationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000, delay: 500 },
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <Container className="py-20">
        <Typography variant="h1" component="h1" className="text-4xl text-center mb-8">
          <animated.div style={textAnimationProps}> <img src={bg} alt="Battery 2" className="w-full" /></animated.div>
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" component="p" className="text-lg mb-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 mt-6" />
              Alankar Pool Rd, Swapnamandir Society, Bharatkunj - 1, Erandwane, Pune, Maharashtra 411038
            </Typography>
            <Typography variant="body1" component="p" className="text-lg mb-4">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              +91 7774050676 / +91 8446137285
            </Typography>
            <Typography variant="body1" component="p" className="text-lg mb-8">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              batterywalabhau@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" component="p" className="text-lg mb-4">
              <br></br>
              You can reach our address via public transportation. Our location is easily accessible and well-connected to major roads and public transit routes.
            </Typography>
            <Typography variant="body1" component="p" className="text-lg mb-8">
              We are also available on social media platforms:
            </Typography>
            <div className="flex items-center mt-3">
              <SocialIcon icon={faFacebook} link="https://www.facebook.com/" />
              <SocialIcon icon={faInstagram} link="https://www.instagram.com/" />
              <SocialIcon icon={faLinkedin} link="https://www.linkedin.com/" />
            </div>
          </Grid>
        </Grid>

        <animated.img src={lg} alt="Battery 2" className="w-full mt-8" style={imageAnimationProps} />
      </Container>
    </div>
  );
}

const SocialIcon = ({ icon, link }) => (
  <a href={link} className="mr-3 text-gray-600 hover:text-blue-500 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={icon} size="2x" />
  </a>
);

export default Contact;
