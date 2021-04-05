import React from "react"
import styled from "styled-components"
import { FrederickaH2 } from "../atoms/FrederickaText"
import { FlowItem } from "../molecules/FlowItem"

const FlowListArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px 30px;
`

const TitleText = styled.div`
  align-self: flex-end;
  margin-bottom: 60px;
`

const FlowItemsArea = styled.div`
  width: 100%;
`

export const FlowList = ({ flows }) => {
  return (
    <FlowListArea>
      <TitleText>
        <FrederickaH2 label="skills" color="white"></FrederickaH2>
      </TitleText>
      <FlowItemsArea>
        {flows.map(flow => {
          return (
            <FlowItem
              startDate={flow.startDate}
              endDate={flow.endDate}
              orgName={flow.orgName}
              period={flow.period}
              content={flow.content}
              batchs={flow.batchs}
              key={flow.orgName}
            ></FlowItem>
          )
        })}
      </FlowItemsArea>
    </FlowListArea>
  )
}
