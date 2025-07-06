import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// Define the article type
interface Article {
  heading: string;
  sub_heading: string;
  paragraph_1: string;
  paragraph_2: string;
  paragraph_3: string;
  image_1: string;
  image_2: string;
  image_3: string;
  id: number;
}

function Third() {
  const location = useLocation();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      let id = 1;
      if (location.pathname.includes("second")) id = 2;
      else if (location.pathname.includes("third")) id = 3;

      try {
        const response = await fetch(
          `https://api.leelavatiautomation.com/articles/${id}`,
          { headers: { accept: "application/json" } }
        );
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [location.pathname]);

  if (!article) return <p>Loading...</p>;

  return (
    <div
      id="content"
      className="site-content center-relative single single-post"
      style={{ marginBottom: "100px" }}
    >
      <article>
        <div className="post-wrapper content-1170 center-relative">
          <div className="single-content-wrapper center-relative">
            <h1 className="entry-title">{article.heading}</h1>

            <div className="post-info-wrapper">
              <div className="entry-info">
                <div className="author-nickname">
                  <a href="#" rel="author">
                    {article.sub_heading}
                  </a>
                </div>
              </div>
            </div>

            <div className="entry-content">
              <p>{article.paragraph_1}</p>
              <p>{article.paragraph_2}</p>
              <p>{article.paragraph_3}</p>
            </div>
          </div>
          <div className="clear"></div>
        </div>

        <div className="single-post-header-content content-1170 center-relative">
          <div className="image-slider-wrapper relative">
            <Swiper
              pagination={{ clickable: true }}
              grabCursor={true}
              loop={true}
              modules={[Pagination]}
              className="portfolio-item-slider"
            >
              {[article.image_1, article.image_2, article.image_3].map(
                (img, i) =>
                  img && (
                    <SwiperSlide key={i}>
                      <img src={img} alt={`slide-${i}`} />
                    </SwiperSlide>
                  )
              )}
            </Swiper>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Third;