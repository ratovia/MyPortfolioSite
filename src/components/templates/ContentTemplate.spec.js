import React from "react"
import renderer from "react-test-renderer"
import { ContentTemplate } from "./ContentTemplate"
describe("ContentTemplate", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ContentTemplate
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
          heroContent={
            <div
              style={{
                width: "100%",
                minHeight: "100px",
                backgroundColor: "blue",
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
          footerContent={
            <div
              style={{
                width: "100%",
                minHeight: "200px",
                backgroundColor: "orange",
              }}
            ></div>
          }
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
