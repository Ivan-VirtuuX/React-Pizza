import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    pageRangeDisplayed={8}
    onPageChange={(event) => onChangePage(event.selected + 1)}
    pageCount={3}
    forcePage={currentPage - 1}
    previousLabel="<"
  />
);
