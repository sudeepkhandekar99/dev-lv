// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// UI Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import img1 from "../../assets/images/blogs/posts/images_02/post_image_01.png";
import img2 from "../../assets/images/blogs/posts/images_02/post_image_02.png";

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
              Enhancing Efficiency Across Industries with Leelavati Automation Pvt. Ltd.'s
              Advanced Sensor Technology
            </h1>

            <div className="post-info-wrapper">
              <div className="entry-info">
                <div className="cat-links">
                  <ul>
                    <li>
                      <a href="#">Conveyors</a>
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
              <h4>Optimizing Food and Beverage Conveyor Systems</h4>
              <p>
                Leelavati Automation Pvt. Ltd. provides advanced sensors tailored for
                conveyor systems in the food and beverage sector. Our sensors
                are capable of detecting objects, moving parts, speed,
                positions, dimensions, and filling levels. This comprehensive
                monitoring helps reduce downtime and enables predictive
                maintenance, ensuring smooth and efficient operations throughout
                the production process.
              </p>
              <br />
              <h4>Precision in Digital Printing</h4>
              <p>
                In the digital printing industry, precision is crucial.
                Leelavati Automation Pvt. Ltd.'s sensors ensure the precise monitoring of
                product position, timing, and ink levels. This level of accuracy
                is essential for maintaining perfect alignment and timing, which
                in turn results in high-quality printing outcomes. By
                continuously monitoring these critical factors, our sensors help
                prevent interruptions and enhance the overall productivity of
                digital printing operations.
              </p>
              <br />
              <h4>Advanced Solutions for Electronics Manufacturing</h4>
              <p>
                For the electronics manufacturing sector, Leelavati Automation Pvt. Ltd.
                offers smart sensors and solid-state actuators that provide
                accurate position monitoring, speed control, and product
                counting. These advanced solutions ensure collision-free
                transportation and significantly enhance productivity. Our
                embedded control, diagnostics, and interconnectivity features
                further streamline operations, making our sensors indispensable
                for modern electronics manufacturing environments.
              </p>

              <br />
              <p>
                Choose Leelavati Automation Pvt. Ltd. for cutting-edge sensor technology
                that boosts efficiency, reduces downtime, and drives
                productivity across various industries.
              </p>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </article>

      <div className="nav-links">
        <div className="content-740 center-relative post-nav-links">
          <div className="nav-previous post-navigator">
            <a href="/blog-1" className="nav-post-link">
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />
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

          <div className="nav-next post-navigator">
            <a href="/blog-3" className="nav-post-link">
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
              <p>
                Mobile Equipment Operations with Leelavati Automation Pvt. Ltd.'s Advanced
                Sensor Technology
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

          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
}

export default Blog1;
