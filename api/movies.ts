import request from '@/utils/request';

const prefix = '/movie';

export function getMovies() {
  return request.get(`${prefix}`);
}

export function getMovieDetail(id:string) {
  return request.get(`${prefix}/${id}`)
}
