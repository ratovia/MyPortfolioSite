import React from "react"
import { Navigation } from "../components/organisms/Navigation"
import { Footer } from "../components/organisms/Footer"
import { ContentTemplate } from "../components/templates/ContentTemplate"

const links = () => {
  return (
    <ContentTemplate
      navigation={<Navigation></Navigation>}
      heroContent={<div></div>}
      mainContent={<div></div>}
      footerContent={<Footer></Footer>}
    ></ContentTemplate>
  )
}

export default links
