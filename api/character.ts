import request from '@/utils/request';

const prefix = '/character';

export function getCharacters(page: number, limit: number, filter: object, sort: string, name: string) {
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

export function getCharacterDetail(id:string) {
  return request.get(`${prefix}/${id}`)
}
