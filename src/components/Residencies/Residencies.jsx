import React, { useRef } from 'react';
import './Residencies.css';
import { sliderSettings } from '../../Utils/common';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import data from '../../Utils/slider.json';

const Residencies = () => {
  const swiperRef = useRef(null); // Create a ref for Swiper

  return (
    <div>
      <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="r-head flexColStart">
            <span className="orangeText">Best Choices</span>
            <span className="primaryText">Popular Residencies</span>
          </div>
          <div className="r-buttons">
            <SliderButtons swiperRef={swiperRef} />
          </div>
          <Swiper
            {...sliderSettings}
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Assign swiper instance to ref
          >
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img
                    src={card.image}
                    className="img-fluid rounded-top"
                    alt="home"
                  />
                  <span className="secondaryText r-price">
                    <span style={{ color: 'orange' }}>&</span>
                    <span>{card.price}</span>
                  </span>
                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Residencies;

const SliderButtons = ({ swiperRef }) => {
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiperRef.current?.slidePrev()}>&lt;</button>
      <button onClick={() => swiperRef.current?.slideNext()}>&gt;</button>
    </div>
  );
};
