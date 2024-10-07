import React, { useState, useEffect } from 'react';

const About = () => {
  const [aboutData, setAboutData] = useState({
    description: '',
    imageUrl: '',
  });

  // Fetch About data from the API
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch('http://localhost:5173/api/about');
        const data = await response.json();
        setAboutData(data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <div className=" py-12 mx-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Text Section */}
          <div className="lg:w-1/2 w-full space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              About <span className="text-primary">Bro</span>gan B<span className="text-primary">oo</span>ts
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutData.description || 'Loading description...'} {/* Render description from API */}
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            <div className="flex justify-center lg:justify-end">
              {aboutData.imageUrl ? (
                <img 
                  src={aboutData.imageUrl} // Render image from API
                  alt="Brogan Boots" 
                  className="w-full max-w-lg rounded-lg  transition-transform transform hover:scale-105 duration-300"
                />
              ) : (
                <p>Loading image...</p>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default About;
