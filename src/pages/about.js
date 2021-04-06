import React from "react"
import { MessageArea } from "../components/organisms/MessageArea"
import { Navigation } from "../components/organisms/Navigation"
import { Footer } from "../components/organisms/Footer"
import { ContentTemplate } from "../components/templates/ContentTemplate"
import { FlowList } from "../components/organisms/FlowList"
import { data } from "../store/data"

const about = () => {
  return (
    <ContentTemplate
      navigation={<Navigation></Navigation>}
      heroContent={
        <MessageArea
          imageUrl={data.profileImage}
          visionText={data.visionText}
        ></MessageArea>
      }
      mainContent={<FlowList flows={data.carrier} />}
      footerContent={<Footer></Footer>}
    ></ContentTemplate>
  )
}

export default about
