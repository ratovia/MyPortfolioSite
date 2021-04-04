import React from "react"
import { Navigation } from "../components/organisms/Navigation"
import { Footer } from "../components/organisms/Footer"
import { ContentTemplate } from "../components/templates/ContentTemplate"
import bgImage from "../../static/bg.jpg"
import { HeroImage } from "../components/organisms/HeroImage"

const work = () => {
  return (
    <ContentTemplate
      navigation={<Navigation></Navigation>}
      heroContent={<HeroImage imageUrl={bgImage}></HeroImage>}
      mainContent={<div></div>}
      footerContent={<Footer></Footer>}
    ></ContentTemplate>
  )
}

export default work
