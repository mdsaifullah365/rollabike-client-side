import React from 'react';
import { HiLightBulb } from 'react-icons/hi';
import { AiOutlineTeam } from 'react-icons/ai';
import { MdOutlineBiotech, MdOutlineDeliveryDining } from 'react-icons/md';
import AboutInfoCard from './AboutInfoCard';

const img = 'https://i.ibb.co/k0BTQ1b/factory.jpg';

const AboutUs = () => {
  const aboutInfo = [
    {
      icon: <HiLightBulb />,
      title: '45 Years Experience',
      description:
        'Our 45 years of journey made us strongest ever. We are the best.',
    },
    {
      icon: <AiOutlineTeam />,
      title: 'Best Team Member',
      description:
        'We have worlds best team members. They will give you the best',
    },
    {
      icon: <MdOutlineDeliveryDining />,
      title: 'The Best Services',
      description:
        'Our service quality is the worlds best according to customers',
    },
    {
      icon: <MdOutlineBiotech />,
      title: 'Unique Technology',
      description: 'We use the latest technology to give you proper service',
    },
  ];
  return (
    <section
      id='about-us'
      className='relative mb-60'
      style={{
        background: `url('${img}') no-repeat center center/cover`,
      }}>
      <div className='absolute top-0 right-0 bottom-0 left-0 bg-secondary opacity-60'></div>
      {/* Title */}
      <div className='text-white py-20 relative z-10'>
        <div className='text-5xl text-center text-base-100 mb-16 uppercase'>
          About <span className='text-primary'>Us</span>
        </div>
        {/* First Part */}
        <div className='max-w-6xl px-12 mx-auto grid grid-cols-1 md:grid-cols-2 items-end gap-10'>
          <div>
            <h2 className='text-5xl leading-snug'>
              RollaBike Provides The Best Service For Sustainable Progress
            </h2>
          </div>
          <div className='relative p-6'>
            <div className='absolute top-0 right-0 bottom-0 left-0 bg-secondary opacity-60  rounded-md'></div>
            <p className='text-2xl leading-relaxed relative'>
              RollaBike Are A Industry & Manufacturing Services Provider
              Institutions. Suitable For Factory, Manufacturing, Industry,
              Engineering, Construction And Any Related Industry Care Field.
            </p>
          </div>
        </div>

        {/* Second Part */}
        <div className='max-w-6xl px-5 mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 -mb-52'>
          {aboutInfo.map((info, i) => (
            <AboutInfoCard key={i} info={info} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
