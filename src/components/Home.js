import React from 'react'

function Home() {
  return (
    <div className=''>
        <div className='flex justify-between p-2 m-2'>
          <div className='w-1/4'>
            <h1 className='text-red-600 font-bold'>BookUsNow</h1>
          </div>
          <div className='flex justify-end items-center w-3/5'>
            <div className='mx-2 flex justify-between'>
              <button className='hidden md:block'> ☰ Categories</button>
              <form class="flex relative">
                  <input type="text" class="hidden md:block border border-gray-500 rounded-md"/>
                  <button class="block absolute right-1 top-1">
                      <img src="./Images/search.svg" width="18px" height="18px" alt="Search Icon"/>
                  </button>
              </form>
            </div>
            <div className='mx-2'>
              <button><img src='./Images/heart.svg' width='18px' height='18px' alt='favorites icon'></img></button>
            </div>
            <div className='mx-2'>
              <button><img src='./Images/user.svg' width='18px' height='18px' alt='user icon'></img></button>
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