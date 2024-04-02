import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Audio } from 'react-loader-spinner';

import moment from 'moment';

function Recommendation(){

    const [recommendedShows, setRecommendedShows] = useState(null);
    const [loading, setLoading] = useState(true);

    const recommendedShowsApi = "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco";

    const fetchData = async()=>{
        setLoading(true);
        const response = await fetch(recommendedShowsApi);
        const data = await response.json();
        setRecommendedShows(data.events);
        setLoading(false);
    }
    useEffect(()=>{
        fetchData();
    }, [])

    return(
        <div>
            <div className="w-10/12 mx-auto mt-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 font-semibold">
                        Recommended shows
                        <FaArrowRightLong />
                    </div>
                    <div>
                        <p className="underline text-md">See all</p>
                    </div>
                </div>
            </div>
            <div className="ml-10 lg:ml-36">
                {
                    loading === true ? (<Audio
                        height="80"
                        width="80"
                        radius="9"
                        color="#e74008"
                        ariaLabel="three-dots-loading"
                        wrapperStyle
                        wrapperClass
                    />) : (
                        <div className="relative flex items-center">
                            <div className="flex items-center justify-start w-full h-96 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide gap-x-0">
                                {
                                    recommendedShows.map((e)=>{
                                        const urlItems = e.imgUrl.split('/');
                                        const id = urlItems[5];
                                        const weather= e?.weather.split(' ');
                                        return(
                                        <div className="inline-block cursor-pointer relative h-full min-w-[280px]">
                                            <img src={`https://drive.google.com/thumbnail?id=${id}&sz=w1000`} alt="event img" className="h-full w-full"></img>
                                            <div className="absolute bottom-3 px-7 pb-4 w-full text-[#989090]">
                                                <div className="flex justify-between items-center">
                                                    <p className="text-lg text-white truncate overflow-hidden w-1/2">{e?.eventName}</p>
                                                    <p className="text-xs">{moment(e?.date).format('MMMM Do YYYY')}</p>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <div className="flex justify-between items-center">
                                                        <img src="./Images/location.svg" className="w-4 h-4" alt="location img"></img>
                                                        <p className="text-xs">&nbsp;{e?.cityName}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs">{weather[0]}&nbsp;{weather[1].replace('C', '\u00B0C')} | 42 Km</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )})
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );


}

export default Recommendation;