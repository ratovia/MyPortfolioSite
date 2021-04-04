import React from "react"

import { ContentTemplate } from "./ContentTemplate"

export default {
  title: "MyPortFolioSite/ContentTemplate",
  component: ContentTemplate,
}

const Template = args => <ContentTemplate {...args} />

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
  footerContent: (
    <div
      style={{
        width: "100%",
        minHeight: "200px",
        backgroundColor: "orange",
      }}
    ></div>
  ),
}
