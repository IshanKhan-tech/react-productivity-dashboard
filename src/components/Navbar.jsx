
const Navbar = () => {
  return (
    <div className='w-full py-4 px-6 bg-amber-200 rounded-2xl  flex items-center justify-between'>
        <div className=" h-full font-bold underline text-2xl ">
          <h1 className=''>Dashboard.Dev</h1>
        </div>
        <div className=" h-full text-xl ">
           <ul className="flex gap-8 ">
    <li className="cursor-pointer hover:text-red-500 transition-colors duration-300">Home</li>
    <li className="cursor-pointer hover:text-red-500 transition-colors duration-300">Notes</li>
    <li className="cursor-pointer hover:text-red-500 transition-colors duration-300">Task</li>
    <li className="cursor-pointer hover:text-red-500 transition-colors duration-300">Motivational Quotes</li>
  </ul>

        </div>
    </div>
  )
}

export default Navbar
