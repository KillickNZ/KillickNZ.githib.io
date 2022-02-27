import * as React from "react"
import Brands from "../components/brands"

import Layout from "../components/layout"
import Seo from "../components/seo"
import StyledBackgroundSection from "../components/styledBackgroundSection"

const IndexPage = () => {
  return (
    <Layout>
      <StyledBackgroundSection />
      <div className='p-6 pb-12 flex-col items-center'>
        <Seo title="Home" />
        <h1 className='text-white text-center font-serif'>What we do</h1>
        <p className='text-white text-center font-serif w-4/5 mx-auto'>
          D1 is a rider owned wholesale company dedicated to bringing you quality brands that the “others” have overlooked. Brands from the 3 other 
          corners of the globe that haven't made it down to ours. A break from the mainstream offerings, something new, something fresh, shit you 
          see online, think damn I want that, only to find they dont ship to NZ, we intend to bridge that gap. - Bit of a ramble, typed as I thought
          it, needs work? 
        </p>
        <Brands />

        <h2 className='text-white text-center font-serif'>Get In Touch</h2>
        <p className='text-white text-center font-serif' id='contact'>
          Retailer inquiries - sales@d1wholesalers.com
          <br/>
          General inquiries - info@d1wholesalers.com
          <br/>
          +64 27 321 6887
        </p>
      </div>
  </Layout>
  )
}

export default IndexPage
