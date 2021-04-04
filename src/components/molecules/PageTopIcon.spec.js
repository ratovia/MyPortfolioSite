import React from "react"
import renderer from "react-test-renderer"
import { PageTopIcon } from "./PageTopIcon"
describe("PageTopIcon", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PageTopIcon />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
