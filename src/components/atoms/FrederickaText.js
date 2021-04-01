import React from "react"
import "@fontsource/fredericka-the-great"
import styled from "styled-components"

const Font = styled.p`
  font-family: "Fredericka the Great";
  color: ${props => props.color};
  font-weight: 100;
  margin: 0;
`

const H1 = styled.h1`
  font-size: 72px;
  text-transform: uppercase;
  margin: 0;
`
const H2 = styled.h2`
  font-size: 64px;
  text-transform: uppercase;
  margin: 0;
`
const H3 = styled.h3`
  font-size: 32px;
  margin: 0;
`

export const FrederickaText = ({ label, color }) => {
  return <Font color={color}>{label}</Font>
}
export const FrederickaH1 = ({ label, color }) => {
  return (
    <H1>
      <FrederickaText label={label} color={color} />
    </H1>
  )
}
export const FrederickaH2 = ({ label, color }) => {
  return (
    <H2>
      <FrederickaText label={label} color={color} />
    </H2>
  )
}
export const FrederickaH3 = ({ label, color }) => {
  return (
    <H3>
      <FrederickaText label={label} color={color} />
    </H3>
  )
}
