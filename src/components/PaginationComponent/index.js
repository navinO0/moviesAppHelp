import {useState} from 'react'

import {MdNavigateNext, MdNavigateBefore} from 'react-icons/md'
import ReactPaginate from 'react-paginate'
import PopularMoviesCard from '../PopularMoviesCard'
import './index.css'

function Items({currentItems}) {
  return (
    <>
      <div className="popular-sub-container">
        <ul className="popular-movies-list-container">
          {currentItems.map(eachOne => (
            <PopularMoviesCard key={eachOne.id} eachOne={eachOne} />
          ))}
        </ul>
      </div>
    </>
  )
}

function PaginatedItems({itemsPerPage, videosList}) {
  const [itemOffset, setItemOffset] = useState(0)

  const endOffset = itemOffset + itemsPerPage
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`)
  const currentItems = videosList.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(videosList.length / itemsPerPage)

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % videosList.length
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`,
    // )
    setItemOffset(newOffset)
  }

  return (
    <div className="pagination-main-container">
      <Items currentItems={currentItems} />
      <div className="pagination-styles">
        <ReactPaginate
          className="pagination-container"
          activeClassName="active-page"
          breakLabel="..."
          breakClassName="break-class"
          nextLabel={
            <button type="button" className="direction-class">
              <MdNavigateNext className="arrow-icon" />
            </button>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          pageClassName="pages-class"
          previousLabel={
            <button type="button" className="direction-class">
              <MdNavigateBefore className="arrow-icon" />
            </button>
          }
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  )
}

export default PaginatedItems
