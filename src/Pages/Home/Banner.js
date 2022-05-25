import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  EffectFade,
  Keyboard,
  Navigation,
  Pagination,
  Zoom,
} from 'swiper';
import slide1 from '../../images/banner/bike.svg';
import slide2 from '../../images/banner/customerSupport.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/zoom';

const Banner = () => {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#ffffff',
          '--swiper-pagination-color': '#ffffff',
        }}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        effect={'fade'}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        zoom={true}
        modules={[Navigation, Pagination, EffectFade, Keyboard, Autoplay, Zoom]}
        className='mySwiper bg-accent mb-8'>
        <SwiperSlide>
          <div className='container grid md:grid-cols-2 items-center gap-10 bg-accent text-base-200 py-24 md:py-40'>
            <div className='px-5'>
              <h1 className='text-5xl mb-5 leading-snug'>
                Essential Motorcycle{' '}
                <span className='text-primary'>Parts At Best Price Ever</span>
              </h1>
              <p className='text-xl'>
                We ensure you to give you best motorcycle parts at best prices.
                You can purchase unlimited products with great price ever. Get
                access our huge stock. Grow your business with us.
              </p>
            </div>
            <div>
              <img className='block w-3/4 mx-auto' src={slide1} alt='' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='container grid md:grid-cols-2 items-center gap-10 bg-accent text-base-200 py-24 md:py-40'>
            <div className='px-5'>
              <h1 className='text-5xl mb-5 leading-snug'>
                Connect Our Customer{' '}
                <span className='text-primary'>Support Representative</span>
              </h1>
              <p className='text-xl'>
                Are you facing any difficulties purchasing our products? Here
                our best customer support representative is waiting for you. Get
                any help or queries any time!
              </p>
            </div>
            <div>
              <img className='block w-3/4 mx-auto' src={slide2} alt='' />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
