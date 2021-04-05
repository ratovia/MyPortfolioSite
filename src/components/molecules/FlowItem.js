import React from "react"
import styled from "styled-components"
import { Batch } from "../atoms/Batch"
import { Flow } from "../atoms/Flow"
import { TypographyH5, TypographyH6 } from "../atoms/Typography"

const FlowArea = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`

const DateArea = styled.div`
  margin-top: 100px;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const LineArea = styled.div`
  padding: 0 50px;
`

const TextArea = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 100px;
`

const TextItem = styled.div`
  max-width: 700px;
  margin-bottom: 15px;
`
const BatchArea = styled.span`
  margin-right: 10px;
`
export const FlowItem = ({
  startDate,
  endDate,
  orgName,
  period,
  content,
  batchs,
}) => {
  return (
    <FlowArea>
      <DateArea>
        <TypographyH6 label={startDate} color="#C7C7C7"></TypographyH6>
        <TypographyH6 label="〜" color="#C7C7C7"></TypographyH6>
        <TypographyH6 label={endDate} color="#C7C7C7"></TypographyH6>
      </DateArea>
      <LineArea>
        <Flow></Flow>
      </LineArea>
      <TextArea>
        <TextItem>
          <TypographyH5 label={orgName} color="white"></TypographyH5>
          <TypographyH6 label={period} color="#C7C7C7"></TypographyH6>
        </TextItem>
        <TextItem>
          {batchs.map(batch => {
            return (
              <BatchArea key={batch}>
                <Batch label={batch}></Batch>
              </BatchArea>
            )
          })}
        </TextItem>
        <TextItem>
          <TypographyH6 label={content} color="white"></TypographyH6>
        </TextItem>
      </TextArea>
    </FlowArea>
  )
}
