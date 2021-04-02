import React from "react"
import renderer from "react-test-renderer"
import { LeftContent } from "./LeftContent"
import javascriptIcon from "../../stories/assets/javascript_icon.png"

describe("LeftContent", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<LeftContent label="Hello world" imageUrl={javascriptIcon} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
