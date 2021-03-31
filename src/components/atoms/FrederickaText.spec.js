import React from "react"
import renderer from "react-test-renderer"
import {
  FrederickaText,
  FrederickaH1,
  FrederickaH2,
  FrederickaH3,
} from "./FrederickaText"
describe("FrederickaText", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<FrederickaText label="Hello World" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders correctly", () => {
    const tree = renderer
      .create(<FrederickaText label="Hello World" color="red" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
describe("FrederickaH1", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<FrederickaH1 label="Hello World" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders correctly", () => {
    const tree = renderer
      .create(<FrederickaH1 label="Hello World" color="red" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
describe("FrederickaH2", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<FrederickaH2 label="Hello World" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders correctly", () => {
    const tree = renderer
      .create(<FrederickaH2 label="Hello World" color="red" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
describe("FrederickaH3", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<FrederickaH3 label="Hello World" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders correctly", () => {
    const tree = renderer
      .create(<FrederickaH3 label="Hello World" color="red" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
