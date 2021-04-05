import React from "react"

import { FlowList } from "./FlowList"

export default {
  title: "MyPortFolioSite/FlowList",
  component: FlowList,
}

const Template = args => <FlowList {...args} />

export const list = Template.bind({})
list.args = {
  flows: [
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
  ],
}
