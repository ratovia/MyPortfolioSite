import React from "react"
import renderer from "react-test-renderer"
import backgroundImg from "../../stories/assets/bg.jpg"

import { Link } from "./Link"
describe("Links", () => {
  it("renders correctly", () => {
    const links = [
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
    ]
    const tree = renderer.create(<Link links={links}></Link>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
