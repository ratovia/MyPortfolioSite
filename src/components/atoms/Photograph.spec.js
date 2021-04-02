import React from "react"
import renderer from "react-test-renderer"
import { Photograph } from "./Photograph"
import reactIcon from "../../stories/assets/react_icon.jpg"

describe("Photograph", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Photograph imageUrl={reactIcon} radius />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders correctly", () => {
    const tree = renderer.create(<Photograph imageUrl={reactIcon} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
