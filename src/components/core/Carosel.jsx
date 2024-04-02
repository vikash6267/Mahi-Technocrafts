// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Autoplay  } from 'swiper/modules';
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';


import { team } from '../../data/team';
import {review1 , review2 , review3}  from "../../data/reviews"
export default () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, Autoplay, Virtual]}
    spaceBetween={50}
    // navigation
    // pagination={{ clickable: true }}
  
    loop={true}
    className='z-0'
    autoplay={{ delay: 600  , pauseOnMouseEnter : true , disableOnInteraction : true}}
    breakpoints={{
      // When screen width is less than or equal to 640px
      100: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      // When screen width is between 641px and 768px
      768: {
        slidesPerView: 4,
      },
      // When screen width is greater than 768px
      1024: {
        slidesPerView: 4,
      },
    }}
  >
    {/* Slides content */}
  
  
     
     <div className='  flex items-center justify-center z-0   '>
{
  review1.map((pro)=>(
    <SwiperSlide className='  text-center font-Raleway flex flex-col justify-center items-center  lg:p-8 p-2 rounded-xl shadow-2xl min-h-[280px] ' key={pro.id}> 
   <div className=' flex justify-center items-center '  >
  <p  > <img 
    className=' max-h-[40px] min-h-[20px] border border-black ' style={{ borderRadius: '50%' }}
    src={pro.image}  alt="" /></p>
   </div>

    <div className=' pt-3 flex flex-col gap-1'>
      <p className='text text-sm font-bold'>{pro.name} <span className='text-[10px]'> @{pro.username}</span> </p>
      <p className='text text-xs font-bold'> </p>

      <p className=' text-sm'> {pro.review.split(' ').slice(0, 30).join(' ')}</p>

    


  
    </div>
    </SwiperSlide>
  ))
}
        </div> 

             
          
      
    
    
    
    </Swiper>
  );
};







