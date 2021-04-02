import React from "react"

import { Typography, TypographyH4, TypographyH5 } from "./Typography"

export default {
  title: "MyPortFolioSite/Typography",
  component: Typography,
  decorators: [
    Story => (
      <div style={{ backgroundColor: "#414141" }}>
        <Story />
      </div>
    ),
  ],
}

const Template = args => <Typography {...args} />
const TypographyH4Template = args => <TypographyH4 {...args} />
const TypographyH5Template = args => <TypographyH5 {...args} />

export const Text = Template.bind({})
Text.args = {
  label: "This is the Typography text",
  color: "white",
}
export const H4 = TypographyH4Template.bind({})
H4.args = {
  label: "This is the Typography H4",
  color: "white",
}
export const H5 = TypographyH5Template.bind({})
H5.args = {
  label: "This is the Typography H5",
  color: "white",
}
