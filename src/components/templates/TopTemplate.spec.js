import React from "react"
import renderer from "react-test-renderer"
import { TopTemplate } from "./TopTemplate"
describe("TopTemplate", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <TopTemplate
          headerText="Hello World"
          navigation={
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "red",
              }}
            ></div>
          }
          leftContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "blue",
              }}
            ></div>
          }
          rightContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "green",
              }}
            ></div>
          }
          mainContent={
            <div
              style={{
                width: "100%",
                minHeight: "100px",
                backgroundColor: "yellow",
              }}
            ></div>
          }
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
