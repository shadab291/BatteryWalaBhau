import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5 }}
      className="text-center"
    >
      <motion.h1 className="text-5xl font-bold animate-bounce text-blue-500">Welcome</motion.h1>
    </motion.div>
  );
};

export default AnimatedText;
