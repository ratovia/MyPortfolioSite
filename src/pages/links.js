import React from "react"
import { Navigation } from "../components/organisms/Navigation"
import { Footer } from "../components/organisms/Footer"
import { ContentTemplate } from "../components/templates/ContentTemplate"
import bgImage from "../../static/bg.jpg"
import { HeroImage } from "../components/organisms/HeroImage"
import { Link } from "../components/organisms/Link"
import backgroundImg from "../../static/bg.jpg"
import { data } from "../store/data"

const links = () => {
  return (
    <ContentTemplate
      navigation={<Navigation></Navigation>}
      heroContent={<HeroImage imageUrl={data.linksBGImage}></HeroImage>}
      mainContent={<Link links={data.links}></Link>}
      footerContent={<Footer></Footer>}
    ></ContentTemplate>
  )
}

export default links
