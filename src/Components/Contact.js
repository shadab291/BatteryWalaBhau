import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faUser, faComment } from '@fortawesome/free-solid-svg-icons';
import lg from "../Media/5.png";
import bg from "../Media/bg1.jpg";

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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (formData.name && formData.email && formData.message) {
      try {
        const response = await fetch('https://formspree.io/f/mgegqjaw', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          console.log('Form submitted:', formData);
          alert('Form submitted successfully!');
          // Clear form fields
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        } else {
          alert('Failed to submit form. Please try again later.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred while submitting the form. Please try again later.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

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
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="text-lg mb-2">Name</label>
                <div className="relative">
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded p-2 pl-10 focus:outline-none focus:border-blue-500" required />
                  <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-500" />
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="text-lg mb-2">Email</label>
                <div className="relative">
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded p-2 pl-10 focus:outline-none focus:border-blue-500" required />
                  <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 text-gray-500" />
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="message" className="text-lg mb-2">Message</label>
                <div className="relative">
                  <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} className="w-full border border-gray-300 rounded p-2 pl-10 focus:outline-none focus:border-blue-500" required></textarea>
                  <FontAwesomeIcon icon={faComment} className="absolute left-3 top-3 text-gray-500" />
                </div>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </form>
          </Grid>
        </Grid>

        <animated.img src={lg} alt="Battery 2" className="w-full mt-8" style={imageAnimationProps} />
      </Container>
    </div>
  );
}

export default Contact;
