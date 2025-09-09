'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { pricedeta, CardItem } from '@/app/api/data';

const CardSlider = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
    responsive: [
      { breakpoint: 479, settings: { slidesToShow: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
    ],
  };

  const iconColors = [
    'text-[#99e39e]',
    'text-[#1dc8cd]',
    'text-[#3cd278]',
    'text-[#f7931a]',
    'text-[#99e39e]',
    'text-[#1dc8cd]',
  ];

  return (
    <div className='pt-14 flex flex-col gap-10'>
      <div className='flex flex-col gap-3 items-center justify-center text-center'>
        <p className='text-white font-medium'>
          Featured <span className='text-[#99e39e]'>services & tools</span>
        </p>
        <h2 className='sm:text-40 text-30 text-white font-semibold'>
          Our top design & development solutions
        </h2>
      </div>

      <Slider {...settings}>
        {pricedeta.map((item: CardItem, index: number) => {
          const Icon = item.icon;
          return (
            <div key={index} className='pr-6'>
              <div className='px-6 py-6 bg-[#1e2229]/90 rounded-2xl shadow-lg flex flex-col items-center justify-between min-h-[260px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl'>
                <div className='flex flex-col items-center gap-4'>
                  <div
                    className={`rounded-full p-5 bg-[#263238]/70 flex items-center justify-center transition-transform duration-300 hover:scale-110`}
                  >
                    <Icon size={48} className={`${iconColors[index % iconColors.length]} drop-shadow-md`} />
                  </div>
                  <h3 className='text-white font-bold text-lg text-center line-clamp-2'>
                    {item.title}
                  </h3>
                </div>
                <p className='text-[#d8dbdb] text-sm text-center mt-3'>{item.short}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CardSlider;
