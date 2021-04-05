import React from "react"
import renderer from "react-test-renderer"
import { MessageArea } from "./MessageArea"
import javascriptIcon from "../../stories/assets/javascript_icon.png"

describe("MessageArea", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <MessageArea visionText="Hello world" imageUrl={javascriptIcon} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
