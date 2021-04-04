import React from "react"
import { CircleImageIcon } from "../atoms/CircleImageIcon"
import { FrederickaH2 } from "../atoms/FrederickaText"
import styled from "styled-components"

const SkillsArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px 30px;
`

const TitleText = styled.div`
  align-self: flex-end;
  margin-bottom: 60px;
`

const SkillListTop = styled.div`
  align-self: flex-end;
  display: flex;
  justify-content: space-around;
`
const SkillListMiddle = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-around;
`
const SkillListBottom = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: space-around;
`

const Container = styled.div`
  padding: 10px 40px;
`
export const Skills = ({ skills }) => {
  return (
    <SkillsArea>
      <TitleText>
        <FrederickaH2 label="skills" color="white"></FrederickaH2>
      </TitleText>
      <SkillListTop>
        {skills.slice(0, 3).map(skill => {
          return (
            <Container key={skill.name}>
              <CircleImageIcon
                imageUrl={skill.imageUrl}
                size="medium"
              ></CircleImageIcon>
            </Container>
          )
        })}
      </SkillListTop>
      <SkillListMiddle>
        {skills.slice(3, 6).map(skill => {
          return (
            <Container key={skill.name}>
              <CircleImageIcon
                imageUrl={skill.imageUrl}
                size="medium"
              ></CircleImageIcon>
            </Container>
          )
        })}
      </SkillListMiddle>
      <SkillListBottom>
        {skills.slice(6, 9).map(skill => {
          return (
            <Container key={skill.name}>
              <CircleImageIcon
                imageUrl={skill.imageUrl}
                size="medium"
              ></CircleImageIcon>
            </Container>
          )
        })}
      </SkillListBottom>
    </SkillsArea>
  )
}
