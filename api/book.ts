import request from '@/utils/request';

const prefix = '/book';

export function getBooks(page: number, limit: number, filter: object, sort: string, name: string) {
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

export function getBookDetail(id:string) {
  return request.get(`${prefix}/${id}`)
}
