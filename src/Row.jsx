import React, { useEffect, useState } from 'react'
import instance from './Fetch'
import "./Row.css"

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([])

    const base_Url = "https://image.tmdb.org/t/p/original/"

    useEffect(() =>{
        const fetchData = () => {
            const requests = fetch(`${instance.baseURL}${fetchUrl}`)
                .then(response => response.json())
                .then(data => {
                    setMovies(data.results)
                })
                .catch(err => console.log(err.message))
                return requests
            }
            fetchData()
    }, [fetchUrl])
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row-posters'>
            {movies.map(movie => (
               (( isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
            <img className={`row-poster ${isLargeRow && "row-posterLarge"}`} 
            key={movie.id}
            src={`${base_Url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name} />
                )
        ))} 
        </div>
    </div>
  )
}

export default Row