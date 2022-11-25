import {NextApiRequest, NextApiResponse} from "next";

type Response = {
    status:number,
    content:string,
    data:object
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
){

}