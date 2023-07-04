import React, {useContext} from 'react'
import ContextAPI from '../api/ContextAPI'

export default function Navigation() {

  const className = "lg:text-md mr-5 duration-75 rounded-xl hover:text-violet-800"

  return (
    <div className='bg-white backdrop-blur-sm p-5 bg-white flex flex-col content-center justify-center items-center top-0 m-3 rounded-xl z-10' id='Navigation'>
      <button className={`${className} lg:ml-10 text-xl text-center`}>Smart Diction</button>
      <p>Seacrh definition, synonym, antonym and prounciation of a word!</p>
    </div>
  )
}
