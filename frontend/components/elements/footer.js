import PropTypes from "prop-types"
import { linkPropTypes, mediaPropTypes } from "utils/types"
import NextImage from "./image"
import CustomLink from "./custom-link"

const Footer = ({ footer }) => {
  return (
    <footer className="pt-0">
      {/* <footer className="pt-12 bg-gray-100">*/}
       {/* <div className="container flex flex-col lg:flex-row lg:justify-between"> */}
         {/* <div>
          {footer.logo && (
            <NextImage width="120" height="33" media={footer.logo} />
          )}
        </div>  */}
        {/* <nav className="flex flex-wrap flex-row lg:gap-20 items-start lg:justify-end mb-10">
          {footer.columns.map((footerColumn) => (
            <div
              key={footerColumn.id}
              className="mt-10 lg:mt-0 w-6/12 lg:w-auto"
            >
              <p className="uppercase tracking-wide font-semibold">
                {footerColumn.title}
              </p>
              <ul className="mt-2">
                {footerColumn.links.map((link) => (
                  <li
                    key={link.id}
                    className="text-gray-700 py-1 px-1 -mx-1 hover:text-gray-900"
                  >
                    <CustomLink link={link}>{link.text}</CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav> */}
      {/* </div>  */}
      {/* <div className="text-sm items-center bg-gray-200 py-6 text-gray-700">
        <div className="container text-center">{footer.smallText}</div>
      </div> */}
  <footer class="text-sm items-center bg-gray-900 py-6 text-white" id="footer">
    <section>
    {/* <div class="container text-center"> */}
      <div class="comm_cont text-center">
        
            <p>Niraamaya Wellness Retreats</p><p>Corporate Office: Niraamaya Retreats Private Limited, #54, Richmond Road, Bangalore - 560025.</p>
           
      <div class="col-xs-12">
        <div class="col-xs-12">
          <div class="row">
            <div class="">
              <ul class="flex flex-row justify-center flex-wrap gap-4 py-6">
              <li>
                <div class="footer-detail mail-show-hide">
                  <span class="fa-stack">
                      <i class="fa fa-square fa-stack-2x"></i>
                      <i class="fa fa-envelope fa-stack-1x"></i>
                  </span>
                    <a href="mailto:reservations@niraamaya.com?Subject=Enquiry" target="_top">reservations@niraamaya.com</a>
                  </div>
                </li>
                <li>
                <div class="footer-detail">
                  <span class="fa-stack">
                    <i class="fa fa-square fa-stack-2x"></i>
                    <i class="fa fa-phone fa-stack-1x"></i>
                  </span>
                  <span>+91 80 4510 4510</span>
                </div>
              </li>
              </ul>
             </div>
          </div>
        </div>
      <div class="col-sm-12 footer-row">
  <div class="social_block col-sm-12 col-md-5">
      <div class="social_head">
        <p>Get In Touch</p>
        </div><div class="social_cont">
          <div class="socialIcon flex flex-row justify-center flex-wrap gap-4">
          
              <a class="social-fb" href="https://www.facebook.com/NiraamayaRetreats" target="_blank">
              <span class="fa fa-facebook">facebook</span></a>

              <a class="social-tw" href="https://twitter.com/NiraamayaForU" target="_blank">
              <span class="fa fa-twitter">twitter</span></a>
              
              <a class="social-lin" href="https://www.linkedin.com/company/niraamayalife" target="_blank">
              <span class="fa fa-linkedin">Linkedin</span></a>
              
              <a class="social-ig" href="https://www.instagram.com/niraamayawellnessretreats/" target="_blank">
              <span class="fa fa-instagram">instagram</span></a>
            
              <a class="social-yt" href="https://www.youtube.com/c/NiraamayaInGroup" target="_blank"><span class="fa fa-youtube">Youtube</span></a>
              
              <a class="social-wa" href="https://web.whatsapp.com/send?phone=+91 6364123461" target="_blank"><span class="fa fa-whatsapp">WhatsApp</span></a>

              <a class="social-pi" href="https://in.pinterest.com/niraamayaretreats/" target="_blank"><span class="fa fa-pinterest">Pinterest</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-xs-12 footer-row footer_navbar_wrapper">
  <div class="clearfix">
    <nav class="footer_navbar scroll">
      <ul class="nav navbar-nav flex flex-row justify-center flex-wrap gap-4 py-6">
        <li class="second-li"><a class="" href="././">Home</a></li>
        <li class="second-li"><a class="" href="./about-us/about-us.html">About Us</a></li>
        <li class="second-li"><a class="" href="./private-residences.html">Private Residences</a></li>
        <li class="second-li"><a class="" href="./ayurveda-packages.html">Ayurveda Packages</a></li>
        <li class="second-li"><a class="" href="./special-offers.html">Special Offers</a></li>
        <li class="second-li"><a class="" href="./sustainability/sustainability.html">Sustainability</a></li>
        <li class="second-li"><a class="" href="https://newtwb.s3.amazonaws.com/images/niraamayasmart/Niraamaya%20Safety%20Protocols%5E.pdf">COVID-19 Safety Measures</a></li>
        <li class="second-li"><a class="" href="././gallery.html">Gallery</a></li>
        <li class="second-li"><a class="" href="./faqs/covid-19-measures.html">FAQs</a></li>
        <li class="second-li"><a class="" href="./media/media.html">Media</a></li>
        <li class="second-li"><a class="" href="./awards/awards-for-niraamaya-wellness-retreats.html">Awards</a></li><li class="second-li"><a class="" href="./careers/join-us.html">Careers</a></li><li class="second-li"><a class="" href="./privacy-policy/privacy-policy.html">Privacy Policy</a></li>
        <li class="second-li"><a class="active" href="./blog.html">Blog</a></li>
        <li class="second-li"><a class="" href="./contact-us/central-reservations.html">Contact Us</a></li>
      </ul>
    </nav>
  </div>
  </div>
  <div class="comm_cont f_bot">
    <div class="container">
      <div class="col-xs-12 text-center">
        <a href="./sitemap.html" title="click here for sitemap">Sitemap</a><p><a href="//www.simplotel.com" target="_blank">Simplotel - Hotel Website Design &amp; Booking Engine</a></p>
      </div>
    </div>
  </div>
</div>
{/* </div>  */}
</section>
        </footer>
    </footer>
  )
}

Footer.propTypes = {
  footer: PropTypes.shape({
    logo: mediaPropTypes.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(linkPropTypes),
      })
    ),
    smallText: PropTypes.string.isRequired,
  }),
}

export default Footer
