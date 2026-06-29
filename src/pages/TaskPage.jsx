import React, { useEffect, useState } from 'react'

const TaskPage = () => {
    const [input, setInput] = useState("")
    const [allInput, setAllInput] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        if (input.trim() !== "") { setAllInput([...allInput, input]) }
       const updatedTask = [...allInput, input]
       localStorage.setItem("task",JSON.stringify(updatedTask))

        setInput('')
    }
    useEffect(()=>{
        const data = localStorage.getItem("task")

        if(data){
            setAllInput(JSON.parse(data))
        }
    }, [])
    return (
        <div>
            <form onSubmit={submitHandler} className='flex items-center gap-5 '>

                <input value={input} onChange={(e) => {
                    setInput(e.target.value)
                }} className='p-3 text-2xl w-1/2 border rounded-2xl' type="text" placeholder='Enter Your Task' />
                <button className='p-3 text-2xl w-1/2 bg-green-300 rounded-2xl' type="submit">Add Task</button>
            </form>

            {allInput.map((elem, idx) => {
                return <div key={idx} className='w-full bg-gray-400 rounded-2xl text-3xl mt-3 p-3 flex items-center justify-between'>
                    <h1>{elem}</h1>
                    <button onClick={() => {
                        const ans = allInput.filter((e, i) => {
                            return i !== idx
                        })
                        setAllInput(ans)

                        localStorage.setItem("task",JSON.stringify(ans))
                    }} className='bg-red-300 rounded-xl px-2 text-lg'>Delete</button>
                </div>
            })}
        </div>
    )
}

export default TaskPage