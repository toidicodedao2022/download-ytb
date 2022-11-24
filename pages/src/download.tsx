import Head from "next/head";
import {useEffect, useState} from "react";
import Header from "../inc/Header";
import Link from "next/link";

export default function Download(){

    const [count, setCount] = useState(0);
    const _handlerClick=()=>{
        setCount(count+1);
    }

    useEffect(()=>{
        console.log(count);
    },[count])


    return (
        <div>
            <Head>
                <title>Download file {count}</title>
            </Head>
            <main>
                <section>
                    <h1>Tải Video, Tải nhạc MP3 từ YouTube về máy</h1>
                    <span>Chuyển đổi và tải về video YouTube dưới các định dạng MP3, MP4, WAV, WEBM, ...
                    <Header/>
                    </span>
                    <div>
                        <input type={"text"} placeholder={"Tìm kiếm hoặc nhap link "}/>
                        <button onClick={_handlerClick}>Start</button>
                    </div>
                    <Link href="/ladipage">vaf abc xyz</Link>
                </section>
            </main>
        </div>
    )
}
