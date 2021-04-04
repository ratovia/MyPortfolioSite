import React from "react"
import { Navigation } from "../components/organisms/Navigation"
import { Footer } from "../components/organisms/Footer"
import { ContentTemplate } from "../components/templates/ContentTemplate"
import bgImage from "../../static/bg.jpg"
import { HeroImage } from "../components/organisms/HeroImage"
import { Link } from "../components/organisms/Link"
import backgroundImg from "../../static/bg.jpg"

const links = () => {
  return (
    <ContentTemplate
      navigation={<Navigation></Navigation>}
      heroContent={<HeroImage imageUrl={bgImage}></HeroImage>}
      mainContent={
        <Link
          links={[
            {
              name: "Ruby on Rails",
              imageUrl: backgroundImg,
            },
            {
              name: "HTML/CSS",
              imageUrl: backgroundImg,
            },
            {
              name: "JavaScript",
              imageUrl: backgroundImg,
            },
            {
              name: "Python",
              imageUrl: backgroundImg,
            },
            {
              name: "PHP",
              imageUrl: backgroundImg,
            },
            {
              name: "AWS",
              imageUrl: backgroundImg,
            },
            {
              name: "3DCG",
              imageUrl: backgroundImg,
            },
            {
              name: "linux",
              imageUrl: backgroundImg,
            },
            {
              name: "React",
              imageUrl: backgroundImg,
            },
          ]}
        ></Link>
      }
      footerContent={<Footer></Footer>}
    ></ContentTemplate>
  )
}

export default links
