import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import ContextAPI from '../api/ContextAPI'


export default function Result() {
  const [result, setResult] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const {
    wordData
  } = useContext(ContextAPI)

  async function words (params) {
    try{
      setLoading(true)
      const word = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${params}`)
      setResult(word.data)
      setError(null)
    }catch(err){
      setError(err)
    }finally{
      setLoading(false)
    }
  }
  
  useEffect(
    ()=>{
      if(wordData.length){
        words(wordData)
      }
    },
    [wordData]
  )

  console.log(result)

  if(loading){
    return <p className='text-white text-center m-auto text-2xl '>Please Wait a Sec...</p>
  }

  if (error){
    return <p className='text-white text-center m-auto text-2xl'>Please correct your spelling <br />or that word does not exist...-_-</p>
  }

  return (
    <div className='bg-white lg:m-0 lg:mr-3 m-3 rounded-xl backdrop-blur-sm p-10'>
      {result && (
      <div>
        <h3 className='text-4xl'>{result[0].word}</h3>

        <p>{result[0].phonetics.map((phone) => phone.text)}</p>
        <br />

        <p><b>Definition:</b> {result[0].meanings[0].definitions[0].definition}</p>
        <br />

        <p><b>Synonyms: </b> {result[0].meanings.map((mean) => mean.synonyms.map(
          (syno) => <li>{syno}</li>
        ))}</p>
        <br />

        <p><b>Antonyms: </b> {result[0].meanings.map((mean) => mean.antonyms.map(
          (syno) => <li>{syno}</li>
        ))}</p>
        <br />

        <audio src={result[0].phonetics[0].audio} controls="controls" className='w-full '></audio>
      </div>
    )}
    </div>
  )
}
