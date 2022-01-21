import axios from "axios";
import {API_URL} from "../config";
import DownloadPost from '../../types/DownloadPost'

const endpoint = "/download-post";

export const getAll = async (): Promise<DownloadPost[] | void>  => {
    try {
        const {data: resData} = await axios.get(`${API_URL}/api/download-posts`);
        if(resData === undefined) return;
        
        const {data, meta} = resData;
        if(data === undefined) return;

        const downloadPosts: DownloadPost[] = data;
        return downloadPosts;
    } catch (error) {}
}