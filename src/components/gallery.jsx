import React, { useState, useEffect } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch("http://localhost:7000/api/games/");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setImages(data.map(game => {
          const screenshotUrl = game.screenshots?.[0]?.url;
          return {
            id: game.id, 
            name: game.name,  
            src: screenshotUrl ? `https:${screenshotUrl.replace('t_thumb', 't_screenshot_big')}` : null,
            alt: `Screenshot of ${game.name}`,
            caption: `Rating: ${game.rating.toFixed(2)}` 
          };
        }).filter(image => image.src)); 
      } catch (error) {
        setError('Failed to fetch images');
        console.error("Error fetching images:", error);
      }
    };

    getImages();
  }, []);

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div id='videojuegos' className="bg-[#ededed] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="group relative">
            <img src={image.src} alt={image.alt} className="w-full h-auto" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 group-hover:bg-opacity-75 transition-opacity px-4 py-2">
              <p>{image.name}</p>
              <p>{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
