import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header className='bg-darkGrey' >
    <div
      className='flex flex-row justify-between items-center'
    >    
      <StaticImage
      className='ml-3'
      src="../images/TVC_D1WHOLESALERS_LOGO_FA-02.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      />
      <h2 className=' my-auto mr-6'>
        <Link
          
          to="#contact"
          className='text-white font-serif decoration-0'
        >
          Contact
        </Link>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
