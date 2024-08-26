'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css';

interface PaginationProps {
  onPageChange: ({ selected }: { selected: number }) => void;
  total: number;
  take: number;
  page: number;
}

const Pagination: FC<PaginationProps> = ({
  take,
  total,
  page,
  onPageChange,
}) => {
  return (
    <ReactPaginate
      breakLabel={<span>...</span>}
      nextLabel={<ChevronRight />}
      previousLabel={<ChevronLeft />}
      pageCount={Math.ceil(total / take)}
      renderOnZeroPageCount={null}
      breakClassName={styles.pageItem}
      containerClassName={styles.pagination}
      pageClassName={styles.pageItem}
      previousClassName={styles.pageItem}
      nextClassName={styles.pageItem}
      activeClassName={styles.activePage}
      pageLinkClassName={styles.pageLink}
      previousLinkClassName={styles.pageItem}
      nextLinkClassName={styles.pageItem}
      activeLinkClassName={styles.activePage}
      onPageChange={onPageChange}
      forcePage={Number(page) - 1}
    />
  );
};

export default Pagination;
