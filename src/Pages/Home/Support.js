import React from 'react';
import { GiHomeGarage } from 'react-icons/gi';
import FAQ from './FAQ';
import { CgPhone } from 'react-icons/cg';
import img from '../../images/industry.jpg';

const Support = () => {
  const faq = [
    {
      question: 'How to purchase products?',
      answer:
        'To purchase a product we recommend you to go to product page and select your desired product and click on the purchase button. You will understand the rest!',
    },
    {
      question: 'How to create account?',
      answer:
        'To create account please click on the sign up button from the navigation menu. Then fill the form up and click sign up. Done!',
    },
    {
      question: 'How to get help when face problems?',
      answer:
        'If you face any problem or difficulties please connect us with the information given below. We are always here for you.',
    },
  ];
  return (
    <section
      className='relative'
      style={{
        background: `url('${img}') no-repeat center center/cover`,
      }}>
      <div className='absolute top-0 right-0 bottom-0 left-0 bg-secondary opacity-60'></div>
      <div className='text-white py-20 relative z-10'>
        {/* First Part */}
        <div className='max-w-6xl px-12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-10'>
          <div>
            <h2 className='text-xl text-primary mb-6'>
              Best Creative Industrial!
            </h2>
            <h2 className='text-4xl leading-snug mb-6'>
              We Help You To Grow Your Business Exponentially
            </h2>
            <div className='flex gap-5 mb-6'>
              <button className='btn btn-primary'>Take a Tour</button>
              <button className='btn btn-outline text-base-200 hover:bg-primary hover:text-secondary'>
                Contact Us
              </button>
            </div>
            <hr />
            <div className='flex items-center gap-5 mt-6'>
              <div className='text-7xl text-primary'>
                <GiHomeGarage />
              </div>
              <h2 className='text-2xl'>
                We Have +45 Years Of Experience For Give You Better Quality
                Results
              </h2>
            </div>
          </div>
          <div className=''>
            {faq.map((f, i) => (
              <FAQ key={i} qna={f} i={i} />
            ))}
          </div>
        </div>

        {/* Second Part */}
        <div className='px-12'>
          <div className='card bg-base-100 text-secondary rounded-md max-w-6xl p-10 mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-3 items-center text-center lg:text-left gap-10'>
              <h2 className='text-4xl leading-relaxed'>
                Get Your <span className='text-primary'>Free</span> Business
                Industrial
              </h2>
              <div className='flex justify-center items-center gap-5'>
                <div className='w-20 h-px bg-secondary'></div>
                <div class='w-16 h-16 rounded-full text-4xl text-base-100 bg-secondary hover:bg-primary cursor-pointer flex justify-center items-center'>
                  <CgPhone />
                </div>
                <div className='w-20 h-px bg-secondary'></div>
              </div>
              <div>
                <p className='text-3xl hover:text-primary leading-relaxed cursor-pointer'>
                  01712-121212
                </p>
                <p className='text-3xl hover:text-primary leading-relaxed cursor-pointer'>
                  support@rollabike.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
