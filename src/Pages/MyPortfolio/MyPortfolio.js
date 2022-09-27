import React from 'react';
import me from '../../images/me.jpg';
import project1 from '../../images/projects/project1.JPG';
import project2 from '../../images/projects/project2.JPG';
import project3 from '../../images/projects/project3.JPG';

const MyPortfolio = () => {
  return (
    <section className='container py-12 text-base-100'>
      {/* Title */}
      <div className='text-5xl text-center text-base-100 mb-16 uppercase'>
        My <span className='text-primary'>Portfolio</span>
      </div>
      {/* First Part */}
      <div className='grid grid-cols-1 md:grid-cols-5 gap-10 items-center'>
        <div className='col-span-1 md:col-span-3'>
          <h2 className='text-4xl mb-2 uppercase'>Md Saif Ullah</h2>
          <p className='text-lg text-base-300'>Junior Web Developer</p>
          <p className='text-md text-base-300'>mdsaifullah.wd@gmail.com</p>
          <p className='text-xl mt-5'>
            Hello everybody! My name is Saif Elham. I have been learning Web
            Developing for six months, and I'm very passionate and dedicated to
            my work. My immediate goal is to get a job as a front end developer.
            To achieve this, I am currently focusing on front end technologies.
            And I will learn some basic backend technologies too. After getting
            a job I will focus on learning backend technologies properly so that
            I can be a full stack web developer. I want to acquired the skills
            and knowledge necessary to make myself as a full stack web developer
            in the next two years.
          </p>
        </div>
        <div className='col-span-1 md:col-span-2'>
          <img src={me} alt='Md Saif Ullah' className='w-full' />
        </div>
      </div>

      {/* Second Part */}
      <div className='card bg-base-100 text-secondary rounded-md max-w-6xl p-10 mx-auto mt-10'>
        <div className='grid grid-cols-1 lg:grid-cols-3 items-center text-center lg:text-left gap-10'>
          <h2 className='text-4xl leading-relaxed'>
            BSc in<span className='text-primary'> Zoology</span>
            <br />
            National University
          </h2>
          <div>
            <h2 className='text-center text-2xl mb-3'>
              Educational Qualifications
            </h2>
            <div className='flex justify-center items-center gap-5'>
              <div className='w-20 h-px bg-secondary'></div>
              <div className='w-2 h-2 rounded-full text-4xl text-base-100 bg-secondary hover:bg-primary cursor-pointer flex justify-center items-center'></div>
              <div className='w-20 h-px bg-secondary'></div>
            </div>
          </div>
          <div>
            <h2 className='text-4xl leading-relaxed'>
              MSc in<span className='text-primary'> Fisheries</span>
              <br />
              National University
            </h2>
          </div>
        </div>
      </div>
      {/* Third Part */}
      <div className='text-4xl text-center text-base-100 my-16 uppercase'>
        <span className='text-primary'>Technologies</span> I Know
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-2xl leading-relaxed text-primary'>
        <div>
          <p>HTML</p>
          <p>CSS</p>
        </div>
        <div>
          <p>Bootstrap</p>
          <p>Tailwind</p>
        </div>
        <div>
          <p>Javascript</p>
          <p>React</p>
        </div>

        <div>
          <p>Node.js</p>
          <p>MongoDB</p>
          <p>Express</p>
        </div>
      </div>

      {/* Fourth Part */}
      <div className='text-4xl text-center text-base-100 my-16 uppercase'>
        My <span className='text-primary'>Projects</span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        <div className='relative'>
          <div className='absolute right-0 left-0 bottom-0 top-0 bg-secondary opacity-50 z-10'></div>
          <div className='flex absolute right-0 left-0 bottom-0 top-0  z-10 justify-center items-center'>
            <a
              href='https://independent-service-prov-cc41b.web.app/'
              target='_blank'
              rel='noreferrer'
              className='btn btn-primary'>
              Live Link
            </a>
          </div>
          <img src={project1} alt='' className='w-full' />
        </div>
        <div className='relative'>
          <div className='absolute right-0 left-0 bottom-0 top-0 bg-secondary opacity-50 z-10'></div>
          <div className='flex absolute right-0 left-0 bottom-0 top-0  z-10 justify-center items-center'>
            <a
              href='https://gymowarehouse.web.app/'
              target='_blank'
              rel='noreferrer'
              className='btn btn-primary'>
              Live Link
            </a>
          </div>
          <img src={project2} alt='' className='w-full' />
        </div>
        <div className='relative'>
          <div className='absolute right-0 left-0 bottom-0 top-0 bg-secondary opacity-50 z-10'></div>
          <div className='flex absolute right-0 left-0 bottom-0 top-0  z-10 justify-center items-center'>
            <a
              href='https://my-watch24.netlify.app/dashboard'
              target='_blank'
              rel='noreferrer'
              className='btn btn-primary'>
              Live Link
            </a>
          </div>
          <img src={project3} alt='' className='w-full' />
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
