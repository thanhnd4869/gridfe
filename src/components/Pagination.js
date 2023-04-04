/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */

import { memo } from 'react';

const Pagination = ({ isLastPage, currentPage, next, prev, handleActive }) => {
    console.log('Pagination is rendered.');
    const initArray = new Array(5);
    initArray.fill('*');
    const array = initArray.map((element, index) => currentPage + index - 2);
    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    {currentPage > 1 ? (
                        <li onClick={prev} className="page-item">
                            <span className="page-link">Previous</span>
                        </li>
                    ) : null}
                    {array.map((element, key) => {
                        if (element < 1 || (isLastPage && (key === 3 || key === 4))) {
                            return null;
                        }
                        return (
                            <li
                                onClick={() => handleActive(element)}
                                key={key}
                                className={currentPage === element ? 'page-item active' : 'page-item'}>
                                <span className="page-link">{element}</span>
                            </li>
                        );
                    })}
                    {!isLastPage ? (
                        <li onClick={next} className="page-item">
                            <span className="page-link">Next</span>
                        </li>
                    ) : null}
                </ul>
            </nav>
        </>
    );
};

export default memo(Pagination);
