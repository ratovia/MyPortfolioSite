import React from "react"

import { TopTemplate } from "./TopTemplate"

export default {
  title: "MyPortFolioSite/TopTemplate",
  component: TopTemplate,
}

const Template = args => <TopTemplate {...args} />

export const top = Template.bind({})
top.args = {
  headerText: "Hello World",
  navigation: (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "red",
      }}
    ></div>
  ),
  leftContent: (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "blue",
      }}
    ></div>
  ),
  rightContent: (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "green",
      }}
    ></div>
  ),
  mainContent: (
    <div
      style={{
        width: "100%",
        minHeight: "100px",
        backgroundColor: "yellow",
      }}
    ></div>
  ),
}
