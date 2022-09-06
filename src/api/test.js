import request from '@/utils/request'


export function mytest(){
    return request({
        url:'/instructor/getById/1',
        method:'get',
    })
}