import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import Looseriders from '../images/Looseriders.svg'

function brands() {
  return (
    <div 
      className='text-white text-center font-serif
                  py-32  bg-lightestGray flex flex-col 
                  justify-between items-center'
    >
      <h1 className="text-6xl">BRANDS WE WORK WITH</h1>
      <div className='mt-20 w-10/12 md:w-4/5 lg:w-2/5'>
        <Link to="https://www.sbonebikeparts.com/t">
          <StaticImage
            className='findme'
            src="../images/SBOne.jpg"
            width={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Looseriders logo"
          />
        </Link>
        <p className='my-20 text-left text-xl'>
          SB one is not a household name to many mountain bikers but we provide a crucial component 
          for the pro's riding Fest Series, Rampage, and Joy Ride, along with those smashing lap 
          after lap in bike parks around the world. An answer to broken derailleurs, snapped 
          gear cables, cluttered cockpits. Enter single speed. 
        </p>
      </div>
    <div className='flex flex-col items-center w-10/12 md:w-4/5 lg:w-2/5'>
      
      <Link to='https://www.switchbladeonline.com/loose-riders/'><Looseriders width={350}/></Link>
      <p className='my-20 text-left text-xl'>
        Looseriders offers an alternative to mainstream mountain bike fashion.
        Our collections are inspired by our environment, from nature to urban, with street-wear 
        and vintage elements. Wearable collections that look good both on or off the bike. We 
        believe that when you feel good in what you wear, that confidence will reflect in your riding.
      </p>
    </div>
    <div className=' w-10/12 md:w-4/5 lg:w-2/5'>
    
      <Link to='https://stfubike.com/'>
        <StaticImage
          className='findme'
          src="../images/STFU.avif"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Looseriders logo"
        />
      </Link>
      <p className='my-20 text-white text-left font-serif text-xl'> 
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