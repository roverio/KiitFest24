'use client'

import { useState, useEffect } from "react";

const CountDown = () => {
  const targetDate = new Date("February 13, 2024 24:00:00");
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return() => clearInterval(timer);
  }, [""])

  function calculateTimeRemaining() {
    const currentTime = new Date().getTime()
    const difference = targetDate - currentTime;
    return Math.max(0, difference);
  }

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div className='flex justify-around bg-dashboard-coundown px-3 max-w-xs py-4 mx-auto gap-2 xs:gap-3 md:gap-0 md:m-0'>
        <CountdownPill time={formatTime(days)} title={'days'} />
        <CountdownPill time={formatTime(hours)} title={'hrs'} />
        <div className="w-4 flex flex-col justify-evenly items-center">
          <div className="bg-gradient-to-b from-[#1741CC] to-[#16BCDC] w-3 h-3 rounded-full"></div>
          <div className="bg-gradient-to-b from-[#1741CC] to-[#16BCDC] w-3 h-3 rounded-full"></div>
        </div>
        <CountdownPill time={formatTime(minutes)} title={'min'} />
        <CountdownPill time={formatTime(seconds)} title={'sec'} />
    </div>
  )
}

export default CountDown

function CountdownPill ({ time, title }) {
    return (
        <div className='gradient-button flex flex-col rounded-md text-4xl md:text-7xl justify-center items-center py-3 px-4 bg-gradient-to-b from-[#1741CC] to-[#16BCDC] hover:from16BCDC] hover:to-[#1741CC]'>
            <span>{ time }</span> 
            <span className='text-sm'>{ title }</span>
        </div>
    )
}