import React from 'react'

const VideoTitle = ({ title, description }) => {
  return (
    <div className=" text-white text-left absolute left-0 p-8 mt-60 sm:mt-48 p-4">
      <h1 className='text-sm font-bold px-4 sm:text-3xl'>{title}</h1>
      <p className='text-lg w-1/3 py-2 px-4 hidden sm:block'>{description}</p>
      <div className="mt-2 px-4 text-base flex sm:mt-4">
        <button className=" bg-white text-black rounded-md hover:bg-gray-200 sm:w-32 h-12 px-4 py-2">
          <span className="mr-2 bg-white text-black rounded-full">▶</span>
          Play
        </button>
        <button className="bg-gray-700 text-white rounded-md hover:bg-gray-600 ml-4 sm:w-32 h-12 px-4 py-2">
            <span className="mr-2">ⓘ</span>
            More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
