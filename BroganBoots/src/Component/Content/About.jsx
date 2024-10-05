import React from 'react'
import imgAbout from '../../assets/EXTRALARGE.jpg'

const About = () => {
  return (
    <div>
      <div className="container pt-12">
        <div className="flex flex-col lg:flex-row items-center justify-between pt-12">
          
          <div className="lg:w-1/2 w-full px-4">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                About <span className="text-primary">Bro</span>gan B<span className="text-primary">oo</span>ts
              </h2>
              <p className="text-gray-700">
                Brogan Boots was built out of frustration to make trade-offs between clunky and delicate dress boots that fall apart after a few wears, or boots that were incredibly overpriced. And it is when I decided, there has to be another option.
              </p>
              <p className="text-gray-700">
                At Brogan Boots we offer ridiculously high-quality footwear that are designed, developed, and hand-crafted in-house by our efficient and highly skilled artisans, drawing inspiration from the world around us and our amazing customers.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <div className="flex justify-center lg:justify-end py-4">
              <img src={imgAbout} alt="Brogan Boots" className="max-w-xl h-auto" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About
