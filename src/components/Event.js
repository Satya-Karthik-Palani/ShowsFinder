import React from 'react'
import moment from 'moment';
function Event({e,id,weather}) {
  return (
    <div className="w-80 sm:w-96 h-[300px] sm:h-[350px] bg-[#ffffff] border border-[#BOBABF] rounded-lg mx-auto sm:mx-4 relative">
        <img src={`https://drive.google.com/thumbnail?id=${id}&sz=w1000`} alt="img"></img>
        <div className='absolute top-[187px] sm:top-[230px] rounded-t-none rounded-b-lg left-[4.5%] text-white w-[91%] bg-[rgba(49,49,49,0.8)] p-1'>
          <p className='ml-2'>{moment(e?.date).format('MMMM Do YYYY')}</p>
        </div>
        <div className='mx-7 my-2'>
          <p className='text-lg font-semibold mb-1 line-clamp-1'>{e.eventName}</p>
          <div className="flex justify-between items-center text-[#989090]">
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
  )
}

export default Event