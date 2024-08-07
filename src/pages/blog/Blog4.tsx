// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// UI Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import img1 from "../../assets/images/blogs/posts/images_04/post_image_01.png";
import img2 from "../../assets/images/blogs/posts/images_04/post_image_02.png";

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
              Leelavati Automation Pvt. Ltd.: Revolutionizing Energy Management in
              Corporate Parks
            </h1>

            <div className="post-info-wrapper">
              <div className="entry-info">
                <div className="cat-links">
                  <ul>
                    <li>
                      <a href="#">Buildings and corporate parks</a>
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
              <h4>Comprehensive Energy Metering Solutions</h4>
              <p>
                Leelavati Automation Pvt. Ltd. offers comprehensive solutions for energy
                metering in large corporate parks. Our advanced monitoring
                systems and energy analyzers provide precise and reliable data
                to help manage and reduce energy consumption effectively. Our
                extensive range of products includes:
              </p>
              <br />
              <ul>
                <li>
                  <b>Energy Analyzers: </b>These tools provide detailed insights
                  into energy usage, helping identify inefficiencies and areas
                  for improvement.
                </li>
                <li>
                  <b>Web Platforms: </b>Our intuitive web-based platforms allow
                  for real-time monitoring and control of energy systems,
                  enabling proactive energy management.
                </li>
                <li>
                  <b>Bus Adapters: </b>These devices facilitate seamless
                  integration with existing infrastructure, ensuring
                  compatibility and ease of use.{" "}
                </li>
                <li>
                  <b>Lighting Controls: </b>Our advanced lighting control
                  systems, including movement detectors, optimize lighting
                  usage, reducing unnecessary energy expenditure.
                </li>
              </ul>
              <br />
              <p>
                By implementing our solutions, corporate parks can maintain
                energy costs under control and develop effective energy plans to
                achieve significant energy savings. Our technology ensures
                accurate measurement, monitoring, and management of energy
                resources, making Leelavati Automation Pvt. Ltd. the ideal partner for
                sustainable energy solutions in corporate environments.
              </p>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </article>

      <div className="nav-links">
        <div className="content-740 center-relative post-nav-links">
          <div className="nav-previous post-navigator">
            <a href="/blog-3" className="nav-post-link">
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />
              <p>
                CMobile Equipment Operations with Leelavati Automation Pvt. Ltd.'s
                Advanced Sensor Technology
              </p>
            </a>

            <div className="cat-links">
              <ul>
                <li>
                  <a href="#">Mobile Equipments</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="nav-next post-navigator">
            <a href="/blog-5" className="nav-post-link">
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
              <p>
                Leelavati Automation Pvt. Ltd.: Pioneering the Future of Plastic Machinery
                Manufacturing
              </p>
            </a>
            <div className="cat-links">
              <ul>
                <li>
                  <a href="#">Plastic and rubber</a>
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
