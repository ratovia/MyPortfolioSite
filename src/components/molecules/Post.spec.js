import React from "react"
import renderer from "react-test-renderer"
import { Post } from "./Post"
import backgroundImg from "../../stories/assets/bg.jpg"

describe("Post", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Post imageUrl={backgroundImg} date="2021-1-1" title="Hello World" />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
