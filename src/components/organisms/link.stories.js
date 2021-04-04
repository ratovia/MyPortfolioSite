import React from "react"

import { Link } from "./Link"
import backgroundImg from "../../stories/assets/bg.jpg"

export default {
  title: "MyPortFolioSite/Link",
  component: Link,
}

const Template = args => <Link {...args} />

export const list = Template.bind({})
list.args = {
  links: [
    {
      name: "Ruby on Rails",
      imageUrl: backgroundImg,
    },
    {
      name: "HTML/CSS",
      imageUrl: backgroundImg,
    },
    {
      name: "JavaScript",
      imageUrl: backgroundImg,
    },
    {
      name: "Python",
      imageUrl: backgroundImg,
    },
    {
      name: "PHP",
      imageUrl: backgroundImg,
    },
    {
      name: "AWS",
      imageUrl: backgroundImg,
    },
    {
      name: "3DCG",
      imageUrl: backgroundImg,
    },
    {
      name: "linux",
      imageUrl: backgroundImg,
    },
    {
      name: "React",
      imageUrl: backgroundImg,
    },
  ],
}
