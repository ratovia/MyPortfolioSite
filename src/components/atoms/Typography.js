import React from "react"
import styled from "styled-components"

const Font = styled.p`
  font-family: "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ",
    "Meiryo", "verdana", sans-serif;
  color: ${props => props.color};
  font-weight: 100;
  margin: 0;
`

const H4 = styled.h4`
  font-size: 36px;
  margin: 0;
`
const H5 = styled.h5`
  font-size: 24px;
  margin: 0;
`

export const Typography = ({ label, color }) => {
  return <Font color={color}>{label}</Font>
}
export const TypographyH4 = ({ label, color }) => {
  return (
    <H4>
      <div>
        <Typography label={label} color={color} />
      </div>
    </H4>
  )
}
export const TypographyH5 = ({ label, color }) => {
  return (
    <H5>
      <Typography label={label} color={color} />
    </H5>
  )
}
