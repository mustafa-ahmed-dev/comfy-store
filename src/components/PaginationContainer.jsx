import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const { pageCount, page } = meta.pagination;

  if (pageCount < 2) return null;

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

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

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={handlePreviousPageChange}
        >
          Previous
        </button>

        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              className={`btn btn-xs sm:btn-md join-item border-none ${
                pageNumber === page ? "bg-base-300 border-base-300" : ""
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}

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

export default PaginationContainer;
