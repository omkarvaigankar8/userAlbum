import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow} from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function GalleryCard({ photos }) {
    return (
        <div className="App">
            {photos &&
                <Swiper
                    navigation
                    pagination={{ clickable: true }}
                    effect="coverflow"
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false
                    }}
                    slidesPerView={2}
                    centeredSlides
                    style={{ height: "800px" }}
                    modules={[Navigation]}
                >
                    {photos && photos.map((photo) => {
                        return <SwiperSlide key={photo.id}
                            // style={{
                            //     backgroundImage:
                            //         `url(${photo.url})`
                            // }}
                        >
                            <img src={`${photo.url}`} alt='gallery' />
                            <h2>{photo.title}</h2>
                        </SwiperSlide>

                    })}
                </Swiper>
            }
        </div>
    );
}
