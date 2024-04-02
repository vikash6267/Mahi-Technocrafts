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
export default () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, Autoplay, Virtual]}
    spaceBetween={50}
    navigation
    pagination={{ clickable: true }}
    loop={true}
    className='z-0'
    autoplay={{ delay: 2000  , pauseOnMouseEnter : false , disableOnInteraction : true}}
    breakpoints={{
      // When screen width is less than or equal to 640px
      640: {
        slidesPerView: 1,
      },
      // When screen width is between 641px and 768px
      768: {
        slidesPerView: 2,
      },
      // When screen width is greater than 768px
      1024: {
        slidesPerView: 2,
      },
    }}
  >
    {/* Slides content */}
  
  
     
     <div className='  flex items-center justify-center z-0   '>
{
    team.map((pro)=>(
    <SwiperSlide className='  text-center font-Raleway flex flex-col justify-center items-center  p-10 rounded-xl shadow-2xl ' key={pro.id}> 
   <div className=' flex justify-center items-center '  >
  <a href="https://www.instagram.com/mahi_technocrafts" target='_blank' rel="noreferrer"> <img 
    className=' max-h-[300px] min-h-[200px] border border-black ' style={{ borderRadius: '90%' }}
    src={pro.image}  alt="" /></a>
   </div>

    <div className=' pt-3 flex flex-col gap-1'>
      <p className='text text-3xl font-bold'>{pro.name} </p>
      <p className=' text-sm'> Exprience -{pro.exprience}</p>

      <p className='text-sm'>{pro.desc}</p>


  
    </div>
    </SwiperSlide>
  ))
}
        </div> 

             
          
      
    
    
    
    </Swiper>
  );
};