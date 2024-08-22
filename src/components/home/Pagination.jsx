import { useState } from "react";
import propTypes from 'prop-types';

const Pagination = ({ totalPages }) => {
    const [currentPage, setCurrentPage] = useState (1);

    const previousPage = () => {
        if (currentPage > 1 ) {
            setCurrentPage(currentPage - 1)
        }
    };
    
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    };

    return (
        <div className="flex items-center justify-center gap-4">
            <button 
            onClick={previousPage}
            className="h-[40px] w-[60px] pb-8 items-center rounded-full bg-blue text-white text-3xl"
            disabled= {currentPage ===1}>
                ⪡
            </button>
            <span className="font-jaldi text-blue font-bold text-[25px]">
                {currentPage}
            </span>
            <button 
            onClick={nextPage}
            className="h-[40px] w-[60px] pb-8 items-center rounded-full bg-blue text-white text-3xl"
>
                ⪢
            </button>
        </div>
    )
};

Pagination.PropTypes = {
    totalPages: propTypes.number.isRequired
}

export default Pagination