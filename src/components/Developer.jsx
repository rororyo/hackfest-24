import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Desktop, Mobile } from '../utils/MediaQuery';

// ...

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true, // Allows variable width for slides
    centerMode: true,
    centerPadding: '10px',
  };

  return (
    <>
      <Mobile>
        <Slider {...settings}>
          <div className='flex bg-blue-900 flex-col h-[200px] justify-between rounded-tl-[30px] rounded-br-[30px] shadow-2xl shadow-cyan-800/65' >
            <img src='/images/homepage/mark.png' className='h-40 rounded-tl-[30px]' />
            <div className='text-[10px] mx-auto my-auto text-center'><b>Mark</b> <br></br>Business Intelligence at Market</div>
          </div>
          <div className='flex bg-blue-900 flex-col h-[200px] justify-between rounded-tl-[30px] rounded-br-[30px] shadow-2xl shadow-cyan-800/65' >
            <img src='/images/homepage/billy.png' className='h-40 rounded-tl-[30px]' />
            <div className='text-[10px] mx-auto my-auto text-center'><b>Billie</b> <br></br>Data Analyst at Market</div>
          </div>
          <div className='flex bg-blue-900 flex-col h-[200px] justify-between rounded-tl-[30px] rounded-br-[30px] shadow-2xl shadow-cyan-800/65' >
            <img src='/images/homepage/rose.png' className='h-40 rounded-tl-[30px]' />
            <div className='text-[10px] mx-auto my-auto text-center'><b>Rose</b> <br></br>Market Research at Market</div>
          </div>
        </Slider>
      </Mobile>
      <Desktop>
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
      </Desktop>
    </>
  );
}

export default Carousel;
