import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Audio } from 'react-loader-spinner';
import Event from "./Event";

function UpcomingShows() {
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const upcomingEventsAPI = "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming";

    const fetchData = async () => {
        setLoading(true);
        const data = await fetch(upcomingEventsAPI);
        const dat = await data.json();
        setUpcomingEvents(dat?.events);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='w-10/12 mx-auto mt-2'>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 font-semibold">
                    Upcoming Shows
                    <FaArrowRightLong />
                </div>
            </div>
            <div>
                {loading ? (
                    <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color="#e74008"
                        ariaLabel="three-dots-loading"
                        wrapperStyle
                        wrapperClass
                    />
                ) : (
                    <div className='flex flex-wrap justify-center'>
                        {upcomingEvents && upcomingEvents.map((e) => {
                            const urlItems = e?.imgUrl.split('/');
                            const id = urlItems[5];
                            const weather= e?.weather.split(' ');
                            return (
                                <div key={e.id} className='flex flex-wrap justify-center my-7'>
                                    <Event e={e} id={id} weather={weather}/>
                                </div>
                            )
                    })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default UpcomingShows;
