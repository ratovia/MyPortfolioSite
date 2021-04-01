import React from "react"

import { Navigation } from "./Navigation"

export default {
  title: "MyPortFolioSite/Navigation",
  component: Navigation,
  decorators: [
    Story => (
      <div style={{ width: "108px", height: "100%" }}>
        <Story />
      </div>
    ),
  ],
}

const Template = args => <Navigation {...args} />

export const navigation = Template.bind({})
