import React from "react"

import { HeroImage } from "./HeroImage"
import bgImage from "../../stories/assets/bg.jpg"

export default {
  title: "MyPortFolioSite/HeroImage",
  component: HeroImage,
}

const Template = args => <HeroImage {...args} />

export const hero = Template.bind({})
hero.args = {
  imageUrl: bgImage,
}
