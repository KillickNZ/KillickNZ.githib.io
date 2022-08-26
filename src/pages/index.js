import * as React from "react"
import Brands from "../components/brands"
import Footer from "../components/footer"
import WhatWeDo from "../components/whatWeDo"

import Layout from "../components/layout"
import StyledBackgroundSection from "../components/styledBackgroundSection"

const IndexPage = () => {
  return (
    <Layout>
      <StyledBackgroundSection />
      <WhatWeDo />
      <Brands />
      <Footer />
    </Layout>
  )
}

export default IndexPage
