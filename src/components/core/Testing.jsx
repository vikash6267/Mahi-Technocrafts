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


import { projects } from '../../data/projects';
export default () => {
  return (
    <Swiper   
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, Autoplay  ,Virtual]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
      loop = {true}
      autoplay={{ delay: 2000  , pauseOnMouseEnter : false , disableOnInteraction : true}}
     className='z-0 '
    
    >
     
    
     <div className="  w-11/12 mx-auto  ">
          {projects.map((project) => (
            <SwiperSlide
              className="   overflow-hidden   "
              key={project.id}
            >
              <div className="overflow-hidden">
                  <img
                    className=" object-cover   w-11/12 mx-auto "
                    src={project.image}
                    alt={project.name}
                   
                  />
                </div>
              <a href={project.link} title={project.name}>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-amber-950">
                  {project.name}
                </div>
                <p className="text-gray-700 text-base">{project.desc}</p>
              </div>
              </a>

             
            </SwiperSlide>
          ))}
        </div>
    
    
    
    </Swiper>
  );
};