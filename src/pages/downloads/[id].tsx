import React from 'react'
import { useRouter } from 'next/router'
import { DownloadCard } from '../../components/downloads/DownloadCard';
import Layout from '../../components/common/Layout';

const DownloadPage = () => {

    const router = useRouter();

    const {id} = router.query;
    
    const data = {
		title: 'Descargar Filmora X',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quasi voluptates laudantium accusamus temporibus aliquam rem dolore earum similique, vero facere delectus cumque consequuntur at ad eligendi! Quis, sint velit!',
		url: 'https://www.google.com'
	}

	const {content, title, url} = data;

    return (
        <Layout>
            <DownloadCard url={url} content={content} title={title} />            
        </Layout>
    )
}

export default DownloadPage;