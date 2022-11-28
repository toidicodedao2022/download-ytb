import axios from "axios";
import useSWR from 'swr'
import {Api, ResponseApi} from "../config/Api";
import {string} from "prop-types";
const utf8 = require('utf8');
class Request {
    async get(url: string, params: any = {}): Promise<ResponseApi> {
        let result: ResponseApi
        return new Promise((resolve: any) => {
            axios.get(url, {
                params: params
            }).then(function (res) {
                resolve(res.data as ResponseApi)
            })
        })
    }

    async suggestGoogle(keyword:string){
        var config = {
            method: 'get',
            url: '/api/suggestYtb?q='+keyword,
            headers: { }
        };
        // return []
        // return [12,12,34,12,12,34,12,12,34,12,12,34,12,12,34,12,12,34,12,12,34,12,12,34]

        return new Promise((resolve:any)=>{
            axios(config)
                .then(function (response:any) {
                        return resolve(response.data.data.result || [])
                    })
                .catch(function (error) {
                    console.log(error);
                    return resolve([])
                });
        })

    }
}

export default Request
