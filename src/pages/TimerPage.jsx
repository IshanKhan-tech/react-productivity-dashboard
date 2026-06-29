import React, { useEffect, useState } from 'react'

const TimerPage = () => {
    const [seconds, setSeconds] = useState(1500)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(()=>{
        if(!isRunning) return;
        const id =setInterval(() => {
        setSeconds((prev) => {
            return prev - 1
        })
    }, 1000)
    return ()=>{
        clearInterval(id)
    }
    },[isRunning])

    return (
        <div className='flex items-center justify-center h-200'>
            <div className='h-90 w-150 bg-amber-100 p-5 rounded-3xl flex flex-col items-center justify-center '>
                <h1 className='text-8xl'>{Math.floor(seconds / 60)} : {(seconds % 60).toString().padStart(2, "0")}</h1>
                <div className='flex items-center justify-center gap-15 mt-9'>
                    <button onClick={() => {
                        setIsRunning(true)
                    }} className='px-3 text-2xl py-2 bg-amber-50 rounded-3xl cursor-pointer active:scale-90'>Start</button>
                    <button onClick={() => {
                        setIsRunning(false)
                     }} className='px-3 text-2xl py-2 bg-amber-50 rounded-3xl cursor-pointer active:scale-90'>Pause</button>
                    <button onClick={()=>{
                        setSeconds(1500)
                    }} className='px-3 text-2xl py-2 bg-amber-50 rounded-3xl cursor-pointer active:scale-90'>Reset</button>
                </div>
                <div className='flex items-center justify-center gap-15 mt-9'>
                    <button onClick={()=>{
                        setSeconds(300)
                        setIsRunning(true)
                    }} className='px-3 text-sm py-2 bg-amber-50 rounded-3xl cursor-pointer active:scale-90'>Short break </button>
                    <button onClick={()=>{
                        setSeconds(900)
                        setIsRunning(true)
                    }} className='px-3 text-sm py-2 bg-amber-50 rounded-3xl cursor-pointer active:scale-90'>Long Break</button>
                </div>
            </div>
        </div>
    )
}

export default TimerPage