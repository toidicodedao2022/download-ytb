import {number} from "prop-types";

export const Api = {
    search:'https://jsonplaceholder.typicode.com/todos/1',
    google_suggest:'http://dev-tool.xyz/api/search-ytb?t=1'
}
export declare interface ResponseApi {
    status:number,
    content:string,
    data:any
}