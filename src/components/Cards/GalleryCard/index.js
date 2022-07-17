 import React, { useState } from "react";
 import { Swiper, SwiperSlide } from "swiper/react";

 import "swiper/css";
 import "swiper/css/free-mode";
 import "swiper/css/navigation";
 import "swiper/css/thumbs";
 import "./gallery.scss";
 import {Navigation, Thumbs } from "swiper";

 export default function App({ photos }) {
     const [thumbsSwiper, setThumbsSwiper] = useState(null);

     return (
         <>
             <Swiper
                 style={{
                     "--swiper-navigation-color": "#fff",
                     "--swiper-pagination-color": "#fff",
                 }}
                 spaceBetween={10}
                 slidesPerView={3}
                 breakpoints={{
                    320:{
                        slidesPerView: 1,
                        spaceBetween: 20,  
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                      
                  }}
                 navigation={true}
                 thumbs={{ swiper: thumbsSwiper }}
                 modules={[ Navigation, Thumbs]}
                 className="mySwiper2"
             >
                 {photos && photos.map((photo) => {
                     return (
                         <SwiperSlide>
                             <div className="gallery_containers">
                                 <img src={photo.url} alt='gallery' />
                                 <h4>{photo.title}</h4>
                             </div>
                         </SwiperSlide>
                     )
                 })}
             </Swiper>
             <Swiper
                 onSwiper={setThumbsSwiper}
                 loop={true}
                 spaceBetween={10}
                 slidesPerView={10}
                 freeMode={true}
                 watchSlidesProgress={true}
                 modules={[Navigation, Thumbs]}
                 className="mySwiper"
             >
                 {photos && photos.map((photo) => {
                     return (
                         <SwiperSlide>
                             <div>
                                 <img src={photo.thumbnailUrl} alt='gallery' />
                             </div>
                         </SwiperSlide>
                     )
                 })}
             </Swiper>
         </>
     );
 }
