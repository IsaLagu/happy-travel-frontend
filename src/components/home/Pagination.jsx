import { useState } from "react";

const Pagination = ({ totalPages }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    };

    return (
        <div className="bg-white flex justify-center w-full mt-5">
            <div className="sticky bottom-0 flex items-center justify-center gap-4 mt-4 mb-10">
                <button
                    onClick={previousPage}
                    className="h-[40px] w-[60px] pb-8 items-center rounded-full bg-blue text-white text-3xl"
                    disabled={currentPage === 1}>
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
        </div>

    )
};


export default Pagination