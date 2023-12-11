import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  HeadingComponent  from './components/HeadingComponent'
import PrimaryButtonComponent from './components/PrimaryButton'
import SecondaryButtonComponent from './components/SecondaryButton'

function App() {
  return (
    <>
      <HeadingComponent text={"Best Fast Food Place In Town!"}/>
      <PrimaryButtonComponent text={"Order now"}/>
      <SecondaryButtonComponent text={"Order Delivery"}/>
    </>
  )
}

export default App
