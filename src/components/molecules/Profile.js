import React from "react"
import styled from "styled-components"
import { CircleImageIcon } from "../atoms/CircleImageIcon"
import { TypographyH6 } from "../atoms/Typography"

const ProfileArea = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  max-width: 365px;
`

const ProfileItem = styled.div`
  text-align: left;
  margin-bottom: 15px;
`

const ProfileImage = styled.div`
  text-align: center;
  margin-bottom: 72px;
`

export const Profile = ({ profileText, skillText, imageUrl }) => {
  return (
    <ProfileArea>
      <ProfileImage>
        <CircleImageIcon imageUrl={imageUrl} size="large"></CircleImageIcon>
      </ProfileImage>
      <ProfileItem>
        <TypographyH6 label={profileText} color="white"></TypographyH6>
      </ProfileItem>
      <ProfileItem>
        <TypographyH6 label={skillText} color="white"></TypographyH6>
      </ProfileItem>
    </ProfileArea>
  )
}
