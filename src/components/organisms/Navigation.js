import React from "react"
import styled from "styled-components"
import { Menu } from "../molecules/Menu"

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f04949;
  text-orientation: sideways;
  writing-mode: vertical-rl;
  width: 100%;
  height: 100%;
  justify-content: center;
`

export const Navigation = () => {
  return (
    <Nav>
      <Menu></Menu>
    </Nav>
  )
}
