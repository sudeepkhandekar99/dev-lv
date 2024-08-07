// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// UI Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import img1 from "../../assets/images/blogs/posts/images_03/post_image_01.png";

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
            </Swiper>
          </div>
        </div>

        <div className="post-wrapper content-1170 center-relative">
          <div className="single-content-wrapper center-relative">
            <h1 className="entry-title">
              Mobile Equipment Operations with Leelavati Automation Pvt. Ltd.'s Advanced
              Sensor Technology
            </h1>

            <div className="post-info-wrapper">
              <div className="entry-info">
                <div className="cat-links">
                  <ul>
                    <li>
                      <a href="#">Mobile Equipments</a>
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
              <h4>Precision Monitoring in Waste Disposal Trucks</h4>
              <p>
                Leelavati Automation Pvt. Ltd. caters to the mobile equipment industry
                with advanced inductive sensors specifically designed for waste
                disposal trucks. These sensors monitor door movement and locking
                positions, as well as detect the positions of lift arms and
                forks. By providing precise and reliable monitoring, our sensors
                help ensure the efficient and safe operation of waste disposal
                trucks.
              </p>
              <br />
              <h4>Efficiency in Mobile Crane Operations</h4>
              <p>
                In mobile cranes, precision and efficiency are crucial.
                Leelavati Automation Pvt. Ltd.'s sensors play a vital role in detecting
                telescopic arm fork extensions and outrigger positions. This
                accurate detection is essential for maintaining stability and
                operational efficiency, making our sensors indispensable for
                mobile crane operations.
              </p>
              <br />
              <h4>Durability in Heavy-Duty Vehicles</h4>
              <p>
                For heavy-duty vehicles, continuous operation under extreme
                environmental conditions is a necessity. Leelavati Automation Pvt. Ltd.'s
                sensors are designed to withstand the harshest environments,
                ensuring reliable performance and durability. Whether in waste
                disposal trucks, mobile cranes, or other heavy-duty vehicles,
                our sensors provide the robustness needed for uninterrupted and
                efficient operations.
              </p>

              <br />
              <p>
                Leelavati Automation Pvt. Ltd. offers advanced sensor technology tailored
                to meet the rigorous demands of the mobile equipment industry,
                delivering precision, efficiency, and durability across various
                applications.
              </p>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </article>

      <div className="nav-links">
        <div className="content-740 center-relative post-nav-links">
          <div className="nav-previous post-navigator">
            <a href="/blog-2" className="nav-post-link">
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />
              <p>Connection of paper and web makes</p>
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
            <a href="/blog-4" className="nav-post-link">
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
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

          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
}

export default Blog1;
