import React from "react"
import renderer from "react-test-renderer"
import javascriptIcon from "../../stories/assets/javascript_icon.png"
import ratoviaIcon from "../../stories/assets/ratovia_icon.jpg"
import reactIcon from "../../stories/assets/react_icon.jpg"

import { CircleImageIcon } from "./CircleImageIcon"
describe("CircleImageIcon", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<CircleImageIcon imageUrl={javascriptIcon} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders correctly", () => {
    const tree = renderer
      .create(<CircleImageIcon imageUrl={ratoviaIcon} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders correctly", () => {
    const tree = renderer
      .create(<CircleImageIcon imageUrl={reactIcon} size="large" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders correctly", () => {
    const tree = renderer
      .create(<CircleImageIcon imageUrl={reactIcon} size="medium" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders correctly", () => {
    const tree = renderer
      .create(<CircleImageIcon imageUrl={reactIcon} size="small" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
