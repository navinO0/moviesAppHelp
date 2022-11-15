import React from 'react'

const MoviesContext = React.createContext({
  watchList: [],
  addToWatchList: () => {},
  getPopularContext: () => {},
  popularHomeList: [],
})

export default MoviesContext
