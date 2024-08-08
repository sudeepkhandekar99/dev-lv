import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

// Sample Logo Images
import reviewerImg1 from '../../assets/images/clients/PepsiCo_logo.svg';
import reviewerImg2 from '../../assets/images/clients/Raymond_logo.svg';
import reviewerImg3 from '../../assets/images/clients/Suzlon_Energy_logo.svg';

// Data for clients' logos
const clientsData = [
  { logo: reviewerImg1 },
  { logo: reviewerImg2 },
  { logo: reviewerImg3 },
  { logo: reviewerImg1 },
  { logo: reviewerImg2 },
  { logo: reviewerImg3 },
  { logo: reviewerImg1 },
  { logo: reviewerImg2 },
  { logo: reviewerImg3 },
  { logo: reviewerImg1 },
  { logo: reviewerImg2 },
  { logo: reviewerImg3 },
  { logo: reviewerImg1 },
  { logo: reviewerImg2 },
  { logo: reviewerImg3 },
  { logo: reviewerImg1 },
  { logo: reviewerImg2 },
  { logo: reviewerImg3 },
  { logo: reviewerImg1 },
  { logo: reviewerImg2 },
  { logo: reviewerImg3 },
  // Add more logos as needed
];

const Clients: React.FC = () => {
  // Inline styles for the component
  const containerStyle: React.CSSProperties = {
    padding: '20px 0',
    position: 'relative',
    overflow: 'hidden', // Prevent overflow
    width: '100%', // Ensure full width
    boxSizing: 'border-box', // Include padding and borders in the width and height
    backgroundColor: '#1f1f1f', // Set background color
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '2rem',
    margin: '0',
    padding: '20px 0', // Add padding for spacing above and below
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  };

  const slideStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle: React.CSSProperties = {
    width: '100px', // Fixed width for consistency
    height: 'auto', // Maintain aspect ratio
    maxWidth: '100%', // Responsive behavior
  };

  return (
    <div id="clients" className="section no-page-title">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="content-wrapper">
          <div className="logo-slider-wrapper" style={containerStyle}>
            <h2 style={headingStyle}>Our Clients</h2>
            <br />
            <Swiper
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-scroll every 2 seconds and always on
              slidesPerView={1} // Show one logo at a time
              spaceBetween={20} // Space between slides
              breakpoints={{
                320: { slidesPerView: 1 }, // 2 logos on small screens
                768: { slidesPerView: 1 }, // 3 logos on medium screens
                1024: { slidesPerView: 3 }, // 4 logos on large screens
              }}
              modules={[Autoplay]}
              className="logo-slider"
              id="logoSlider"
            >
              {clientsData.map((client, i) => (
                <SwiperSlide
                  className="logo-slide"
                  key={'clients-slide-' + i}
                  style={slideStyle}
                >
                  <img
                    className="logo-img"
                    src={client.logo}
                    alt={`Client ${i + 1}`}
                    style={imageStyle}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <br />
          </div>
        </div>
      </div>
      <style>
        {`
          /* Hide default Swiper navigation arrows */
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
          /* Ensure the logo slider does not overflow and occupies full width */
          .logo-slider-wrapper {
            overflow: hidden !important;
            width: 100% !important;
            margin: 0 !important;  /* Remove any margin */
            padding: 0 !important; /* Remove any padding */
            box-sizing: border-box !important; /* Include padding and borders in width and height */
          }
          .swiper-slide {
            box-sizing: border-box;
            padding: 0 !important; /* Remove padding if any */
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .logo-img {
            max-width: 100px !important; /* Fixed size for logos */
            height: auto !important; /* Maintain aspect ratio */
          }
          /* Ensure container does not cause overflow */
          #clients {
            overflow: hidden !important;
            background-color: #1f1f1f !important; /* Background color for the section */
          }
        `}
      </style>
    </div>
  );
}

export default Clients;
