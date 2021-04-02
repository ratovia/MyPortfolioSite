import React from "react"
import renderer from "react-test-renderer"
import { Profile } from "./Profile"
import javascriptIcon from "../../stories/assets/javascript_icon.png"

describe("Profile", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Profile label="Hello world" imageUrl={javascriptIcon} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
