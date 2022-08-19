import { usePagination, DOTS } from '../../../hooks/usePagination';
import classes from './index.module.scss';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  onPageChange: any;
  totalCount?: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
};

const Pagination = ({
  onPageChange,
  totalCount = 0,
  siblingCount = 1,
  currentPage = 1,
  pageSize = 20
}: Props) => {
  // Pagination Range Numbers
  const paginationRange: Array<string> | any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  //Constants Shorthand
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === paginationRange[paginationRange.length - 1];

  // WE DID NOT NEED Pagination in this Case
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  // Handlers
  const onNext = () => {
    if (isLastPage) {
      return;
    }
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (isFirstPage) {
      return;
    }
    onPageChange(currentPage - 1);
  };

  const renderRangePaginate = paginationRange.map((pageNumber: any, index: number) => {
    if (pageNumber === DOTS) {
      return (
        <li key={uuidv4()} className="pagination-item dots">
          &#8230;
        </li>
      );
    }
    return (
      <li
        key={pageNumber}
        className={pageNumber === currentPage ? classes.selected_page : ''}
        onClick={() => onPageChange(pageNumber)}>
        {pageNumber}
      </li>
    );
  });

  return (
    <ul className={classes.root}>
      <li className={isFirstPage ? classes.disabled : ''} onClick={onPrevious}>
        {`<`}
      </li>
      {renderRangePaginate}
      <li className={isLastPage ? classes.disabled : ''} onClick={onNext}>
        {`>`}
      </li>
    </ul>
  );
};

export default Pagination;
