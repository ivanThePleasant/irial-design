import React from 'react'

import HeroImg from '../images/Ventrance_3.jpeg'

const Hero = () => {

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <img className="w-full h-hero rounded-sm" src={HeroImg}/>
      </div>
    </section>
  )
}

export default Hero