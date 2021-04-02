import React from "react"

import { Photograph } from "./Photograph"

import ratoviaIcon from "../../stories/assets/ratovia_icon.jpg"
import javascriptIcon from "../../stories/assets/javascript_icon.png"

export default {
  title: "MyPortFolioSite/Photograph",
  component: Photograph,
}

const Template = args => <Photograph {...args} />

export const image = Template.bind({})
image.args = {
  imageUrl: ratoviaIcon,
}
export const radius = Template.bind({})
radius.args = {
  imageUrl: javascriptIcon,
  radius: true,
}
