import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from "next/image";
import styles from '../../styles/Home.module.css'
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import {Icon} from "@mui/material";
import {Download} from "@mui/icons-material";
export default function ListVideo({data,...prop}:any) {
    const status = data.status || 0;
    const list = typeof data.data !== "undefined" && typeof data.data.list !== "undefined" ? data.data.list : []
    console.log(data)
    return (
        <>
            {status===0 && (
                <></>
            )}
            {status===200 && data.data.list.length > 0 && (
                <Grid container spacing={2} className={styles['list-video']}>
                    {
                        list.map((item:any,index:number)=>{
                            return (
                                <Grid className={styles['']} container item key={index} spacing={1} xs={12} lg={3}>
                                        <Image src={item.image.url} alt={item.channel_title} loading="lazy" width={480} height={360}/>
                                        <p>{item.title}</p>
                                    <Link href={'/'+item.video_id} color="inherit">
                                        <Download/> <span>Tải về</span>
                                    </Link>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            )}
        </>
    )
}