import React from 'react'
import { Link } from 'react-router-dom'
import './DogList.css'

const DogList = ({ dogs }) => {
  return (
    <div className="DogList">
      <div className="row mt-4">
        <div className="col">
          <h1 className="text-center">HI! WE HAVE LOTS DOGGOZ. CLICK THE DOGGO FOR INFOZ!</h1>
        </div>
      </div>
      <div className="row">
        {dogs.map(dog => (
          <div className="col-3 text-center" key={dog.name}>
            <img src={dog.src} alt={dog.name} />
            <h3 className="mt-3">
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DogList
