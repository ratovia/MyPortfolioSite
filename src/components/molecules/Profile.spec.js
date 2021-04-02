import React from "react"
import renderer from "react-test-renderer"
import { Profile } from "./Profile"
import javascriptIcon from "../../stories/assets/javascript_icon.png"

describe("Profile", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Profile
          profileText="Hello world"
          skillText="This is Component"
          imageUrl={javascriptIcon}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
