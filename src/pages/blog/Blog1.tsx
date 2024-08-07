// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// UI Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import img1 from "../../assets/images/blogs/posts/images_01/post_image_01.jpg";
import img2 from "../../assets/images/blogs/posts/images_01/post_image_02.png";

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
              Optimizing Agricultural Operations with Leelavati Automation Pvt. Ltd.'s
              Advanced Sensor Technology
            </h1>

            <div className="post-info-wrapper">
              <div className="entry-info">
                <div className="cat-links">
                  <ul>
                    <li>
                      <a href="#">Agriculture</a>
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
              <h4>
                Enhancing Efficiency and Reliability in the Agriculture Sector
              </h4>
              <p>
                In the ever-evolving agriculture sector, efficiency and
                reliability are key to maximizing productivity and ensuring
                sustainable practices. Leelavati Automation Pvt. Ltd. is at the forefront
                of this transformation, offering advanced sensor technology that
                enhances the performance of harvesting machinery, seed silos,
                and irrigation systems.
              </p>
              <br />
              <h4>Precision in Level Measurement</h4>
              <p>
                Our state-of-the-art sensors are engineered to provide precise
                level measurements for both liquid and solid silos. Whether you
                are dealing with small containers or large storage units, our
                sensors deliver accurate data, ensuring optimal storage
                conditions and efficient resource management.
              </p>
              <br />
              <h4>Durability in Harsh Conditions</h4>
              <p>
                Agricultural environments can be demanding, with machinery and
                components often exposed to harsh conditions. Leelavati
                Automation’s sensors are designed to withstand these challenges,
                delivering reliable performance in agricultural and earth-moving
                vehicles. Their robust construction ensures longevity and
                consistent operation, even in the toughest environments.
              </p>

              <br />
              <h4>Comprehensive Solutions for Agriculture</h4>
              <p>
                Leelavati Automation Pvt. Ltd.'s sensor technology is not limited to a
                single application. Our sensors are integral to a wide range of
                agricultural operations:
              </p>
              <ul>
                <li>
                  <b>Harvesting Machinery: </b>Enhance the efficiency and
                  precision of harvesting equipment with sensors that monitor
                  and optimize performance.
                </li>
                <li>
                  <b>Seed Silos: </b>Maintain ideal storage conditions with
                  accurate level measurements, ensuring seed quality and
                  reducing waste.{" "}
                </li>
                <li>
                  <b>Irrigation Systems: </b>Improve water management with
                  sensors that provide real-time data, promoting efficient and
                  sustainable irrigation practices.{" "}
                </li>
              </ul>
              <br />
              <h4>Choose Leelavati Automation Pvt. Ltd. for Agricultural Excellence</h4>
              <p>
                When it comes to optimizing agricultural operations, Leelavati
                Automation offers robust and reliable sensor solutions. Our
                advanced technology helps you achieve greater efficiency, reduce
                waste, and ensure the longevity of your equipment. Trust
                Leelavati Automation Pvt. Ltd. to deliver the precision and durability
                your agricultural operations demand.
              </p>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </article>

      <div className="nav-links">
        <div className="content-740 center-relative post-nav-links">
          <div className="nav-previous post-navigator">
            <a href="/blog-6" className="nav-post-link">
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />
              <p>
                Enhancing Efficiency Across Industries with Leelavati
                Automation's Advanced Sensor Technology
              </p>
            </a>

            <div className="cat-links">
              <ul>
                <li>
                  <a href="#">Conveyors</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="nav-next post-navigator">
            <a href="/blog-2" className="nav-post-link">
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
