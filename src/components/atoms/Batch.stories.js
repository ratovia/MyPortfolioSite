import React from "react"

import { Batch } from "./Batch"

export default {
  title: "MyPortFolioSite/Batch",
  component: Batch,
}

const Template = args => <Batch {...args} />

export const text = Template.bind({})
text.args = {
  label: "エンジニア",
}
