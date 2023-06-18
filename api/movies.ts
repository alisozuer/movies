import request from '@/utils/request';

const prefix = '/movie';

export function getMovies(page: number, limit: number, filter: object, sort: string, name: string) {
  return request.get(`${prefix}`, {
    params: {
      page,
      limit,
      filter,
      sort,
      name,
    },
  });
}

export function getMovieDetail(id:string) {
  return request.get(`${prefix}/${id}`)
}
