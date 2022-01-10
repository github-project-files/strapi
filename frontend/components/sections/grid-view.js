import Markdown from "react-markdown"
import { getButtonAppearance } from "utils/button"
import ButtonLink from "../elements/button-link"
import NextImage from "../elements/image"

const GridView = ({ data }) => {
  return (
    <div className="container py-12">
      <h1 className="text-4xl text-center">{data.title}</h1>
      
    </div>
  )
}

export default GridView
