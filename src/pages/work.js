import React from "react"
import { Navigation } from "../components/organisms/Navigation"
import { Footer } from "../components/organisms/Footer"
import { ContentTemplate } from "../components/templates/ContentTemplate"
import bgImage from "../../static/bg.jpg"
import { HeroImage } from "../components/organisms/HeroImage"
import { FlowList } from "../components/organisms/FlowList"
import { data } from "../store/data"

const work = () => {
  return (
    <ContentTemplate
      navigation={<Navigation></Navigation>}
      heroContent={<HeroImage imageUrl={data.workBGImage}></HeroImage>}
      mainContent={<FlowList flows={data.products} />}
      footerContent={<Footer></Footer>}
    ></ContentTemplate>
  )
}

export default work
