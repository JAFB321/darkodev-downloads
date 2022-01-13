import React from 'react'

interface IDownload {
	title: string,
	content?: string,
	url: string,
	shorten_url?: string,
	shorten_ads_url?: string,
	image?: string,
	delay?: number,
	
}

export const DownloadCard = ({title, content, url, shorten_url, shorten_ads_url, image, delay}: IDownload) => {
    return (
			<article className="px-5 py-5 bg-white w-9/12 max-w-3xl min rounded-sm">
				
				<h1 className=" text-xl font-bold text-center">{title}</h1>
				<p className="mt-5">{content}</p>
				
				{/* <a href={url}>Hola</a> */}

			</article>
		);
}
