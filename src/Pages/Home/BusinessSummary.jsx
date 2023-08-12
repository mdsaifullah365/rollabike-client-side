import { RiMotorbikeFill } from 'react-icons/ri';
import { BsPeople } from 'react-icons/bs';
import { GiMoneyStack } from 'react-icons/gi';
import { MdOutlineRateReview } from 'react-icons/md';
import BusinessInfoCard from './BusinessInfoCard';

const BusinessSummary = () => {
  const businessInfo = [
    {
      icon: <RiMotorbikeFill />,
      quantity: '50K+',
      title: 'Products',
    },
    {
      icon: <BsPeople />,
      quantity: '100K+',
      title: 'Happy Clients',
    },
    {
      icon: <GiMoneyStack />,
      quantity: '150M+',
      title: 'Yearly Revenue',
    },
    {
      icon: <MdOutlineRateReview />,
      quantity: '5000+',
      title: 'Reviews',
    },
  ];
  return (
    <section className='bg-secondary px-8'>
      <div className='max-w-5xl p-5 mx-auto bg-neutral -translate-y-36 -mb-36 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {businessInfo.map((info, i) => (
          <BusinessInfoCard key={i} info={info} />
        ))}
      </div>
      <div className='text-base-200 text-center py-10'>
        <h2 className='text-4xl uppercase leading-relaxed'>
          With the 45 Years of Experience
        </h2>
        <h2 className='text-2xl text-primary'>
          We Serve Our Customer the Best
        </h2>
        <div className='mt-6 flex gap-5 justify-center'>
          <button className='btn btn-primary'>Take a Tour</button>
          <button className='btn btn-outline text-base-200 hover:bg-primary hover:text-secondary'>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummary;
