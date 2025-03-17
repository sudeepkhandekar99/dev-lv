import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

interface Client {
  name: string;
  link: string;
  id: number;
}

const Clients = () => {
  const [clientsData, setClientsData] = useState<Client[]>([]);

  useEffect(() => {
    fetch('https://api.leelavatiautomation.com/clients', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data: Client[]) => {
        setClientsData(data);
      })
      .catch((error) => console.error('Error fetching clients:', error));
  }, []);

  const containerStyle: React.CSSProperties = {
    padding: '20px 0',
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    boxSizing: 'border-box' as 'border-box',
    backgroundColor: 'white',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '2rem',
    margin: '0',
    padding: '20px 0',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  };

  const slideStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle: React.CSSProperties = {
    width: '100px',
    height: 'auto',
    maxWidth: '100%',
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
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 4 },
              }}
              modules={[Autoplay]}
              className="logo-slider"
              id="logoSlider"
            >
              {clientsData.map((client) => (
                <SwiperSlide
                  className="logo-slide"
                  key={client.id}
                  style={slideStyle}
                >
                  <img
                    className="logo-img"
                    src={client.link}
                    alt={client.name}
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
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
          .logo-slider-wrapper {
            overflow: hidden !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-sizing: border-box !important;
          }
          .swiper-slide {
            box-sizing: border-box;
            padding: 0 !important;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .logo-img {
            max-width: 100px !important;
            height: auto !important;
          }
          #clients {
            overflow: hidden !important;
            background-color: white !important;
          }
        `}
      </style>
    </div>
  );
};

export default Clients;
