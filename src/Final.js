import React from 'react'
import ContextAPI, { WordContext } from './api/ContextAPI'
import App from './App'

export default function Final() {
  return (
    <WordContext>
        <App/>
    </WordContext>
  )
}
