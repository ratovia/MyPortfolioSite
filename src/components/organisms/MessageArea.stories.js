import React from "react"

import { MessageArea } from "./MessageArea"
import javascriptIcon from "../../stories/assets/javascript_icon.png"

export default {
  title: "MyPortFolioSite/MessageArea",
  component: MessageArea,
}

const Template = args => <MessageArea {...args} />

export const content = Template.bind({})
content.args = {
  visionText:
    "hellohellohellohellohellohellohellohellohelllohellohellohellohellohelllohellohellohellohellohelllohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello",
  imageUrl: javascriptIcon,
}
