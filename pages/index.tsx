import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import Header from "./inc/Header";
import Container from "@mui/material/Container";
import {Link, Select, TextField} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import {Search} from '@mui/icons-material';
import Download from './src/download'
import Request from "../requests/request";
import {Api, ResponseApi} from "../config/Api";
import {NextApiResponse} from "next";

const placeHolderInputSearch = 'Tìm kiếm hoặc nhập link YouTube...';
const labelInputSearch = 'Youtube Link'
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import StrHelper from "../helpers/StrHelper";

export default function Home() {
    const [loading, setLoading] = useState(false)
    const [labelInput, setLabelInput] = useState(placeHolderInputSearch)
    const [valueSearch, setValueSearch] = useState('')
    const [result, setResult] = useState({})
    const [options, setOption] = useState([])
    const request = new Request();

    useEffect(() => {

    })

    const _handlerClickSearch = () => {
        request.suggestGoogle('đi về nhà').then((optionsResponse: any) => {
            console.log(optionsResponse)
            setOption(optionsResponse)
        })
        setResult({
            loading: true
        })
        setLoading(true)
        setTimeout(function () {

            setResult({
                data: {
                    id: 'bSKAzou_gXM',
                    duration: '00:08:01',
                    title: 'Highlights | BỒ ĐÀO NHA vs GHANA | Ronaldo lập kỷ lục trong trận đấu nghẹt thở | World Cup 2022',
                    tabs: [
                        {
                            'name': 'video',
                            'data': [
                                {
                                    quality: '720',
                                    size: '100M',
                                    url: '#'
                                },
                                {
                                    quality: '720',
                                    size: '100M',
                                    url: '#'
                                },
                                {
                                    quality: '480',
                                    size: '50M',
                                    url: '#'
                                }
                            ]
                        },
                        {
                            'name': 'audio',
                            'data': [
                                {
                                    quality: '128kps',
                                    size: '100M',
                                    url: '#'
                                },
                                {
                                    quality: '720',
                                    size: '100M',
                                    url: '#'
                                },
                                {
                                    quality: '92kps',
                                    size: '50M',
                                    url: '#'
                                }
                            ]
                        },
                        {
                            'name': 'MP3',
                            'data': [
                                {
                                    quality: '128kps',
                                    size: '100M',
                                    url: '#'
                                },
                                {
                                    quality: '92kps',
                                    size: '50M',
                                    url: '#'
                                }
                            ]
                        }
                    ]
                }
            })
            // request.get(Api.search).then((res:ResponseApi)=>{
            //     setResult(res)
            // })
            setLoading(false)
        }, 0)
    }

    const _handlerInputFocus = () => {
        setLabelInput(labelInputSearch)
    }
    const _handlerInputBlur = () => {
        if (valueSearch.length === 0) {
            setLabelInput(placeHolderInputSearch)
        }
    }

    const _handlerKeyUpInput = (e: any) => {
        let val = e.target.value.trim();
        setValueSearch(val)
        if(val.length===0){
            return;
        }
        if(StrHelper.isValidHttpUrl(val)){
            return;
        }
        request.suggestGoogle(val).then((res:any)=>{
            setOption(res)
        })
    }

    return (
        <div className={styles.mainBg}>
            <Head>
                <title>Download youtube</title>
            </Head>
            <main>
                <Header/>
                <Container className={styles.download}>
                    <div className={styles.searchCentered + ` ${styles.boxWhite}`}>
                        <h1>Tải video YouTube</h1>
                        <p>Tải video YouTube về máy dưới định dạng MP3, MP4, 3GP,...</p>
                        <div className={styles.dFlex}>
                            {/*<TextField*/}
                            {/*    onFocus={_handlerInputFocus} onBlur={_handlerInputBlur} fullWidth label={labelInput} placeholder={placeHolderInputSearch} id="fullWidth"*/}
                            {/*    onKeyUp={_handlerKeyUpInput}*/}
                            {/*/>*/}
                            <Autocomplete
                                className={"w-100"}
                                freeSolo
                                options={options}
                                renderInput={(params:any) => <TextField
                                    fullWidth {...params} label={labelInput}
                                    id="outlined-basic"
                                    variant="outlined"
                                    onFocus={_handlerInputFocus} onBlur={_handlerInputBlur}
                                    onKeyUp={_handlerKeyUpInput}
                                    placeholder={placeHolderInputSearch}
                                />}
                            />
                            <LoadingButton
                                onClick={_handlerClickSearch}
                                endIcon={<Search/>}
                                loading={loading}
                                loadingPosition="end"
                                variant="contained"
                                color="error"
                                className={styles['download-btn-search']}
                                sx={{my: 0, textTransform: 'none'}}
                            >
                                <strong>Search</strong>
                            </LoadingButton>
                        </div>
                        <p>Sử dụng dịch vụ này là bạn đang đồng ý với <Link key={0} href="#!">điều khoản sử dụng</Link>.</p>
                        <Download result={result}/>
                    </div>
                    <div className={styles.alignCenter}>
                        <h1>Tải video từ YouTube về máy tính online miễn phí</h1>
                        <p>Y2mate cho phép bạn chuyển đổi video từ YouTube, Facebook, Vimeo, Dailymotion, Youku…sang các định dạng Mp4, Mp3. Chúng
                            tôi hỗ trợ tải về tất cả các định dạng như: Mp4, Mp3, 3GP, WMV, FLV, MO, MP3, WEBM. Bạn có thể tải về hàng nghìn video từ
                            YouTube và các website khác.</p>
                    </div>
                </Container>
            </main>
        </div>
    )
}