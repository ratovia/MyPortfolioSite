import React from "react"

import { CircleImageIcon } from "./CircleImageIcon"

import ratoviaIcon from "../../stories/assets/ratovia_icon.jpg"
import javascriptIcon from "../../stories/assets/javascript_icon.png"
import reactIcon from "../../stories/assets/react_icon.jpg"

export default {
  title: "MyPortFolioSite/CircleImageIcon",
  component: CircleImageIcon,
}

const Template = args => <CircleImageIcon {...args} />

export const Large = Template.bind({})
Large.args = {
  imageUrl: ratoviaIcon,
  size: "large",
}
export const Medium = Template.bind({})
Medium.args = {
  imageUrl: javascriptIcon,
  size: "medium",
}
export const Small = Template.bind({})
Small.args = {
  imageUrl: reactIcon,
  size: "small",
}
