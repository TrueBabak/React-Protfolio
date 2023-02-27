import React from 'react'
import GitHubCalendar from 'react-github-calendar'

function DaysiCode() {
  return (
   <div className='bg-[#09030e] pb-20'>
      <div className='text-5xl text-center mb-4'>Days I <span className='text-purple-500'>Code</span></div>
      <div className='w-5/6 m-auto flex justify-center'>
        <GitHubCalendar
            username="TrueBabak"
            blockSize={15}
            blockMargin={5}
            color="#9333ea"
            fontSize={16}
            blockRadius={4}
            
        />
      </div>
    </div>
  )
}

export default DaysiCode
