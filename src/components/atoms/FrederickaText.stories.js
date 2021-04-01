import React from "react"

import {
  FrederickaText,
  FrederickaH1,
  FrederickaH2,
  FrederickaH3,
} from "./FrederickaText"

export default {
  title: "MyPortFolioSite/FrederickaText",
  component: FrederickaText,
  decorators: [
    Story => (
      <div style={{ backgroundColor: "#414141" }}>
        <Story />
      </div>
    ),
  ],
}

const Template = args => <FrederickaText {...args} />
const FrederickaH1Template = args => <FrederickaH1 {...args} />
const FrederickaH2Template = args => <FrederickaH2 {...args} />
const FrederickaH3Template = args => <FrederickaH3 {...args} />

export const Text = Template.bind({})
Text.args = {
  label: "This is the fredericka-the-great fonts text",
  color: "white",
}
export const H1 = FrederickaH1Template.bind({})
H1.args = {
  label: "This is the fredericka-the-great fonts h1",
  color: "white",
}
export const H2 = FrederickaH2Template.bind({})
H2.args = {
  label: "This is the fredericka-the-great fonts h2",
  color: "white",
}
export const H3 = FrederickaH3Template.bind({})
H3.args = {
  label: "This is the fredericka-the-great fonts h3",
  color: "white",
}
