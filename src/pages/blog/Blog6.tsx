// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// UI Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import img1 from "../../assets/images/blogs/posts/images_06/post_image_01.png";
import img2 from "../../assets/images/blogs/posts/images_06/post_image_02.png";

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
              Leelavati Automation Pvt. Ltd.: Comprehensive Solutions for HVAC Systems
            </h1>

            <div className="post-info-wrapper">
              <div className="entry-info">
                <div className="cat-links">
                  <ul>
                    <li>
                      <a href="#">HVAC</a>
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
              <h4>Addressing Challenges in Heat Pump Manufacturing</h4>
              <p>
                Leelavati Automation Pvt. Ltd. specializes in providing comprehensive
                solutions for HVAC systems, tackling the diverse challenges
                faced by heat pump manufacturers. Our expertise ensures
                compliance with various regulations, enabling a high Seasonal
                Coefficient of Performance (SCOP) and adherence to utility
                limits on starting current. We effectively address issues such
                as the integration of flammable refrigerants and the extension
                of compressor lifespans, both crucial for maintaining efficiency
                and safety.
              </p>
              <br />
              <h4>Reliable Components for Commercial HVAC Applications</h4>
              <p>
                For commercial HVAC applications, our robust components,
                including solid state contactors and soft starters, ensure
                reliable operation of chillers and rooftop units. These
                components provide arc-free compressor switching and efficient
                performance for larger systems, enhancing reliability and
                operational efficiency.
              </p>
              <br />
              <h4>Solutions for Supermarket Refrigeration</h4>
              <p>
                In the supermarket refrigeration sector, the use of low Global
                Warming Potential (GWP) refrigerants necessitates electrical
                panel revisions to accommodate flammability concerns. Leelavati
                Automation offers solutions designed to meet these stringent
                requirements, ensuring safe and efficient refrigeration.
              </p>

              <br />
              <h4>Enhancing Air Handling Units and Duct Heaters</h4>
              <p>
                Our offerings extend to air handling units (AHUs), which are
                essential for ventilation and humidity control, and duct
                heaters, which are crucial for space heating and precise
                temperature modulation. Our components guarantee robust
                performance and safety, even in harsh conditions, ensuring
                efficient and reliable operation.
              </p>
              <br />
              <h4>Commitment to Safety and Efficiency</h4>
              <p>
                Leelavati Automation Pvt. Ltd.'s components ensure robust performance and
                safety, such as detecting the presence of wood in pellet
                burners, thereby ensuring efficient and safe operation. We are
                committed to delivering tailored solutions that enhance the
                reliability, safety, and efficiency of HVAC systems across
                various industries.
              </p>
              <p>
                Leelavati Automation Pvt. Ltd. stands at the forefront of HVAC technology,
                providing advanced solutions to meet the industry's evolving
                needs. Our commitment to innovation and quality ensures that our
                products deliver superior performance and reliability, making us
                the trusted partner for all your HVAC requirements.
              </p>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </article>

      <div className="nav-links">
        <div className="content-740 center-relative post-nav-links">
          <div className="nav-previous post-navigator">
            <a href="/blog-5" className="nav-post-link">
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />
              <p>
                Leelavati Automation Pvt. Ltd.: Pioneering the Future of Plastic Machinery
                Manufacturing
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

          <div className="nav-next post-navigator">
            <a href="/blog-1" className="nav-post-link">
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
              <p>
                Optimizing Agricultural Operations with Leelavati Automation Pvt. Ltd.'s
                Advanced Sensor Technology
              </p>
            </a>
            <div className="cat-links">
              <ul>
                <li>
                  <a href="#">Agriculture</a>
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
