import {useEffect, useState} from "react";
import Image from "next/image";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Table, TableBody} from "@mui/material";
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
export default function Download({result, ...prop}: any) {
    const [tab, setTab] = useState(0)
    const data = typeof result.data !== "undefined" ? result.data : {};
    const changeTab = (event: any, newValue: number) => {
        setTab(newValue)
    }

    function TabPanel() {
        return (
            <Table sx={{width:'100%'}} stickyHeader={true}>
                <TableHead>
                    <TableRow>
                        <TableCell>Resolution</TableCell>
                        <TableCell>FileSize</TableCell>
                        <TableCell>Download</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {(data.tabs[tab].data).map((info:any,index:number)=>{
                    return(
                        <TableRow key={`${tab}_${index}`}>
                            <TableCell>{info.quality}</TableCell>
                            <TableCell>{info.size}</TableCell>
                            <TableCell><Button variant="contained" color="success" startIcon={<DownloadForOfflineIcon />}>
                                Download
                            </Button></TableCell>
                        </TableRow>
                    )
                })}
                </TableBody>
            </Table>
        );
    }

    return (
        <>
            {Object.keys(data).length > 0 && (
                <Grid container spacing={2} className="align-left">
                    <Grid item sx={{mx: 'auto'}} xs={12} lg={4}>
                        <Image alt={`${process.env.NEXT_PUBLIC_APP_NAME} | ${data.title}`}
                            src={`https://i.ytimg.com/vi/${data.id}/0.jpg`}
                            width={500}
                            height={300}
                            className={"img-w-100"}
                        />
                        <h3>{data.title}</h3>
                        <p>Duration: {data.duration}</p>
                    </Grid>
                    <Grid item xs={12} lg={8} container sx={{bgcolor: 'white'}}>
                        <Box sx={{width:'100%'}}>
                            <Box mb={1}>
                                <Tabs
                                    value={tab}
                                    onChange={changeTab}
                                    variant="fullWidth"
                                >
                                    {data.tabs.map(function (item: any) {
                                        return (
                                            <Tab key={item.name} label={item.name}/>
                                        )
                                    })}
                                </Tabs>
                            </Box>
                            <TabPanel/>
                        </Box>
                    </Grid>
                </Grid>
                // <div>
                //     <div>
                //         <Image src={`https://i.ytimg.com/vi/${data.id}/0.jpg`} alt={data.title} width={100} height={100}/>
                //         <h2>{data.title}</h2>
                //     </div>
                //     <div>
                //
                //     </div>
                // </div>
            )}
        </>
    )
}
