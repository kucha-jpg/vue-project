import request from '@/utils/request'

export const getVillageList = (params) => {
  return request({
    url: '/villages',
    method: 'get',
    params
  })
}

export const getVillageDetail = (id) => {
  return request({
    url: `/villages/${id}`,
    method: 'get'
  })
}
