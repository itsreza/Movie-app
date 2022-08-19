export interface InterfaceFilter {
    year?: number;
    'vote_average.gte'?: number;
    'vote_average.lte'?: number;
  }


  export interface InterfacePagination {
    currentPage?: number;
    totalPage?: number;
    totalCount?: number;
  }

 export interface InterfaceMovie {
    poster_path: string;
    title: string;
    release_date: string;
    vote_count: number;
    vote_average: number;
  id?:number
  }