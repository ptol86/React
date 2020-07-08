import React from 'react';

// 1. write render
// 2. isPrevAval
// 3. isNextAval
// 4. combine it

const Pagination = ({goPrev, goNext, currentPage, totalItems, itemsPerPage}) => {
    
    const isPrevPageAvaliable = currentPage > 1;
    const isNextPageAvaliable = totalItems - itemsPerPage * currentPage > 0;
  
    return (
        <div className="pagination">
            <button className="btn" 
                disabled={!isPrevPageAvaliable}
                onClick={goPrev}>
                {isPrevPageAvaliable && "←"}
            </button>
            <span className="pagination__page">{currentPage}</span>
            <button className="btn" 
                disabled={!isNextPageAvaliable}
                onClick={goNext}>
                {isNextPageAvaliable && "→"}
            </button>
        </div>
    )
}
    
        


export default Pagination;