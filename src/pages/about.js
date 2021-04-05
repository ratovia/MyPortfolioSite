import React from "react"
import { MessageArea } from "../components/organisms/MessageArea"
import MyProfile from "../../static/MyProfile.jpg"

import { Navigation } from "../components/organisms/Navigation"
import { Footer } from "../components/organisms/Footer"
import { ContentTemplate } from "../components/templates/ContentTemplate"

const about = () => {
  return (
    <ContentTemplate
      navigation={<Navigation></Navigation>}
      heroContent={
        <MessageArea
          imageUrl={MyProfile}
          visionText="ワインとプログラミングを掛け合わせたい
副業およびフリーランスとして活躍していきたい
得意のRailsや周辺知識を生かしながらOSSコントリビューターになりたい"
        ></MessageArea>
      }
      mainContent={<div></div>}
      footerContent={<Footer></Footer>}
    ></ContentTemplate>
  )
}

export default about
