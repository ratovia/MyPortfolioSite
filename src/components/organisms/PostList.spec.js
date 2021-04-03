import React from "react"
import renderer from "react-test-renderer"
import backgroundImg from "../../stories/assets/bg.jpg"

import { PostList } from "./PostList"
describe("PostList", () => {
  it("renders correctly", () => {
    const posts = [
      {
        imageUrl: backgroundImg,
        date: "2020-1-1",
        title: "Hello World",
      },
    ]
    const tree = renderer.create(<PostList posts={posts}></PostList>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
