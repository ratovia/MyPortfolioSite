import React from "react"
import renderer from "react-test-renderer"
import { FlowItem } from "./FlowItem"
describe("FlowItem", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <FlowItem
          startDate={"2019年8月"}
          endDate={"現在"}
          orgName={"株式会社xxx"}
          period={"1年間"}
          content={
            "helloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworld"
          }
          batchs={["営業", "エンジニア", "セールス", "労務"]}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
