import React from 'react'
import { Link } from 'react-router-dom'
// import AttackOnTitan from '../scrollGallery/AttackOnTitan'

const CharGallery = () => {
  return (
    <div>
      {/* <AttackOnTitan /> */}
      <Link to={"/about"}>About</Link>
    </div>
  )
}

export default CharGallery