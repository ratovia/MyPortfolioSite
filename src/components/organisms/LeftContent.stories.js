import React from "react"

import { LeftContent } from "./LeftContent"
import javascriptIcon from "../../stories/assets/javascript_icon.png"

export default {
  title: "MyPortFolioSite/LeftContent",
  component: LeftContent,
}

const Template = args => <LeftContent {...args} />

export const content = Template.bind({})
content.args = {
  profileText:
    "Hello World.Hello World.Hello World.Hello World.Hello World.Hello World.",
  skillText:
    "Hello World.Hello World.Hello World.Hello World.Hello World.Hello World.",
  imageUrl: javascriptIcon,
}
