import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { useContext } from 'react';
import ContextAPI from '../api/ContextAPI';

export default function SearchBar() {
  
  const {wordData, setWordData} = useContext(ContextAPI)
  const [input, setInput] = useState("")

  const handleInput = (event) => {
    event.preventDefault()
    setWordData(input)
    console.log(wordData)
    setInput("")
  }
  const handleChange = (e) =>{
    setInput(e.target.value)
    console.log(input)
  }
  

  return (
    <div className='flex items-center lg:p-0 p-5 justify-center flex-col bg-white backdrop-blur-sm rounded-xl z-0 mx-3'>
        <form className="flex items-center">
            <input onChange={handleChange} value={input} type="text" className='focus:outline-none border-2 border-black w-80 h-16 rounded-xl lg:w-96 text-2xl pl-14 bg-white/50 backdrop-blur-sm' placeholder='Browse' />
            <Icon icon="system-uicons:search" className='mr-5 ml-2 absolute' width="40" height="40"/>
            <button onClick={handleInput} className='text-2xl border-black ml-3 lg:static hidden border-2 p-3.5 active:scale-95 duration-100 hover:text-violet-800 rounded-xl bg-white/50 backdrop-blur-sm'>Submit</button>
        </form> 
    </div>
  )
}
