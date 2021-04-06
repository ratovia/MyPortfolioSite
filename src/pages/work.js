import React from "react"
import { Navigation } from "../components/organisms/Navigation"
import { Footer } from "../components/organisms/Footer"
import { ContentTemplate } from "../components/templates/ContentTemplate"
import bgImage from "../../static/bg.jpg"
import { HeroImage } from "../components/organisms/HeroImage"
import { FlowList } from "../components/organisms/FlowList"

const work = () => {
  return (
    <ContentTemplate
      navigation={<Navigation></Navigation>}
      heroContent={<HeroImage imageUrl={bgImage}></HeroImage>}
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

export default work
