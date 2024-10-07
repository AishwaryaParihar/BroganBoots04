import React from 'react'
import imgAbout from '../../assets/EXTRALARGE.jpg'

const About = () => {
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
              Brogan Boots was built out of frustration to make trade-offs between clunky and delicate dress boots that fall apart after a few wears, or boots that were incredibly overpriced. And it is when I decided, there has to be another option.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Brogan Boots, we offer ridiculously high-quality footwear that are designed, developed, and hand-crafted in-house by our efficient and highly skilled artisans, drawing inspiration from the world around us and our amazing customers.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            <div className="flex justify-center lg:justify-end">
              <img 
                src={imgAbout} 
                alt="Brogan Boots" 
                className="w-full max-w-lg rounded-lg  transition-transform transform hover:scale-105 duration-300"
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About
