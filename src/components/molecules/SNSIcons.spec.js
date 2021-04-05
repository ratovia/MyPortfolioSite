import React from "react"
import renderer from "react-test-renderer"
import { SNSIcons } from "./SNSIcons"

describe("SNSIcons", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SNSIcons />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
