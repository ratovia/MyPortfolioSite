import React from "react"
import renderer from "react-test-renderer"
import { Flow } from "./Flow"

describe("Flow", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Flow />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
