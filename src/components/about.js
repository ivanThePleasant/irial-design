import React from 'react'

import Portrait from '../images/IRINA PORTRET-web.jpg'

const About = () => {

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-8 md:flex md:justify-between md:items-center">
        <div className="grid md:grid-cols-2 md:gap-8">
          <div>
            <img className="w-full" src={Portrait} />
          </div>
          <div className="flex flex-col content-center m-auto font-garamond text-3xl italic">
            <div className="px-12">
              <p>Meine Projektportfolio umfasst exklusive Gewerbeimmobilien, Villen, Privathäuser, schlüsselfertige Immobilien, Hotels.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About