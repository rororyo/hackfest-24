import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mobile, Desktop } from '../../utils/MediaQuery';
import { auth } from '../../../firebase';

function Tech() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  return (
    <>
      <Desktop>
        <motion.div
          className='relative h-[60vh] overflow-hidden'
          initial='hidden'
          animate='visible'
          variants={fadeInUp}
        >
          <div className='w-full h-full bg-gradient-to-b from-[#0C132F] via-0B0C10 to-transparent rounded-b-full absolute'>
            <div className='flex text-7xl font-bold justify-center text-center px-64 py-10'>Build and Improve Your Business Through Z-Sharp Technologies</div>
          </div>
        </motion.div>
        <div className='flex text-2xl font-normal justify-center text-center my-10 px-64 py-10'>Z-Sharp is supported using Power BI to utilize Business Intelligence Analysis and integrate with market research to improve your business </div>
        <div className="tech flex flex-row w-auto mx-40 gap-4">
          <div className='w-1/2 border-2 rounded-3xl px-8 py-10 bg-gradient-to-tr from-[#d8d8d83a]'>
            <div className="content flex flex-col">
              <div className="text-2xl font-bold">Power BI</div>
              <div className="text-justify font-normal my-5">Every report is supported by Power BI to utilize your Business through Business Intelligence Analysis</div>
              <img src='/images/technologies/powerbi-icon.svg' className='h-28 my-4' />
              <div className="text-justify font-normal my-5">✓ Upload your data<br></br>
                ✓ Wait our Admin Analyze your Data<br></br>
                ✓ Easy to Understand in Your Dashboard<br></br>
                ✓ Complete with our recommendation</div>
            </div>
          </div>
          <div className='flex flex-col w-1/2 rounded-3xl gap-4'>
            <div className='h-1/2 flex flex-row border-2 rounded-3xl px-5 py-6 bg-gradient-to-tr from-[#d8d8d83a]'>
              <div className="content flex flex-col">
                <div className="text-xl font-bold">Market Research</div>
                <div className="font-normal my-5 text-justify">Worry about your customer segmentation? Just Contact Us and send your request and we will analyze your potential market segmentation</div>
              </div>
              <img src='/images/technologies/market-research-icon.svg' className='h-28 w-28 mx-5' />
            </div>
            <div className='h-1/2 flex flex-row border-2 rounded-3xl px-5 py-5 bg-gradient-to-tr from-[#d8d8d83a]'>
              <div className="content flex flex-col">
                <div className="text-xl font-bold">Business Consultant</div>
                <div className="font-normal my-5 text-justify">had a problem in your business? don’t worry, just call us and we will provide our recommendation for your business</div>
              </div>
              <img src='/images/technologies/consultant-icon.svg' className='h-28 w-28 mx-5' />
            </div>
          </div>
        </div>
        <div className='flex text-2xl font-normal justify-center text-center my-10 px-64 py-10'>You are potential generation to improve our GDP through kickstart your business, so what are you waiting for? just purchase it and you will get a lot of privilege, like them.</div>
        <div className='flex flex-row w-auto mx-60 my-10'>
          <div className='flex bg-[#1C1C1C] flex-col w-64 mx-auto justify-between rounded-xl drop-shadow-xl px-7' >
            <div className="flex flex-row py-5">
              <div className="rounded-full w-12 h-12">
                <img src='/images/technologies/john.png' className='' />
              </div>
              <div className='text-[14px] font-bold mx-4 my-4 text-center'>@john.z</div>
            </div>
            <div className=' text-[12px] mx-auto mb-7 text-justify'>"Z-Sharp has been a game-changer for me! The revolutionary guidance provided by their team has propelled my business to heights I never thought possible. Their insights and strategies are unparalleled, offering a unique approach that perfectly aligns with the mindset of our generation. Thanks to Z-Sharp, success is not just a goal; it's a reality I'm living every day!"</div>
          </div>
          <div className='flex bg-[#1C1C1C] flex-col w-64 mx-auto justify-between rounded-xl drop-shadow-xl px-7' >
            <div className="flex flex-row py-5">
              <div className="rounded-full w-12 h-12">
                <img src='/images/technologies/morin.png' className='' />
              </div>
              <div className='text-[14px] font-bold mx-4 my-4 text-center'>@rey.morin</div>
            </div>
            <div className=' text-[12px] mx-auto mb-7 text-justify'>"My business journey took a remarkable turn when I discovered Z-Sharp. The transformative impact of their services is simply outstanding. They don't just analyze data; they decode the path to success. Z-Sharp has become my trusted partner, guiding me through challenges, refining my ideas, and ultimately reshaping my entrepreneurial adventure."</div>
          </div>
          <div className='flex bg-[#1C1C1C] flex-col w-64 mx-auto justify-between rounded-xl drop-shadow-xl px-7' >
            <div className="flex flex-row py-5">
              <div className="rounded-full w-12 h-12">
                <img src='/images/technologies/matchaiai.png' className='' />
              </div>
              <div className='text-[14px] font-bold mx-4 my-4 text-center'>@matchaiai</div>
            </div>
            <div className=' text-[12px] mx-auto mb-7 text-justify'>"Elevating dreams is not just a tagline; it's the essence of what Z-Sharp does. Their commitment to delivering results goes beyond expectations. Z-Sharp doesn't just offer consultation; they provide a roadmap to success. As a Gen Z entrepreneur, I've found my trusted ally in Z-Sharp, turning obstacles into stepping stones toward my goals."</div>
          </div>
        </div>
        <div className='flex text-2xl font-normal justify-center text-center my-2 px-64 py-10'>So, what are you waiting for? Let’s make a change together</div>
        <Link to="/purchase">
          <button className='flex bg-[#1C1C1C] border flex-col h-16 w-64 mx-auto rounded-xl drop-shadow-xl px-7 my-5'>
            <div className="mx-auto my-auto font-semibold">Purchase Now</div>
          </button>
        </Link>
      </Desktop>
      <Mobile>
        <motion.div
          className='relative h-[50vh] overflow-hidden'
          initial='hidden'
          animate='visible'
          variants={fadeInUp}
        >
          <div className='w-full h-full px-4 bg-gradient-to-b from-[#0C132F] via-0B0C10 to-transparent rounded-b-full absolute'>
            <div className='flex text-5xl font-bold justify-center text-center py-10'>Build and Improve Your Business Through Z-Sharp Technologies</div>
          </div>
        </motion.div>
        <div className='flex text-2xl font-normal justify-center text-center my-10 px-4 py-10'>Z-Sharp is supported using Power BI to utilize Business Intelligence Analysis and integrate with market research to improve your business </div>
        <div className="tech flex flex-col w-auto mx-4">
          <div className="flex flex-col border-2 rounded-3xl mb-4 px-5 py-6 bg-gradient-to-tr from-[#d8d8d83a]">
            <div className="text-2xl font-bold">Power BI</div>
            <div className="text-justify font-normal my-5">Every report is supported by Power BI to utilize your Business through Business Intelligence Analysis</div>
            <img src='/images/technologies/powerbi-icon.svg' className='h-28' />
            <div className="font-normal my-5">✓ Upload your data<br></br>
              ✓ Wait our Admin Analyze your Data<br></br>
              ✓ Easy to Understand in Your Dashboard<br></br>
              ✓ Complete with our recommendation</div>
          </div>
          <div className='flex flex-col border-2 rounded-3xl mb-4 px-5 py-6 bg-gradient-to-tr from-[#d8d8d83a]'>
            <div className="content flex flex-col">
              <div className="text-xl font-bold">Market Research</div>
              <div className='w-full flex justify-center'>
                <img src='/images/technologies/market-research-icon.svg' className='h-28 w-28 my-8' />
              </div>
              <div className="font-normal my-5 text-justify">Worry about your customer segmentation? Just Contact Us and send your request and we will analyze your potential market segmentation</div>
            </div>
          </div>
          <div className='flex flex-col border-2 rounded-3xl mb-4 px-5 py-5 bg-gradient-to-tr from-[#d8d8d83a]'>
            <div className="content flex flex-col">
              <div className="text-xl font-bold">Business Consultant</div>
              <div className='w-full flex justify-center'>
                <img src='/images/technologies/consultant-icon.svg' className='h-28 w-28 my-8' />
              </div>
              <div className="font-normal my-5 text-justify">had a problem in your business? don’t worry, just call us and we will provide our recommendation for your business</div>
            </div>
          </div>
        </div>
        <div className='flex text-2xl font-normal justify-center text-center my-10 px-4 py-10'>You are potential generation to improve our GDP through kickstart your business, so what are you waiting for? just purchase it and you will get a lot of privilege, like them.</div>
        <div className='flex flex-col gap-4 mx-4 my-10'>
          <div className='flex bg-[#1C1C1C] flex-col w-full mx-auto justify-between rounded-xl drop-shadow-xl px-7' >
            <div className="flex flex-row py-5">
              <div className="rounded-full w-12 h-12">
                <img src='/images/technologies/john.png' className='' />
              </div>
              <div className='text-[14px] font-bold mx-4 my-4 text-center'>@john.z</div>
            </div>
            <div className=' text-[12px] mx-auto mb-7 text-justify'>"Z-Sharp has been a game-changer for me! The revolutionary guidance provided by their team has propelled my business to heights I never thought possible. Their insights and strategies are unparalleled, offering a unique approach that perfectly aligns with the mindset of our generation. Thanks to Z-Sharp, success is not just a goal; it's a reality I'm living every day!"</div>
          </div>
          <div className='flex bg-[#1C1C1C] flex-col w-full mx-auto justify-between rounded-xl drop-shadow-xl px-7' >
            <div className="flex flex-row py-5">
              <div className="rounded-full w-12 h-12">
                <img src='/images/technologies/morin.png' className='' />
              </div>
              <div className='text-[14px] font-bold mx-4 my-4 text-center'>@rey.morin</div>
            </div>
            <div className=' text-[12px] mx-auto mb-7 text-justify'>"My business journey took a remarkable turn when I discovered Z-Sharp. The transformative impact of their services is simply outstanding. They don't just analyze data; they decode the path to success. Z-Sharp has become my trusted partner, guiding me through challenges, refining my ideas, and ultimately reshaping my entrepreneurial adventure."</div>
          </div>
          <div className='flex bg-[#1C1C1C] flex-col w-full mx-auto justify-between rounded-xl drop-shadow-xl px-7' >
            <div className="flex flex-row py-5">
              <div className="rounded-full w-12 h-12">
                <img src='/images/technologies/matchaiai.png' className='' />
              </div>
              <div className='text-[14px] font-bold mx-4 my-4 text-center'>@matchaiai</div>
            </div>
            <div className=' text-[12px] mx-auto mb-7 text-justify'>"Elevating dreams is not just a tagline; it's the essence of what Z-Sharp does. Their commitment to delivering results goes beyond expectations. Z-Sharp doesn't just offer consultation; they provide a roadmap to success. As a Gen Z entrepreneur, I've found my trusted ally in Z-Sharp, turning obstacles into stepping stones toward my goals."</div>
          </div>
        </div>
        <div className='flex text-2xl font-normal justify-center text-center my-2 px-4 py-10'>So, what are you waiting for? Let’s make a change together</div>
        <Link to="/purchase">
          <button className='flex bg-[#1C1C1C] border flex-col h-16 w-64 mx-auto rounded-xl drop-shadow-xl px-7 my-5'>
            <div className="mx-auto my-auto font-semibold">Purchase Now</div>
          </button>
        </Link>
      </Mobile>
    </>
  )
}

export default Tech
