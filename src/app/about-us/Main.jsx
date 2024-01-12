import { motion } from 'framer-motion';
import { Desktop, Mobile } from '../../utils/MediaQuery';
import Developer from '../../components/Developer';

function AboutUs() {
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
            <div className='flex text-7xl font-bold justify-center text-center px-64 py-10'>About Us</div>
            <div className='flex text-2xl font-normal justify-center text-center px-64 py-10'>Meet our awesome developers</div>
          </div>
        </motion.div>
        <Developer />
        <div className='flex text-lg font-normal justify-center text-center px-64 py-10'>Z-Sharp is more than a consultancy; it's the catalyst for the next wave of entrepreneurial success. With innovative strategies, cutting-edge analysis, and tailored solutions, we redefine how Gen Z navigates the business landscape. Our team delves deep into each venture, not just as analysts but as architects of success, decoding challenges and uncovering opportunities that propel businesses to new heights.
          <br></br><br></br>We stand out through an unwavering commitment to innovation, creating trends rather than following them. Z-Sharp is not a one-size-fits-all solution but a dynamic partnership dedicated to empowering the entrepreneurial spirit within Gen Z.
          <br></br><br></br>Choosing Z-Sharp means gaining access to a support system that understands the pulse of your ambition. We don't just aim for success; we pave the way for it. Z-Sharp: Where business consultation meets the future, and your journey from idea to impact begins.</div>
      </Desktop>
      <Mobile>
        <motion.div
          className='relative h-[40vh] overflow-hidden'
          initial='hidden'
          animate='visible'
          variants={fadeInUp}
        >
          <div className='w-full h-full bg-gradient-to-b from-[#0C132F] via-0B0C10 to-transparent rounded-b-full absolute'>
            <div className='flex text-6xl font-bold justify-center text-center px-4 py-10'>About Us</div>
            <div className='flex text-2xl font-normal justify-center text-center px-4 py-10'>Meet our awesome developers</div>
          </div>
        </motion.div>
        <div className='mx-6'>
          <Developer />
          <div className='flex text-lg font-normal justify-center text-center py-10'>Z-Sharp is more than a consultancy; it's the catalyst for the next wave of entrepreneurial success. With innovative strategies, cutting-edge analysis, and tailored solutions, we redefine how Gen Z navigates the business landscape. Our team delves deep into each venture, not just as analysts but as architects of success, decoding challenges and uncovering opportunities that propel businesses to new heights.
            <br></br><br></br>We stand out through an unwavering commitment to innovation, creating trends rather than following them. Z-Sharp is not a one-size-fits-all solution but a dynamic partnership dedicated to empowering the entrepreneurial spirit within Gen Z.
            <br></br><br></br>Choosing Z-Sharp means gaining access to a support system that understands the pulse of your ambition. We don't just aim for success; we pave the way for it. Z-Sharp: Where business consultation meets the future, and your journey from idea to impact begins.</div>
        </div>
      </Mobile>
    </>
  )
}

export default AboutUs