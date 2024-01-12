import React from 'react';
import { motion } from 'framer-motion';
import { Mobile, Desktop } from '../../utils/MediaQuery';
import Developer from '../../components/Developer';

function Homepage() {
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
            <div className='flex text-7xl font-bold justify-center text-center my-14 px-64 py-10'>Welcome to the Z-Sharp Era</div>
          </div>
        </motion.div>
        <div className='flex rounded-full border bg-navbar h-fit w-fit mt-4 px-6 mx-auto'>
          <div className='font-semibold flex justify-left flex-row gap-8 mt-4 ml-8 mb-4'>
            Z-Sharp Era
          </div>
          <div className='font-semibold flex justify-left flex-row gap-8 my-4 mx-8'>
            Fact
          </div><div className='font-semibold flex justify-left flex-row gap-8 my-4 mx-8'>
            Capabilities
          </div><div className='font-semibold  flex justify-left flex-row gap-8 my-4 mx-8'>
            Entrepreneurship Era
          </div><div className='font-semibold flex justify-left flex-row gap-8 my-4 mx-8'>
            Business Intelligence Consultant
          </div>
        </div>
        <div className='flex text-2xl font-normal justify-center text-center px-64 py-10'>Gen-Z It is a generation that is highly potential to significantly contribute to economic growth; <br></br> therefore, we refer to it as Z-Sharp Era</div>
        <div className='flex text-2xl font-normal justify-center text-center px-64 py-10'>2021 Asia Pacific Young Entrepreneurs Survey found that 72% of Generation Z and Millennials in the Asia Pacific aspire to have their own business.</div>
        <img src='/images/homepage/graph.svg' className='h-96 rounded-tl-[30px] mx-auto mb-10' />
        <div className='relative h-[50vh] w-full overflow-hidden'>
          {/* Shape setengah lingkaran (sebelah kanan) */}
          <div className='w-full h-full relative'>
            <div className='absolute top-0 right-0 h-full w-full bg-gradient-to-b from-[#1A1B1D] via-0B0C10 to-transparent rounded-r-full'>
              <div className='flex text-2xl font-normal justify-center text-center px-64 py-10'>Be a contributor to the country's economic development by becoming part of the young entrepreneur</div>
              <div className='flex text-2xl font-normal justify-center text-center px-64 py-10'>Unfortunately, many in Generation Z, including yourselves, are currently facing confusion about where to start a business, isn't that right? </div>
            </div>
          </div>
        </div>

        <div className='flex flex-row h-[200px] w-auto mx-64'>
          <div className='flex  bg-blue-900 flex-col h-[200px] w-[200px] mr-auto justify-between rounded-tl-[30px] rounded-br-[30px] shadow-2xl shadow-cyan-800/65' >
            <img src='/images/homepage/mark.png' className='h-40 rounded-tl-[30px] ' />
            <div className='text-[10px] mx-auto my-auto text-center'><b>Mark</b> <br></br>Business Intelligence at Market</div>
          </div>
          <div className='flex bg-blue-900 flex-col h-[200px] w-[200px] mx-auto justify-between rounded-tl-[30px] rounded-br-[30px] shadow-2xl shadow-cyan-800/65' >
            <img src='/images/homepage/billy.png' className='h-40 rounded-tl-[30px] ' />
            <div className='text-[10px] mx-auto my-auto text-center'><b>Billie</b> <br></br>Data Analyst at Market</div>
          </div>
          <div className='flex bg-blue-900 flex-col h-[200px] w-[200px] ml-auto justify-between rounded-tl-[30px] rounded-br-[30px] shadow-2xl shadow-cyan-800/65' >
            <img src='/images/homepage/rose.png' className='h-40 rounded-tl-[30px] ' />
            <div className='text-[10px] mx-auto my-auto text-center'><b>Rose</b> <br></br>Market Research at Market</div>
          </div>
        </div>
        <div className='flex text-2xl font-normal justify-center text-center px-64 py-10'>We are here for you, providing excellent consultants to kickstart your business journey by implementing business intelligence strategies. Let us shape the Z-sharp era of entrepreneurial generations</div>

        <div className='relative h-[30vh] w-full overflow-hidden'>
          {/* Shape setengah lingkaran (sebelah kanan) */}
          <div className='w-full h-full relative'>
            <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-transparent via-0B0C10 to-[#1A1B1D] rounded-l-full'>
              <div className='flex text-4xl font-bold justify-center text-center px-64 py-24'>See More of What #Z-Sharp Can Do</div>
            </div>
          </div>
        </div>
        <div className='flex flex-row py-4 w-auto mx-60 mb-28'>
          <div className='flex bg-[#1C1C1C] flex-col py-4 w-[200px] mx-auto justify-between rounded-xl drop-shadow-xl px-5 ' >
            <div className='text-[12px] font-bold mx-auto my-4 text-center'>Can Z-Sharp Build My Raw Idea?</div>
            <img src='/images/homepage/idea.svg' className='h-28 rounded-tl-[30px]' />
            <div className='text-[10px] mx-auto my-auto text-center'>Yes, Z-Sharp can sharpen your raw idea until it becomes worthy of implementation.</div>
          </div>
          <div className='flex bg-[#1C1C1C] flex-col py-4 w-[200px] mx-auto justify-between rounded-xl drop-shadow-xl  px-5 ' >
            <div className='text-[12px] font-bold mx-auto my-4 text-center'>Can Z-Sharp Analyze My Selling and Market Potential?</div>
            <img src='/images/homepage/analytics.svg' className='h-28 rounded-tl-[30px] ' />
            <div className='text-[10px] mx-auto my-auto text-center'>Yes, Z-Sharp can analyze your selling and market potential.</div>
          </div>
          <div className='flex bg-[#1C1C1C] flex-col py-4 w-[200px] mx-auto justify-between rounded-xl drop-shadow-xl  px-5 ' >
            <div className='text-[12px] font-bold mx-auto my-4 text-center'>Can Z-Sharp Provide Business Consultation?</div>
            <img src='/images/homepage/presentation.svg' className='h-28 rounded-tl-[30px] ' />
            <div className='text-[10px] mx-auto my-auto text-center'>Yes, we will provide business consultation to you to the best of our ability through our talented consultants.</div>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <motion.div
          className='relative h-[40vh] overflow-hidden'
          initial='hidden'
          animate='visible'
          variants={fadeInUp}
        >
          <div className='w-full h-full bg-gradient-to-b from-[#0C132F] via-0B0C10 to-transparent rounded-b-full absolute'>
            <div className='flex text-5xl font-bold justify-center text-center px-4 my-8 py-4'>Welcome to the<br /> Z-Sharp Era</div>
          </div>
        </motion.div>
        <div className='flex flex-col gap-12'>
          <div className='flex flex-col gap-12 text-2xl font-normal justify-center text-center px-8 py-10'>
            <div>Gen-Z It is a generation that is highly potential to significantly contribute to economic growth; <br></br> therefore, we refer to it as Z-Sharp Era</div>
            <div>2021 Asia Pacific Young Entrepreneurs Survey found that 72% of Generation Z and Millennials in the Asia Pacific aspire to have their own business.</div>
          </div>
          <div className='mr-4'>
            <img src='/images/homepage/graph.svg' className='scale-90' />
          </div>
          <div className='overflow-hidden'>
            <div className='h-full w-full bg-gradient-to-b from-[#1A1B1D] via-0B0C10 to-transparent rounded-r-[60px]'>
              <div className='flex flex-col text-2xl font-normal justify-center text-center px-12 py-10'>
                <div>Be a contributor to the country's economic development by becoming part of the young entrepreneur</div>
                <div>Unfortunately, many in Generation Z, including yourselves, are currently facing confusion about where to start a business, isn't that right? </div>
              </div>
            </div>
          </div>
          <div className='mx-8'>
            <Developer />
          </div>
          <div className='flex text-2xl font-normal justify-center text-center px-8 py-10'>We are here for you, providing excellent consultants to kickstart your business journey by implementing business intelligence strategies. Let us shape the Z-sharp era of entrepreneurial generations</div>
          <div className='relative h-[30vh] w-full overflow-hidden'>
            <div className='w-full h-full relative'>
              <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-transparent via-0B0C10 to-[#1A1B1D] rounded-l-full'>
                <div className='flex text-4xl font-bold justify-center text-center px-8 py-24'>See More of What #Z-Sharp Can Do</div>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-auto my-12 gap-4'>
            <div className='flex bg-[#1C1C1C] flex-col py-8 mx-16 justify-between rounded-xl drop-shadow-xl px-5'>
              <div className='text-[12px] font-bold mx-auto mb-4 text-center'>Can Z-Sharp Build My Raw Idea?</div>
              <img src='/images/homepage/idea.svg' className='h-28 my-4 rounded-tl-[30px]' />
              <div className='text-[10px] mx-auto my-auto text-center'>Yes, Z-Sharp can sharpen your raw idea until it becomes worthy of implementation.</div>
            </div>
            <div className='flex bg-[#1C1C1C] flex-col py-8 mx-16 justify-between rounded-xl drop-shadow-xl px-5'>
              <div className='text-[12px] font-bold mx-auto mb-4 text-center'>Can Z-Sharp Analyze My Selling and Market Potential?</div>
              <img src='/images/homepage/analytics.svg' className='h-28 my-4 rounded-tl-[30px]' />
              <div className='text-[10px] mx-auto my-auto text-center'>Yes, Z-Sharp can analyze your selling and market potential.</div>
            </div>
            <div className='flex bg-[#1C1C1C] flex-col py-8 mx-16 justify-between rounded-xl drop-shadow-xl px-5'>
              <div className='text-[12px] font-bold mx-auto mb-4 text-center'>Can Z-Sharp Provide Business Consultation?</div>
              <img src='/images/homepage/presentation.svg' className='h-28 my-4 rounded-tl-[30px]' />
              <div className='text-[10px] mx-auto my-auto text-center'>Yes, we will provide business consultation to you to the best of our ability through our talented consultants.</div>
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
}

export default Homepage