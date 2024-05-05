// DeveloperBadge.js

import React from 'react';
import shadab from "../Media/Code.jpeg"

const DeveloperBadge = ({ photoSrc }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={shadab} alt="Developer Badge" className="w-24 h-24 rounded-full mb-2" />
      <span className="text-sm font-semibold">Shadab Sayyed</span>
      <span className="text-xs text-gray-500">Full stack Developer</span>
    </div>
  );
};

export default DeveloperBadge;
