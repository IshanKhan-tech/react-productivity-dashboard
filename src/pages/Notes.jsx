import React, { useEffect, useState } from 'react'

// localStorage.clear()
const Notes = () => {
  const [input, setInput] = useState('')
  const [allInput, setAllInput] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()
    if (input.trim() !== "") {

      setAllInput([...allInput, input])
    }
    const updatedNotes = [...allInput, input]

    setAllInput(updatedNotes)

    localStorage.setItem(
      "notes",
      JSON.stringify(updatedNotes)
    )
    setInput("")
  }
  useEffect(() => {
    const data = localStorage.getItem("notes")

    if (data) {
      setAllInput(JSON.parse(data))
    }
  }, [])
  return (

    <div className=''>
      <h3 className='opacity-45'>{allInput.length ? "Total Notes: " + allInput.length : "No Notes Available"}</h3>
      <form onSubmit={submitHandler} className='flex items-center justify-between gap-5'>
        <input onChange={(e) => {
          setInput(e.target.value)

        }} value={input} className='p-3 text-2xl w-1/2 border rounded-lg' type="text" placeholder='Add Note' />
        <button className='p-3 cursor-pointer text-2xl w-1/2 border bg-green-300 rounded-lg' type="submit">Add Your Notes</button>
      </form>
      {allInput.map((elem, idx) => {
        return <div key={idx} className='text-3xl p-4 bg-amber-100 mt-6 flex items-center justify-between'>
          <h1>{elem}</h1>
          <h5 onClick={() => {
            const inp = allInput.filter((el, index) => {
              return idx !== index
            })

            setAllInput(inp)
            localStorage.setItem(
              "notes",
              JSON.stringify(inp)
            )
          }} className='py-1 px-2.5 bg-red-400 rounded-full'>X</h5>
        </div>
      })}
    </div>
  )
}

export default Notes