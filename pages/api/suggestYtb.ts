import {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";
import {Api} from "../../config/Api";
const https = require('https');
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    axios.get(Api.google_suggest + '&q=' + encodeURIComponent(req.query.q as string)).then((response: any) => {
        res.status(200).json(response.data)
    }).catch((error:any)=>{
        console.log(error)
        res.status(500).json({
            status:500,
            content:'',
            data:{}
        })
    })
}
