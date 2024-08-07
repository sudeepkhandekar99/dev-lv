// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// UI Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import img1 from "../../assets/images/blogs/posts/images_05/post_image_01.png";
import img2 from "../../assets/images/blogs/posts/images_05/post_image_02.png";

// Icons
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// ---------------

function Blog1() {
  return (
    <div
      id="content"
      className="site-content center-relative single single-post"
      style={{ marginBottom: "100px" }}
    >
      <article>
        <div className="single-post-header-content content-1170 center-relative">
          <div className="image-slider-wrapper relative">
            <Swiper
              pagination={{ clickable: true }}
              grabCursor={true}
              loop={true}
              modules={[Pagination]}
              className="portfolio-item-slider"
            >
              <SwiperSlide>
                <img src={img1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="post-wrapper content-1170 center-relative">
          <div className="single-content-wrapper center-relative">
            <h1 className="entry-title">
              Leelavati Automation Pvt. Ltd.: Pioneering the Future of Plastic Machinery
              Manufacturing
            </h1>

            <div className="post-info-wrapper">
              <div className="entry-info">
                <div className="cat-links">
                  <ul>
                    <li>
                      <a href="#">Plastic and rubber</a>
                    </li>
                  </ul>
                </div>
                <div className="entry-date published">June 10, 2024</div>
                <div className="author-nickname">
                  <a href="#" rel="author">
                    John Smith
                  </a>
                </div>
              </div>
            </div>

            <div className="entry-content">
              <h4>Innovative Solutions for the Plastic Industry</h4>
              <p>
                Leelavati Automation Pvt. Ltd. is a leader in advanced plastic machinery
                manufacturing, specializing in plastic extrusion, injection,
                blow molding, and thermoforming machines, along with dryers and
                dosing systems. Our products integrate cutting-edge technologies
                like capacitive and inductive sensors, NRG solid state relays,
                and controllers, enabling smart manufacturing with real-time
                monitoring and control.
              </p>
              <br />
              <h4>Commitment to Sustainability</h4>
              <p>
                At Leelavati Automation Pvt. Ltd., we are committed to sustainability and
                support the reduction of plastic waste by offering solutions for
                sustainable packaging, recycling capabilities, and the use of
                biodegradable materials. Our advanced machinery is designed to
                promote eco-friendly practices within the industry.
              </p>
              <br />
              <h4>Excellence in Technology and Quality</h4>
              <p>
                Our integration of innovative technologies ensures that our
                machinery delivers high performance and reliability. By blending
                innovation, quality, and environmental responsibility, we
                provide machinery that meets the evolving needs of the plastic
                manufacturing industry.
              </p>

              <br />
              <p>
                Join us in revolutionizing the future of plastic manufacturing.
                For more information, visit our website or contact us directly.
                Leelavati Automation Pvt. Ltd. is dedicated to driving the industry
                forward with sustainable, high-performance solutions tailored to
                meet your needs.
              </p>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </article>

      <div className="nav-links">
        <div className="content-740 center-relative post-nav-links">
          <div className="nav-previous post-navigator">
            <a href="/blog-4" className="nav-post-link">
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />
              <p>
                Leelavati Automation Pvt. Ltd.: Revolutionizing Energy Management in
                Corporate Parks
              </p>
            </a>

            <div className="cat-links">
              <ul>
                <li>
                  <a href="#">Buildings and corporate parks</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="nav-next post-navigator">
            <a href="/blog-6" className="nav-post-link">
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
              <p>
                Leelavati Automation Pvt. Ltd.: Comprehensive Solutions for HVAC Systems
              </p>
            </a>
            <div className="cat-links">
              <ul>
                <li>
                  <a href="#">HVAC</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
}

export default Blog1;
