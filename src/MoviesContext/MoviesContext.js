import React from 'react'

const MoviesContext = React.createContext({
  watchList: [],
  addToWatchList: () => {},
})

export default MoviesContext
