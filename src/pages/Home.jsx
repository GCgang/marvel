import React, {useEffect, useState} from 'react';
import useFetchMovies from '../hooks/useFetchMovies';

export default function Home() {
  const {loading, error, movies} = useFetchMovies();  

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error}</div>
  }
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>
    </div>
  );
}