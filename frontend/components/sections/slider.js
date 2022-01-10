// import { MdCheckBox } from "react-icons/md"
//  import classNames from "classnames"
// import NextImage from "../elements/image"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const Slider = ({ data }) => {

  return (
    <div className="container py-12">
      <h1 className="text-4xl text-center">Yes title coming from slider files</h1>
      {/* <h1 className="text-4xl text-center">{data.Title}</h1> */}
      {/* <div className="flex-shrink-0 w-full md:w-6/12 mt-6 md:mt-0">
        <NextImage media={data.image} />
      </div> */}
      {/* <AwesomeSlider>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      </AwesomeSlider> */}

    </div>
  )
}

export default Slider
