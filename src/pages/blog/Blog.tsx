// UI Components
import { Link as RouterLink } from "react-router-dom";

import articles from "../../data/articles";

import '@fortawesome/fontawesome-free/css/all.min.css';


// ---------------

function Blog() {
  /**
   * Returning window to (0 position) when going to single blog page
   */
  const handleClick = () => {
    window.scroll(0, 0);
  };

  const styles = {
    entryDate: {
      fontFamily: 'Lustria, serif',
      fontSize: '16px',
      color: 'grey',
    },
  };

  return (
    <div
      id="content"
      className="site-content center-relative single single-post"
      style={{ marginTop: "100px", marginBottom: "120px" }}
    >
      <div className="blog-holder block center-relative">
        {articles.map((article) => (
          <article
            key={article.id}
            className="relative blog-item-holder center-relative has-post-thumbnail"
          >
            <div className="blog-item-wrapper">
              <div className="post-thumbnail">
                <RouterLink to={`/blog-${article.id}`} onClick={handleClick}>
                  <div className="post-thumbnail-image">
                    <img
                      src={article.image}
                      width="545px"
                      height="700px"
                      alt=""
                    />
                  </div>
                </RouterLink>
              </div>
              <div className="entry-holder">
                <h2 className="entry-title">
                  <RouterLink to={``} onClick={handleClick}>
                    {article.title}
                  </RouterLink>
                </h2>
                <div className="entry-info">
                  <div className="entry-info-left">
                    <div className="entry-date published">
                      <i className="fas fa-map-marker-alt" style={{ marginRight: '8px' }}></i>
                      {article.date}
                    </div>
                    <div className="entry-date published" style={styles.entryDate}>{article.category}</div>
                    {/* <div className="cat-links">
                      <ul>
                        <li>
                          <a href="#">{article.category}</a>
                        </li>
                      </ul>
                    </div> */}
                    {/* <div className="entry-date published">{article.date}</div> */}
                  </div>
                  <div className="excerpt">
                    <p>{article.description}</p>
                  </div>
                </div>
                {/* <RouterLink className="button" to={`/blog-${article.id}`} onClick={handleClick}>
                  READ MORE
                </RouterLink> */}
              </div>
              <div className="clear"></div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;
