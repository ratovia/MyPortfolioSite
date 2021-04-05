import React from "react"
import renderer from "react-test-renderer"
import { Batch } from "./Batch"

describe("Batch", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Batch label="エンジニア" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
