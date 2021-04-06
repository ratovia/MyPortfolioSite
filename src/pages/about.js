import React from "react"
import { MessageArea } from "../components/organisms/MessageArea"
import MyProfile from "../../static/MyProfile.jpg"
import { Navigation } from "../components/organisms/Navigation"
import { Footer } from "../components/organisms/Footer"
import { ContentTemplate } from "../components/templates/ContentTemplate"
import { FlowList } from "../components/organisms/FlowList"

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
      mainContent={
        <FlowList
          flows={[
            {
              startDate: "2019年8月",
              endDate: "現在",
              orgName: "株式会社xxx",
              period: "1年間",
              content:
                "helloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworld",
              batchs: ["営業", "エンジニア", "セールス", "労務"],
            },
            {
              startDate: "2019年8月",
              endDate: "現在",
              orgName: "株式会社yyy",
              period: "1年間",
              content:
                "helloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworld",
              batchs: ["営業", "エンジニア", "セールス", "労務"],
            },
            {
              startDate: "2019年8月",
              endDate: "現在",
              orgName: "株式会社zzz",
              period: "1年間",
              content:
                "helloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworld",
              batchs: ["営業", "エンジニア", "セールス", "労務"],
            },
          ]}
        />
      }
      footerContent={<Footer></Footer>}
    ></ContentTemplate>
  )
}

export default about
