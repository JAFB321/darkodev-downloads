import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next';

import Layout from '../../components/common/Layout';
import { DownloadCard } from '../../components/downloads/DownloadCard';


export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true
    };
}

export const getStaticProps: GetStaticProps = async (context) => {

    console.log(context.params);
    

    return {
        props: {
            id: '10'
        }
    };
}


interface DownloadPageProps {
    id: string
}

const DownloadPage = ({id}: DownloadPageProps) => {
  
    const data = {
		title: 'Descargar Filmora X',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quasi voluptates laudantium accusamus temporibus aliquam rem dolore earum similique, vero facere delectus cumque consequuntur at ad eligendi! Quis, sint velit!',
		url: 'https://www.google.com'
	}

	const {content, title, url} = data;


    return (
        <Layout>
            <p className='text-white'>{id}</p>
            <DownloadCard url={url} content={content} title={title} />
        </Layout>
    )
}

export default DownloadPage;