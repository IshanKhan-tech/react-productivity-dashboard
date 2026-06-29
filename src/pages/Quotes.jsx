import React, { useEffect, useState } from 'react'
import QuotesApi from '../services/QuotesApi'
import { FaRegCopy } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";

const Quotes = () => {


  const [quoteData, setQuoteData] = useState({})
  const getQuote = () => {
    
    const getData = async () => {
      const data = await QuotesApi()
      setQuoteData(data)
    }
    getData()
  }
  useEffect(() => {
      getQuote()
    }, [])
  
  // console.log(quoteData.quote);

  return (
    <div className='flex b w-full h-200  items-center justify-center flex flex-col gap-3'>
      <div className='h-90 w-130 bg-linear-65 from-purple-300 to-pink-300 rounded-2xl p-3 flex flex-col '>
        <h1 className='text-xl rounded-t-xl font-semibold text-[#fff] bg-linear-65 from-purple-400 to-pink-400 p-3'>#Quotes of the day</h1>
        <div className='flex flex-col items-center justify-center h-full w-full'>
          <h1 className='w-90 text-center text-3xl font-bold text-[#fff]'>{quoteData.quote}</h1>
        </div>

      </div>
      <div className='flex items-center justify-end w-130  gap-5'>
        <button onClick={() => {
          console.log(quoteData.quote);
          navigator.clipboard.writeText(quoteData.quote)
          
        }} className='text-xl bg-gray-300 p-2 rounded-full active:scale-90 cursor-pointer'>
          <FaRegCopy />
        </button>
        <button onClick={() => {
          getQuote()
        }} className='text-xl bg-gray-300 p-2 rounded-full active:scale-90 cursor-pointer'>
          <IoMdRefresh />
        </button>
      </div>
    </div>
  )
}

export default Quotes