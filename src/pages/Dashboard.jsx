import FeactureCard from '../components/FeatureCard'
import WeatherHero from '../components/WeatherHero';



const cardData = [
    {
        route:"/notes",
        name: 'Notes',
        img: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        route:"/task",
        name: 'Task',
        img: "https://images.unsplash.com/photo-1506784881475-0e408bbca849?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        route:"/quotes",
        name: 'Motivational Quotes',
        img: "https://plus.unsplash.com/premium_photo-1669348192967-96e1f7f8d94e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        route:"/timer",
        name: 'Pomodaro Timer',
        img: "https://plus.unsplash.com/premium_photo-1723618998089-b0b77e3daac4?q=80&w=1105&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

]



const Dashboard = () => {
   
    

// console.log(weatherData?.current?.condition?.icon);



    return (
        <div className='flex flex-col gap-6 w-full '>
            <WeatherHero/>

            <div className='flex flex-wrap justify-center gap-4'>
                {cardData.map((e, idx) => {

                    return <FeactureCard key={idx} data={e} />
                })}

            </div>


        </div>
    )
}

export default Dashboard