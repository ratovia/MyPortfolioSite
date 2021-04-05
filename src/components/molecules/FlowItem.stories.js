import React from "react"

import { FlowItem } from "./FlowItem"

export default {
  title: "MyPortFolioSite/FlowItem",
  component: FlowItem,
}

const Template = args => <FlowItem {...args} />

export const item = Template.bind({})
item.args = {
  startDate: "2019年8月",
  endDate: "現在",
  orgName: "株式会社xxx",
  period: "1年間",
  batchs: ["営業", "エンジニア", "セールス", "労務"],
  content:
    "helloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworld",
}
