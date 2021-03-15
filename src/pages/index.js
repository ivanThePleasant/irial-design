import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import About from '../components/about'
import ProjectCarousel from '../components/project-carousel'

const HomePage = () => {

  return (
    <body>
      <Layout>
        <Hero />
        <About />
        <ProjectCarousel />
      </Layout>
    </body>
  )
}

export default HomePage