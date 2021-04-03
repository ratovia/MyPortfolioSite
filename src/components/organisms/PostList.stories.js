import React from "react"

import { PostList } from "./PostList"
import backgroundImg from "../../stories/assets/bg.jpg"

export default {
  title: "MyPortFolioSite/PostList",
  component: PostList,
}

const Template = args => <PostList {...args} />

export const list = Template.bind({})
list.args = {
  posts: [
    {
      imageUrl: backgroundImg,
      date: "2020-1-1",
      title: "Hello World",
    },
  ],
}
