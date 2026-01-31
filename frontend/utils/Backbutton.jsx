import React from 'react'
import {Link} from 'react-router-dom'

function Backbutton({destination = "/"}) {
  return (
    <>
    <Link to={destination}><button className='text-2xl p-3.5'>⬅️</button></Link>
    </>
  )
}

export default Backbutton