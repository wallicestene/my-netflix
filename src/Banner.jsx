import React, { useEffect, useState } from 'react'
import "./Banner.css"
import instance from './Fetch'
import request from './Request'
const Banner = () => {
    const [movie, setMovie] = useState([])
    useEffect(() => {
     const fetchData = () => {
        const requests = fetch(`${instance.baseURL}${request.fetchNetflixOriginals}`)
            .then(response => response.json())
            .then(data => {
                setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)])
                console.log(data.results[Math.floor(Math.random() * data.results.length - 1)])
            })
            .catch(err => console.log(err.message))
            return requests
        }
        fetchData()
    },[])

    const truncate = (string, n)=>{
        return string?.length > n ? string.substr(0, n - 1) + "..." : string
    }
  return (
    <header className='banner' style={{
        backgroundImage: `linear-gradient(270deg, #111 5.5%, rgba(18, 18, 18, 0) 50%), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        
        backgroundSize: "cover",
        backgroundPosition: "center center"
    }}
    
    >
        <div className="banner-contents">
            <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner_buttons">
                <button className='banner-button'>Play</button>
                <button className='banner-button'>My List</button>
            </div>
            <h1 className="banner-description">{ truncate (movie?.overview, 350)}</h1>
            
        </div>
        <div className="banner-fadeButton"/>
        </header>
  )
}

export default Banner