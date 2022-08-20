import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../components/widgets/Card';
import Filter from '../../components/widgets/Filter';
import Loading from '../../components/widgets/Loading';
import Pagination from '../../components/widgets/Pagination/index';
import ErrorMessage from '../../components/UI/ErrorMessage';
import { getRequestMethod } from '../../services/http';
import { getSearchParams, replaceSearchParams } from '../../shared/utilities/queryParams';
import scrollToTop from '../../shared/utilities/scrollToTop';
import { InterfaceFilter, InterfacePagination, InterfaceMovie } from './interfaces';
import classes from './index.module.scss';

export default function MoviesList() {
  const [moviesList, setMoviesList] = useState([]);
  const [filters, setFilters] = useState<InterfaceFilter>({});
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagination, setPagination] = useState<InterfacePagination>({ currentPage: 1 });
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  // Constants
  const hasError = errorMessages?.length > 0;
  const currentYear = new Date().getFullYear();

  // Request Handlers
  const onSuccessGetMovies = (response: AxiosResponse): void => {
    const { page, total_pages, total_results, results } = response?.data;
    const paginateDetails = {
      currentPage: page,
      totalPage: total_pages,
      totalCount: total_results
    };
    setMoviesList(results);
    console.log('FIRED');
    setPagination(paginateDetails);
  };

  const onErrorGetMovies = (error: AxiosError | any): void => {
    setMoviesList([]);
    if (error.message === 'Network Error') {
      return setErrorMessages(['Please Check Your Internet Connection OR using Vpn']);
    }
    setErrorMessages([...error.response.data.errors, error.message]);
  };

  // Request Get Movies
  useEffect(() => {
    if (isFetching) {
      setErrorMessages([]);
      getRequestMethod(
        `&year=${getSearchParams().year || currentYear}&sort_by=popularity.desc&vote_average.gte=${
          getSearchParams()?.['vote_average.gte'] ?? 0
        }&vote_average.lte=${getSearchParams()?.['vote_average.lte'] ?? 10}&page=${
          getSearchParams().page ?? 1
        }`
      )
        .then(onSuccessGetMovies)
        .catch(onErrorGetMovies)
        .finally(() => setIsFetching(false));
    }
  }, [isFetching]);

  // Set Initial Filters
  useEffect(() => {
    setFilters(getSearchParams());
    if (!isNaN(getSearchParams().page)) {
      setCurrentPage(Number(getSearchParams().page));
    }
  }, []);

  // Render Movies List
  const renderMovies = moviesList?.map((movie: InterfaceMovie) => (
    <div key={movie.id}>
      <Card
        voteAverage={movie.vote_average}
        vote={movie.vote_count}
        date={movie.release_date}
        title={movie.title}
        image={movie?.poster_path}
      />
    </div>
  ));

  // Event Handlers
  const onFilter = () => {
    setCurrentPage(1);
    replaceSearchParams({ ...filters, page: 1 });
    setIsFetching(true);
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    replaceSearchParams({ ...filters, page });
    setIsFetching(true);
    scrollToTop();
  };

  const onBlurTextField = (e: any) => {
    const { name, value } = e?.target;
    setFilters((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className={classes.page_container}>
      <Filter onBlurTextField={onBlurTextField} onFilter={onFilter} />
      <div className={classes.content_container}>
        <div className={classes.content_section}>
          {hasError && <ErrorMessage messages={errorMessages} />}
          {isFetching ? (
            <Loading />
          ) : moviesList?.length < 1 && errorMessages?.length < 1 ? (
            <div className={classes.empty_movie}>There is Not Any Movie To Show</div>
          ) : (
            <>{renderMovies}</>
          )}
        </div>
      </div>
      <Pagination
        currentPage={currentPage ?? 1}
        totalCount={pagination.totalCount}
        pageSize={20}
        onPageChange={onPageChange}
      />
    </div>
  );
}
