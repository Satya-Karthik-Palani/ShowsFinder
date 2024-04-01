import React from 'react'

function Home() {
  return (
    <div className=''>
        <div className='flex justify-between items-center p-2 m-2 lg:mx-20 lg:justify-start'>
          <div className='w-1/4'>
            <h1 className='text-red-600 font-bold'>BookUsNow</h1>
          </div>
          <div className='flex justify-end items-center w-3/5'>
            <div className='mx-2 flex justify-between lg:w-3/5'>
              <button className='hidden lg:block bg-black text-white rounded-md p-1'> ☰ Categories</button>
              <form className="flex relative w-4/6">
                  <input type="text" className="hidden lg:block border border-gray-500 rounded-md w-full"/>
                  <button className="block w-7 h-7 lg:absolute lg:right-1 lg:top-1 ">
                      <img src="./Images/search.svg" alt="Search Icon"/>
                  </button>
              </form>
            </div>
            <div className='mx-2'>
              <button className='flex justify-center items-center'><img src='./Images/heart.svg' width='18px' height='18px' alt='favorites icon'></img><h1 className='hidden lg:block'>&nbsp;&nbsp;Favorites</h1></button>
            </div>
            <div className='mx-2'>
              <button className='none lg:border border-[#BOBABF] p-1 rounded-lg'>
                <img src='./Images/user.svg' width='18px' height='18px' alt='user icon' className='block lg:hidden'></img>
                <h1 className='hidden lg:block'>Sign In</h1>
              </button>
            </div>
          </div>
        </div>
        <div className=''>
          <img width='100%' src='./Images/Banner.svg' alt='Banner SVG'></img>
        </div>
    </div>
  )
}

export default Home