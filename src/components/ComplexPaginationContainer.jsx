import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const { pageCount, page } = meta.pagination;

  if (pageCount < 2) return null;

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);

    const url = `${pathname}?${searchParams}`;

    navigate(url);
  };

  const handlePreviousPageChange = () => {
    let previousPage = page - 1;

    if (previousPage < 1) previousPage = pageCount;

    handlePageChange(previousPage);
  };

  const handleNextPageChange = () => {
    let nextPage = page + 1;

    if (nextPage > pageCount) nextPage = 1;

    handlePageChange(nextPage);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        className={`btn btn-xs sm:btn-md join-item border-none ${
          activeClass ? "bg-base-300 border-base-300" : ""
        }`}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];

    // first button
    pageButtons.push(
      addPageButton({
        pageNumber: 1,
        activeClass: page === 1,
      })
    );

    // dots
    if (page > 2) {
      pageButtons.push(
        <button
          className="join-item btn btn-xs sm:btn-md"
          key="dots-1"
          type="button"
        >
          ...
        </button>
      );
    }

    // other
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(
        addPageButton({
          pageNumber: page,
          activeClass: true,
        })
      );
    }

    // dots
    if (page < pageCount - 1) {
      pageButtons.push(
        <button
          className="join-item btn btn-xs sm:btn-md"
          key="dots-2"
          type="button"
        >
          ...
        </button>
      );
    }

    // last button
    pageButtons.push(
      addPageButton({
        pageNumber: pageCount,
        activeClass: page === pageCount,
      })
    );

    return pageButtons;
  };

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={handlePreviousPageChange}
        >
          Previous
        </button>

        {renderPageButtons()}

        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={handleNextPageChange}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ComplexPaginationContainer;
