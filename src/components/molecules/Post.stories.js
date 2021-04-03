import React from "react"

import { Post } from "./Post"
import backgroundImg from "../../stories/assets/bg.jpg"

export default {
  title: "MyPortFolioSite/Post",
  component: Post,
}

const Template = args => <Post {...args} />

export const post = Template.bind({})
post.args = {
  imageUrl: backgroundImg,
  date: "2021-1-1",
  title: "Hello World",
}
