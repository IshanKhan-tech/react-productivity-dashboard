import React, { useEffect, useState } from 'react'
import QuotesApi from '../services/QuotesApi'
import { weatherApi } from '../services/WeatherAPI'

const Quotes = () => {
  const [quoteData, setQuoteData] = useState([])
  useEffect(()=>{
    const getData = async ()=>{
      const data = await QuotesApi()
      setQuoteData(data)
    }
      getData()
  },[])
  // console.log(quoteData.quote);
  
  return (
    <div className='flex h-200  items-center justify-center'>
      <div className='h-90 w-130 bg-linear-65 from-purple-300 to-pink-300 rounded-2xl p-3'>
        <h1 className='text-xl rounded-t-xl font-semibold text-[#fff] bg-linear-65 from-purple-400 to-pink-400 p-3'>#Quotes of the day</h1>
        <div className='flex flex-col items-center justify-center h-full w-full'>
          <h1 className='w-90 text-center text-3xl font-bold text-[#fff]'>{quoteData.quote}</h1>
        </div>
      </div>
    </div>
  )
}

export default Quotes