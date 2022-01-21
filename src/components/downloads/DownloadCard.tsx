import Image from "next/image";
import DownloadPost from "../../types/DownloadPost";

interface DownloadCardProps {
	downloadPost: DownloadPost
}

export const DownloadCard = ({downloadPost}: DownloadCardProps) => {
    
	const { 
		id,
		attributes: {
			shortened_ads_button,
			shortened_url_button,
			title,
			url,
			url_button,
			content,
			delay_time,
			images,
			shortened_ads_url,
			shortened_url
		}
	} = downloadPost;
	
	
	return (
			<article className="px-5 py-5 bg-white w-9/12 max-w-3xl min rounded-sm">
				
				<h1 className=" text-xl font-bold text-center">{title}</h1>
				<p className="mt-5">{content}</p>
				
				{/* <a href={url}>Hola</a> */}

			</article>
		);
}
