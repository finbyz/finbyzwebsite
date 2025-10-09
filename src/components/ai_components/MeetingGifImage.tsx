import React from 'react';

interface MeetingGifImageProps {
  src: string;
  alt: string;
}

const MeetingGifImage: React.FC<MeetingGifImageProps> = ({ src, alt }) => (
  <div className="flex justify-center py-4 animate-fade-in">
    <img src={src} alt={alt} className="rounded-lg shadow-lg w-2/3 md:w-1/2"  />
  </div>
);

export default MeetingGifImage;
