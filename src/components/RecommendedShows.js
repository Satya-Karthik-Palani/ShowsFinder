import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from "react";
import { Audio } from 'react-loader-spinner';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FreeMode } from 'swiper/modules';

function Recommendation(){

    const [recommendedShows, setRecommendedShows] = useState(null);
    const [loading, setLoading] = useState(true);

    const recommendedShowsApi = "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco";

    const fetchData = async()=>{
        setLoading(true);
        const response = await fetch(recommendedShowsApi);
        const data = await response.json();
        setRecommendedShows(data);
        setLoading(false);
    }
    useEffect(()=>{
        fetchData();
    }, [])

    return(
        <div className="w-10/12 mx-auto mt-2">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 font-semibold">
                    Recommended shows
                    <FaArrowRightLong />
                </div>
            </div>
            <div>
                <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mb-4"
                >
                    {
                        loading === true ? (<Audio
                            height="80"
                            width="80"
                            radius="9"
                            color="#e74008"
                            ariaLabel="three-dots-loading"
                            wrapperStyle
                            wrapperClass
                        />) : 
                        (
                            recommendedShows.events.map((e)=>{
                                const urlItems = e.imgUrl.split('/');
                                const id = urlItems[5];
                                return (
                                    <SwiperSlide key={id} className="relative">
                                        <img src={`https://drive.google.com/thumbnail?id=${id}&sz=w1000`} alt="event img"></img>
                                        <div className="absolute bottom-3 px-10 pb-4 w-full text-[#989090]">
                                            <div className="flex justify-between items-center">
                                                <p className="text-lg text-white">Make Agree</p>
                                                <p className="text-xs">March 23,2024</p>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div className="flex justify-between items-center">
                                                    <img src="./Images/location.svg" className="w-4 h-4" alt="location img"></img>
                                                    <p className="text-xs">&nbsp;West Douglas</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs">Snowy, 26°C | 42 Km</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })
                        )
                    }
                </Swiper>
            </div>
        </div>
    );


}

export default Recommendation;