import React from 'react'
import FeactureCard from '../components/FeactureCard'


const cardData = [
    {
        name: 'Notes',
        img: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: 'Task',
        img: "https://images.unsplash.com/photo-1506784881475-0e408bbca849?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: 'Motivational Quotes',
        img: "https://plus.unsplash.com/premium_photo-1669348192967-96e1f7f8d94e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: 'Pomodaro Timer',
        img: "https://plus.unsplash.com/premium_photo-1723618998089-b0b77e3daac4?q=80&w=1105&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    
]


const Dashboard = () => {
    return (
        <div className='pt-18 flex flex-col gap-6 w-full '>
            <div className="w-full h-130 relative">
                {/* Background Image */}
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?q=80&w=1470&auto=format&fit=crop"
                    alt=""
                />

                {/* Optional Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="p-4 relative z-10 flex justify-between text-white h-full">
                    <div className="left flex flex-col justify-between ">
                        <div className='flex flex-col gap-4'>
                            <h5 className="text-2xl">WEATHER</h5>
                            <h1 className="text-5xl font-semibold">28° • Bhopal</h1>
                            <h3>Cloudy • Feels like 31°</h3>
                        </div>
                        <div className='flex flex-col items-start '>
                            <h5>Today  <span className='px-1.5 bg-green-400 rounded-full'>LIVE</span></h5>
                            <h3 className='text-2xl'>Monsoon breeze</h3>
                        </div>

                    </div>

                    <div className="right flex flex-col items-center justify-end ">
                        <h1 className='text-7xl'>12:00 AM</h1>
                        <h5>Sunday, March</h5>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap justify-center gap-4'>
                {cardData.map((e, idx) => {

                    return <FeactureCard key={idx} data={e} />
                })}

            </div>


        </div>
    )
}

export default Dashboard