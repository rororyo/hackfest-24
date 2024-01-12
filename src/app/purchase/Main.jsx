import { useState } from 'react';
import { motion } from 'framer-motion';
import { Desktop, Mobile } from '../../utils/MediaQuery';



function Purchase() {

  const [showImage, setShowImage] = useState(false);

  const handlePurchase = () => {
    // Lakukan logika pembelian atau panggil fungsi untuk melakukan pembelian di sini

    // Setelah pembelian berhasil, tampilkan gambar
    setShowImage(true);
  };
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
            <div className='flex text-7xl font-bold justify-center text-center px-64 py-10'>Checkout</div>
            <div className='flex text-2xl font-normal justify-center text-center px-64 py-10'>one more step towards significant business change</div>
          </div>
        </motion.div>
        <div className="tech flex border bg-gradient-to-tr from-[#d8d8d83a] flex-col h-[400px] w-auto mx-52 my-5 py-10 px-12 rounded-[50px]">
          <div className="text-2xl font-bold">Z-Sharp Membership Card</div>
          <div className="text-xl font-bold mt-20">Name: Member Z-Sharp</div>
          <div className="text-justify font-normal my-2">Interval Time: 1 Month</div>
          <div className="text-justify font-light my-10">"Unlock the Power of Success with Z-Sharp Membership Card! Elevate your entrepreneurial journey to new heights with exclusive benefits, personalized consultations, and access to cutting-edge business intelligence. Join the community that transforms ideas into triumphs.</div>
        </div>

        <div className="tech flex flex-col h-auto w-auto mx-52 my-5 rounded-[50px]">
          <div className="text-2xl font-bold my-5">Summary</div>
          <div className="flex flex-row">
            <div className="text-justify font-normal mt-7">Original Price</div>
            <div className="text-justify font-normal mt-7 ml-auto">Rp. 100.000</div>
          </div>
          <div className="flex flex-row">
            <div className="text-justify font-normal mt-2">Discount</div>
            <div className="text-justify font-normal mt-2 ml-auto">Rp. 20.000</div>
          </div>
          <div className="flex flex-row">
            <div className="text-justify font-bold mt-10">Total</div>
            <div className="text-justify font-bold mt-10 ml-auto">Rp. 80.000</div>
          </div>
          <button
            className='flex bg-[#1C1C1C] border flex-col h-16 w-64 mx-auto rounded-xl drop-shadow-xl px-7 my-10'
            onClick={handlePurchase}
          >
            <div className="mx-auto my-auto font-semibold">Purchase Now</div>
          </button>

          {/* Tampilkan gambar jika showImage true */}
          {showImage && (
            <div className="mx-auto my-5">
              <img src="/images/purchase/qris.jpeg" alt="Purchased Image" className="rounded-lg" />
            </div>
          )}
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
            <div className='flex text-6xl font-bold justify-center text-center px-8 py-10'>Checkout</div>
            <div className='flex text-xl font-normal justify-center text-center px-8 py-10'>one more step towards significant business change</div>
          </div>
        </motion.div>
        <div className='mx-2'>
          <div className="tech flex border bg-gradient-to-tr from-[#d8d8d83a] flex-col my-5 py-10 px-8 rounded-[30px]">
            <div className="text-2xl font-bold">Z-Sharp Membership Card</div>
            <div className="text-xl font-bold mt-20">Name: Member Z-Sharp</div>
            <div className="text-justify font-normal my-2">Interval Time: 1 Month</div>
            <div className="text-justify font-light my-10">"Unlock the Power of Success with Z-Sharp Membership Card! Elevate your entrepreneurial journey to new heights with exclusive benefits, personalized consultations, and access to cutting-edge business intelligence. Join the community that transforms ideas into triumphs.</div>
          </div>
          <div className="tech flex flex-col my-5 px-8">
            <div className="text-2xl font-bold my-5">Summary</div>
            <div className="flex flex-row">
              <div className="text-justify font-normal mt-7">Original Price</div>
              <div className="text-justify font-normal mt-7 ml-auto">Rp. 100.000</div>
            </div>
            <div className="flex flex-row">
              <div className="text-justify font-normal mt-2">Discount</div>
              <div className="text-justify font-normal mt-2 ml-auto">Rp. 20.000</div>
            </div>
            <div className="flex flex-row">
              <div className="text-justify font-bold mt-10">Total</div>
              <div className="text-justify font-bold mt-10 ml-auto">Rp. 80.000</div>
            </div>
            <button
              className='flex bg-[#1C1C1C] border flex-col h-16 w-64 mx-auto rounded-xl drop-shadow-xl px-7 my-10'
              onClick={handlePurchase}
            >
              <div className="mx-auto my-auto font-semibold">Purchase Now</div>
            </button>

            {/* Tampilkan gambar jika showImage true */}
            {showImage && (
              <div className="mx-auto my-5">
                <img src="/images/purchase/qris.jpeg" alt="Purchased Image" className="rounded-lg" />
              </div>
            )}
          </div>
        </div>
      </Mobile>
    </>
  )
}

export default Purchase
