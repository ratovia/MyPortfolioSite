export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: "red", value: "#F04949" },
      { name: "gray", value: "#414141" },
    ],
  },
}

import React from "react"

export const decorators = [
  Story => (
    <div
      style={{
        backgroundColor: "#414141",
      }}
    >
      <Story />
    </div>
  ),
]
