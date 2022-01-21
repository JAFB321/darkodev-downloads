import { GetStaticPaths, GetStaticProps } from 'next';

import Layout from '../../components/common/Layout';
import { DownloadCard } from '../../components/downloads/DownloadCard';

import DownloadPost from '../../types/DownloadPost'
import {getAll} from '../../api/DownloadPost/endpoint';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true
    };
}

export const getStaticProps: GetStaticProps = async (context) => {

    const downloadPosts = await getAll();

    return {
        props: {
            id: '10',
            downloadPosts: downloadPosts || null
        }
    };
}


interface DownloadPageProps {
    id: string,
    downloadPosts: DownloadPost[] | null
}

const DownloadPage = ({id, downloadPosts}: DownloadPageProps) => {  

    return (
        <Layout>
            <p className='text-white'>{id}</p>

            {downloadPosts?.map((post) => 
                    <DownloadCard downloadPost={post} key={id} />
                )
            }

        </Layout>
    )
}

export default DownloadPage;