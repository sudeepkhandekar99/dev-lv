import videoSource from '../../assets/AI Video.mp4';

function Video() {
  return (
    <section id="video" className="section">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="page-title-holder">
          <h2 className="entry-title">Introduction</h2>
        </div>

        <div className="content-wrapper">
          <video width="100%" style={{ borderRadius: '10px' }} controls controlsList="nodownload">
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default Video;
