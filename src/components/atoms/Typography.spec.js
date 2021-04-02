import React from "react"
import renderer from "react-test-renderer"
import {
  Typography,
  TypographyH4,
  TypographyH5,
  TypographyH6,
} from "./Typography"
describe("Typography", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Typography label="Hello World" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders correctly", () => {
    const tree = renderer
      .create(<Typography label="Hello World" color="red" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
describe("TypographyH4", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TypographyH4 label="Hello World" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders correctly", () => {
    const tree = renderer
      .create(<TypographyH4 label="Hello World" color="red" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
describe("TypographyH5", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TypographyH5 label="Hello World" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders correctly", () => {
    const tree = renderer
      .create(<TypographyH5 label="Hello World" color="red" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
describe("TypographyH6", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TypographyH6 label="Hello World" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders correctly", () => {
    const tree = renderer
      .create(<TypographyH6 label="Hello World" color="red" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
