import {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";
import {Api} from "../../config/Api";
const https = require('https');
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    // const url = 'https://suggestqueries.google.com/complete/search?json=suggestCallBack&q=đi về nhà&hl=en&ds=yt&client=youtube&_=1669363147310&output=toolbar';
    // https.get(url,function (resp:any){
    //     let data = '';
    //     // A chunk of data has been recieved.
    //     resp.on('data', (chunk:any) => {
    //         data += chunk;
    //     });
    //     // The whole response has been received. Print out the result.
    //     resp.on('end', () => {
    //         console.log(JSON.parse(data));
    //     });
    // })
    // fetch(url,{
    //     headers:{
    //         'Content-Type':'text/plain; charset=UTF-8'
    //     }
    // }).then(async function (fRes){
    //     // let output = await fRes.blob();
    //     let str:any = await fRes.arrayBuffer();
    //     console.log(new TextDecoder().decode(str))
    //     // console.log(str)
    //     // console.log(decodeURIComponent(escape(str)));
    //     // console.log(output)
    // })
    // axios.get(url).then(function (res){
    //     console.log(res.data)
    // })
    // res.status(200).json([])
    axios.get(Api.google_suggest + '&q=' + req.query.q).then((response: any) => {
        res.status(200).json(response.data)
    })
}