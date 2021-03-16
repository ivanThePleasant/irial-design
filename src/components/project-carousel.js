import React from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imgTest from '../images/Ventrance_3.jpeg'

const ProjectSlides = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }

  return (
    <Slider {...settings}>

      <div className='bg-white rounded-sm overflow-hidden mx-auto px-2'>  
        <div className="bg-cover bg-no-repeat bg-center flex" style={{backgroundImage: `url(${imgTest})`, height: '600px'}}></div>
      </div>

      <div className='bg-white rounded-sm overflow-hidden mx-auto px-2'>
        <div className="bg-cover bg-no-repeat bg-center flex" style={{backgroundImage: `url(${imgTest})`, height: '600px'}}></div>
      </div>

      <div className='bg-white rounded-sm overflow-hidden mx-auto px-2'>
        <div className="bg-cover bg-no-repeat bg-center flex" style={{backgroundImage: `url(${imgTest})`, height: '600px'}}></div>
      </div>

      <div className='bg-white rounded-sm overflow-hidden mx-auto px-2'>
        <div className="bg-cover bg-no-repeat bg-center flex" style={{backgroundImage: `url(${imgTest})`, height: '600px'}}></div>
      </div>

      <div className='bg-white rounded-sm overflow-hidden mx-auto px-2'>
        <div className="bg-cover bg-no-repeat bg-center flex" style={{backgroundImage: `url(${imgTest})`, height: '600px'}}></div>
      </div>
     
    </Slider>
  )
}


const ProjectCarousel = () => {

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-8">
        <ProjectSlides />
      </div>
    </section>
  )
}

export default ProjectCarousel