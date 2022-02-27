import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

function brands() {
  return (
    <div className='text-white text-center font-serif'>
      <h1>Brands we work with</h1>
      <div>
        <h2><Link to="https://www.sbonebikeparts.com/t">SB One Bike Parts</Link></h2>
        <p>
          We are not a household name to many mountain bikers but we provide a crucial component 
          for the pro's riding Fest Series, Rampage, and Joy Ride, along with those smashing lap 
          after lap in bike parks around the world. An answer to broken derailleurs, snapped 
          gear cables, cluttered cockpits. Enter single speed. 
        </p>
      </div>
    <div>
      <h2><Link to='https://www.switchbladeonline.com/loose-riders/'>Loose Riders</Link></h2>
      <p>
        We offer an alternative to mainstream mountain bike fashion.
        Our collections are inspired by our environment, from nature to urban, with street-wear 
        and vintage elements. Wearable collections that look good both on or off the bike. We 
        believe that when you feel good in what you wear, that confidence will reflect in your riding.
      </p>
    </div>
    <div>
      <h2><Link to='https://stfubike.com/'>STFU</Link></h2>
      <p>
        Developed in collaboration with downhill mountain bike legend, Chris Kovarik in Whistler BC. 
        Designed to keep your bike quiet and efficient whilst minimizing wear. 
        The STFU Bike drive-train dampers contain your chain when things get rough - preventing chain 
        slap and noise from your frame but also preventing your chain from over-extending sideways - 
        decreasing wear and extending chain life.
        Under tension from pedaling the chain remains completely clear of the STFU Bike units 
        for complete efficiency.
      </p>
    </div>
    </div>
  )
}

export default brands