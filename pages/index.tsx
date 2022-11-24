import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import Header from "./inc/Header";
import Container from "@mui/material/Container";
import {Link, TextField} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import {Search} from '@mui/icons-material';
import {color} from "@mui/system";

const placeHolderInputSearch = 'Tìm kiếm hoặc nhập link YouTube...';
const labelInputSearch = 'Youtube Link'

export default function Home() {
    const [loading, setLoading] = useState(false)
    const [labelInput,setLabelInput] = useState(placeHolderInputSearch)
    const [valueSearch,setValueSearch] = useState('')
    const _handlerClickSearch = () => {
        setLoading(true)
        setTimeout(function () {
            setLoading(false)
        }, 3000)
    }

    const _handlerInputFocus= ()=>{
        setLabelInput(labelInputSearch)
    }
    const _handlerInputBlur= ()=>{
        if(valueSearch.length===0){
            setLabelInput(placeHolderInputSearch)
        }
    }

    const _handlerKeyUpInput = (e:any)=>{
        setValueSearch(e.target.value.trim())
    }

    return (
        <div className={styles.mainBg}>
            <Head>
                <title>Download youtube</title>
            </Head>
            <main>
                <Header/>
                <Container>
                    <div className={styles.searchCentered + ` ${styles.boxWhite}`}>
                        <h1>Tải video YouTube</h1>
                        <p>Tải video YouTube về máy dưới định dạng MP3, MP4, 3GP,...</p>
                        <div className={styles.dFlex}>
                            <TextField
                                onFocus={_handlerInputFocus} onBlur={_handlerInputBlur} fullWidth label={labelInput} placeholder="Tìm kiếm hoặc nhập link YouTube..." id="fullWidth"
                                onKeyUp={_handlerKeyUpInput}
                            />
                            <LoadingButton
                                onClick={_handlerClickSearch}
                                endIcon={<Search/>}
                                loading={loading}
                                loadingPosition="end"
                                variant="contained"
                                color="error"
                                sx={
                                    {
                                        my: 0,
                                        textTransform:'none'
                                    }
                                }
                            >
                                Search
                            </LoadingButton>
                        </div>
                        <p>Sử dụng dịch vụ này là bạn đang đồng ý với <Link key={0} href="#!">điều khoản sử dụng</Link>.</p>
                    </div>
                    <div className={styles.alignCenter}>
                        <h1>Tải video từ YouTube về máy tính online miễn phí</h1>
                        <p>Y2mate cho phép bạn chuyển đổi video từ YouTube, Facebook, Vimeo, Dailymotion, Youku…sang các định dạng Mp4, Mp3. Chúng tôi hỗ trợ tải về tất cả các định dạng như: Mp4, Mp3, 3GP, WMV, FLV, MO, MP3, WEBM. Bạn có thể tải về hàng nghìn video từ YouTube và các website khác.</p>
                    </div>
                </Container>
            </main>
        </div>
    )
}