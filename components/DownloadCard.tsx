import React from 'react'

interface IDownload {
	title: string,
	content: string
}

export const DownloadCard = ({title, content}: IDownload) => {
    return (
			<article className="px-5 py-5 bg-white w-9/12 max-w-md min rounded-sm">
				<h1 className=" text-xl font-bold text-center">{title}</h1>
				<p className="mt-5">{content}</p>
			</article>
		);
}
