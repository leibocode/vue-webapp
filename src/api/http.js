import axios from 'axios'
import { Err_OK } from './config'

const urlMap = {
    development : '/',
    production:'http://ustbhuangyi.com/sell/'
}

const baseUrl = urlMap[process.env.NODE_ENV]

export function get(url,params={}){
    return new Promise((resolve,reject)=>{
        axios.get(baseUrl+url,{
            params
        }).then((res)=>{
            const {errno,data } = res.data
            if(errno===Err_OK){
                resolve(data)
            }
        }).catch(e=>{
            //请求失败 提示
        })
    })
}

export function post(url,params={}){
    
}