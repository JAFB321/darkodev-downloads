import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/common/Header'
import { DownloadCard } from '../components/downloads/DownloadCard';

export default function Home() {

    const logo = "Darko dev";

	const data = {
		title: 'Descargar Filmora X',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quasi voluptates laudantium accusamus temporibus aliquam rem dolore earum similique, vero facere delectus cumque consequuntur at ad eligendi! Quis, sint velit!',
		url: 'https://www.google.com'
	}

	const {content, title, url} = data;

  	return (
		<div className="bg-gray-800 h-screen w-screen">
			<Header title={logo} />
			
			<main className="flex container justify-center m-auto">
				<DownloadCard url={url} content={content} title={title} />
			</main>

		</div>
	);
}