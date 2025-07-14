import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

const API_URL = "https://api.leelavatiautomation.com/projects";

interface Article {
  id: number;
  main_title: string;
  summary: string;
  location: string;
  subheading: string;
  image_link: string;
}

const Blog: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <div
      id="content"
      className="site-content center-relative single single-post"
      style={{ marginTop: "100px", marginBottom: "120px" }}
    >
      <div className="blog-holder block center-relative">
        {isLoading ? (
          <p>Loading...</p>
        ) : articles.length === 0 ? (
          <p>No articles found.</p>
        ) : (
          articles.map((article) => (
            <article
              key={article.id}
              className="relative blog-item-holder center-relative has-post-thumbnail"
            >
              <div className="blog-item-wrapper">
                <div className="post-thumbnail">
                  <RouterLink to={``} onClick={handleClick}>
                    <div className="post-thumbnail-image">
                      <img
                        src={article.image_link}
                        width="545px"
                        height="700px"
                        alt={article.main_title}
                      />
                    </div>
                  </RouterLink>
                </div>
                <div className="entry-holder">
                  <h2 className="entry-title">
                    <RouterLink to={``} onClick={handleClick}>
                      {article.main_title}
                    </RouterLink>
                  </h2>
                  <div className="entry-info">
                    <div className="entry-info-left">
                      <div className="entry-date published">
                        <i className="fas fa-map-marker-alt" style={{ marginRight: '8px' }}></i>
                        {article.location}
                      </div>
                      <br></br>
                      <div className="entry-date published" style={{ fontFamily: 'Lustria, serif', fontSize: '16px', color: 'grey' }}>
                        {article.subheading}
                      </div>
                    </div>
                    <div className="excerpt">
                      <p>{article.summary}</p>
                    </div>
                  </div>
                </div>
                <div className="clear"></div>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
