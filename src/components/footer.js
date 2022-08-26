import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

function footer() {
  return (
    <div className='text-white text-center font-serif py-20'>
      <h2 className='mt-6 text-white text-center font-serif'>GET IN TOUCH</h2>
         <p className='text-white text-center font-serif' id='contact'>
           Retailer inquiries - sales@d1wholesalers.com
           <br/>
           General inquiries - info@d1wholesalers.com
           <br/>
           +64 27 321 6887
         </p>
    </div>
  )
}

export default footer