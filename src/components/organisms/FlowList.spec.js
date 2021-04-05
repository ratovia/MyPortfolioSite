import React from "react"
import renderer from "react-test-renderer"
import { FlowList } from "./FlowList"

describe("FlowList", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <FlowList
          flows={[
            {
              startDate: "2019年8月",
              endDate: "現在",
              orgName: "株式会社xxx",
              period: "1年間",
              content:
                "helloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworld",
              batchs: ["営業", "エンジニア", "セールス", "労務"],
            },
            {
              startDate: "2019年8月",
              endDate: "現在",
              orgName: "株式会社yyy",
              period: "1年間",
              content:
                "helloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworld",
              batchs: ["営業", "エンジニア", "セールス", "労務"],
            },
            {
              startDate: "2019年8月",
              endDate: "現在",
              orgName: "株式会社zzz",
              period: "1年間",
              content:
                "helloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworld",
              batchs: ["営業", "エンジニア", "セールス", "労務"],
            },
          ]}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
