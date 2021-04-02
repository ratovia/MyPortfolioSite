import React from "react"

import { Profile } from "./Profile"
import javascriptIcon from "../../stories/assets/javascript_icon.png"

export default {
  title: "MyPortFolioSite/Profile",
  component: Profile,
}

const Template = args => <Profile {...args} />

export const profile = Template.bind({})
profile.args = {
  profileText:
    "Hello World.Hello World.Hello World.Hello World.Hello World.Hello World.",
  skillText:
    "Hello World.Hello World.Hello World.Hello World.Hello World.Hello World.",
  imageUrl: javascriptIcon,
}
