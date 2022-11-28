// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";
import {Api} from "../../config/Api";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    console.log(req.query.q)
    axios.get(Api.search_list+'?q='+req.query.q).then(function (response:any){
        console.log(response.data)
        res.status(200).json(response.data)
    })
}
