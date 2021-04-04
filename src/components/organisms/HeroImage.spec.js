import React from "react"
import renderer from "react-test-renderer"
import { HeroImage } from "./HeroImage"
import bgImage from "../../stories/assets/bg.jpg"

describe("HeroImage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<HeroImage imageUrl={bgImage} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
