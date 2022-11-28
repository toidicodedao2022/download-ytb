// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    axios.get(`https://i.ytimg.com/vi/${req.query['video-id']}/0.jpg`).then((response:any)=>{
        res.status(200).json({})
    }).catch((error:any)=>{
        res.status(404).json({})
    })

}
