import React from 'react'
import RecommendedShows from './RecommendedShows'
import UpcomingShows from './UpcomingShows';

function Home() {
  return (
    <div className=''>
        <div className='flex justify-between items-center p-2 m-2 lg:mx-16 lg:justify-start'>
          <div className='w-1/4'>
            <h1 className='text-red-600 font-bold'>BookUsNow</h1>
            <div className='flex lg:hidden items-center'>
              <img src='./Images/location.svg' className='h-3 w-3' alt='location svg'></img>
              <h1 className='text-[#989090] text-xs'>&nbsp;Mumbai,India &gt;</h1>
            </div>
          </div>
          <div className='flex justify-end items-center w-3/5'>
            <div className='mx-2 flex justify-between lg:w-3/5'>
              <button className='hidden lg:block bg-black text-white rounded-md p-1'> ☰ Categories</button>
              <form className="flex relative w-4/6">
                  <input type="text" className="hidden lg:block border border-gray-500 rounded-md w-full"/>
                  <button className="block w-7 h-7 lg:w-4 lg:h-4 lg:absolute lg:right-2 lg:top-2 ">
                      <img src="./Images/search.svg" alt="Search Icon"/>
                  </button>
              </form>
            </div>
            <div className='mx-2'>
              <button className='flex justify-center items-center'><img src='./Images/heart.svg' width='18px' height='18px' alt='favorites icon'></img><h1 className='hidden lg:block text-[#989090]'>&nbsp;&nbsp;Favorites</h1></button>
            </div>
            <div className='mx-2'>
              <button className='none lg:border border-[#BOBABF] p-1 rounded-lg'>
                <img src='./Images/user.svg' width='18px' height='18px' alt='user icon' className='block lg:hidden'></img>
                <h1 className='hidden lg:block text-[#989090]'>Sign In</h1>
              </button>
            </div>
          </div>
        </div>
        <div className='mx-2 lg:mx-16 flex justify-between items-center mb-2 overflow-hidden'>
          <div className='hidden lg:flex items-center'>
            <img src='./Images/location.svg' className='h-3 w-3' alt='location svg'></img>
            <h1 className='text-[#989090] text-sm'>&nbsp;Mumbai,India &gt;</h1>
          </div>
          <div className="flex items-center mx-auto gap-6 text-[#989090] text-sm  hover:overflow-x no-scrollbar">
              <p className="cursor-pointer">Live shows</p>
              <p className="cursor-pointer">Streams</p>
              <p className="cursor-pointer">Movies</p>
              <p className="cursor-pointer">Plays</p>
              <p className="cursor-pointer">Events</p>
              <p className="cursor-pointer">Sports</p>
              <p className="cursor-pointer">Activities</p>
          </div>
        </div>
        <div className='relative text-center w-full'>
          <img width='100%' height='50rem' src='./Images/Banner.svg' alt='Banner SVG' className='lg:w-full lg:h-auto'></img>
          <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8/12'>
            <p className='text-white text-2xl lg:text-6xl text-center font-semibold leading-relaxed'>Discover Exciting Events Happening Near You - Stay Tuned for Updates!</p>
            <p className='text-white lg:text-xl lg:px-[70px]'>
              Dorem ipsom dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero at velit interdum, ac aliquet adio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            </p>
          </div>
          <RecommendedShows/>
        </div>
        <UpcomingShows/>
    </div>
  )
}

export default Home