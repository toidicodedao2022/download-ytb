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

    async suggestGoogle(keyword: string) {
        var config = {
            method: 'get',
            url: '/api/suggest-ytb?q=' + keyword,
            headers: {}
        };
        return new Promise((resolve: any) => {
            axios(config)
                .then(function (response: any) {
                    return resolve(response.data.data.result)
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    }

    async listVideo(keyword: string) {
        var config = {
            method: 'get',
            url: '/api/list-video?q=' + keyword,
            headers: {}
        };

        return new Promise((resolve: any) => {
            axios(config)
                .then(function (response: any) {
                    return resolve(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    }
    async isVideoYoutube(keyword:string):Promise<boolean>{
        var config = {
            method: 'get',
            url: '/api/check-video-youtube?video-id=' + keyword,
            headers: {}
        };

        return new Promise((resolve: any) => {
            axios(config)
                .then(function (response: any) {
                    return resolve(response.status===200)
                })
                .catch(function (error) {
                    console.log(error)
                    console.log(false);
                });
        })
    }
}

export default Request