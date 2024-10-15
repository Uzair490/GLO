
import left from '../assets/left.svg'
import PropTypes from "prop-types";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const generatePageNumbers = () => {
    let pages = [];
    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, "..."];
      } else if (currentPage >= totalPages - 2) {
        pages = ["...", totalPages - 3, totalPages - 2, totalPages - 1];
      } else {
        pages = ["...", currentPage - 1, currentPage, currentPage + 1, "..."];
      }
    }
    return pages.filter((page, index, self) => self.indexOf(page) === index);
  };

  return (
    <div className='flex w-full justify-between mt-5 '>
        <div className='text-[#667085] text-[16px] font-normal ml-4'>Showing 1-6 from 100</div>
    <section className="flex gap-2 mr-10">
       
      <button
        onClick={handlePrevious}
        className="h-8 w-8 flex items-center justify-center pr-[2px] bg-[#F4ECFB] rounded-lg"
        disabled={currentPage === 1}
      >
          <img src={left} alt="Arrow Right" />
      </button>
      {generatePageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && onPageChange(page)}
          className={`h-8 w-8 flex items-center justify-center ${
            page === currentPage ? "bg-[#9854FF]" : "bg-[#F4ECFB]"
          } ${
            page === currentPage ? "text-[#FFFFFF]" : "text-[#883DCF]"
          } rounded-lg`}
          disabled={typeof page !== "number"}
        >
          {page}
        </button>
      ))}
      <button
        onClick={handleNext}
        className="h-8 w-8 flex items-center justify-center pl-[2px] bg-[#F4ECFB] rounded-lg"
        disabled={currentPage === totalPages}
      >
        <img src={left} alt="Arrow Right" />
      </button>
    </section>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;