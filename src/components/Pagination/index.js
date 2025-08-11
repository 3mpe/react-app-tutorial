import { useMemo } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const isPrevDisabled = isFirstPage ? 'disabled' : '';
  const isNextDisabled = isLastPage ? 'disabled' : '';

  const allPages = useMemo(() => pages.map(page => (
    <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
      <button className="page-link" onClick={() => onPageChange(page)}>{page}</button>
    </li>
  )), [currentPage, onPageChange, pages]);

  const prevButton = useMemo(() => (
    <li className={`page-item ${isPrevDisabled}`}>
      <button className="page-link" onClick={() => onPageChange(currentPage - 1)} disabled={isFirstPage}>Önceki</button>
    </li>
  ), [currentPage, isFirstPage, isPrevDisabled, onPageChange]);

  const nextButton = useMemo(() => (
    <li className={`page-item ${isNextDisabled}`}>
      <button className="page-link" onClick={() => onPageChange(currentPage + 1)} disabled={isLastPage}>Sonraki</button>
    </li>
  ), [currentPage, isLastPage, isNextDisabled, onPageChange]);


  if (totalPages <= 1) return null;
  return (
    <nav className="d-flex justify-content-center mt-5">
      <ul className="pagination">
        {prevButton}
        {allPages}
        {nextButton}
      </ul>
    </nav>
  );
};

export default Pagination;