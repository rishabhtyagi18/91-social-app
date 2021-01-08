
import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
    return (
        <div className="pagination">
            {
                props.pageNumbers.map(item => {
                    return (
                        <div
                            key={item}
                            id={item}
                            className={props.currentPage === item ? 'active-page page-number' : 'inactive page-number'}
                            onClick={(event) => props.updateCurrentPage(event.target.id)}>
                            {item}
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Pagination;
