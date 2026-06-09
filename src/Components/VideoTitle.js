import React from 'react'

const VideoTitle = ({ title, description }) => {
  return (
    <div className=" text-white text-left absolute my-20 left-0 p-8">
      <h1 className='text-3xl font-bold px-4'>{title}</h1>
      <p className='text-lg w-1/2 py-2 px-4'>{description}</p>
      <div className="mt-4 px-4 text-base flex">
        <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 w-32 h-12">
          <span className="mr-2 bg-white text-black rounded-full">▶</span>
          Play
        </button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 ml-4 w-32 h-12">
            <span className="mr-2">ⓘ</span>
            More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
