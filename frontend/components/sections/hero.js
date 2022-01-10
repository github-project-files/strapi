import Markdown from "react-markdown"
import { getButtonAppearance } from "utils/button"
import ButtonLink from "../elements/button-link"
import NextImage from "../elements/image"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Hero = ({ data }) => {
  return (
    <AwesomeSlider>
    {/* <main className="container flex flex-col md:flex-row items-center justify-between py-12">
      <div className="flex-1 sm:pr-8">
        <p className="uppercase tracking-wide font-semibold">{data.label}</p>
        <h1 className="title mt-2 sm:mt-0 mb-4 sm:mb-2">{data.title}</h1>
        <p className="text-xl mb-6">{data.description}</p>
        <div className="flex flex-row flex-wrap gap-4">
          {data.buttons.map((button) => (
            <ButtonLink
              button={button}
              appearance={getButtonAppearance(button.type, "light")}
              key={button.id}
            />
          ))}
        </div>
        <div className="text-base md:text-sm mt-4 sm:mt-3 rich-text-hero">
          <Markdown>{data.smallTextWithLink}</Markdown>
        </div>
      </div>
      <div className="flex-shrink-0 w-full md:w-6/12 mt-6 md:mt-0">
        <NextImage media={data.picture} />
      </div>      
    </main> */}
     <div
      data-src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_2865/x_0,y_23,w_5000,h_2814,r_0,c_crop,q_80,fl_progressive/w_1500,c_fit,f_auto/niraamaya-retreats-samroha-athirappilly/Samroha_01_dep4nn"
      className="image__description"
    >
      <h1>Alimentos Finos Mexicanos</h1>
      <p>De exportación saludable.</p>
    </div>
    <div
      data-src="https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      className="image__description"
    >
      <h3>Lorem Ipsum</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
    <div
      data-src="https://images.pexels.com/photos/1172241/pexels-photo-1172241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      className="image__description"
    >
      <h3>Lorem Ipsum</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
    <div
      data-src="https://res.cloudinary.com/simplotel/image/upload/x_26,y_0,w_1451,h_815,r_0,c_crop,q_80,fl_progressive/w_1500,c_fit,f_auto/niraamaya-wellness-retreats/Niraamaya_Hotels_1_tuqskg_vif4q8"
      className="image__description"
    >
      <h3>Lorem Ipsum</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
    </AwesomeSlider>
  )
}

export default Hero
