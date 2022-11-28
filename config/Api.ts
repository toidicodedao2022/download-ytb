import {number} from "prop-types";

export const Api = {
    google_suggest:'http://dev-tool.xyz/api/search-ytb?t=1',
    search_list:'http://dev-tool.xyz/api/search-list-video'
}
export declare interface ResponseApi {
    status:number,
    content:string,
    data:any
}