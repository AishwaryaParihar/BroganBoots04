import React from 'react'
import HeroCarousel from './HeroCarousel'
import Category from './Category'
import ProductCard from './ProductCards'
import Cards from './Cards'
import ProductDetails from './ProductDetails'


const Home = () => {
  return (
    <><Category/>
     <HeroCarousel/>
     <ProductCard/>
     <Cards category={"rugged"} heading={"BestSeller"} />
    </>
  )
}

export default Home