import DownloadPost from "../../types/DownloadPost";

interface DownloadCardProps {
	downloadPost: DownloadPost
}

export const DownloadCard = ({downloadPost}: DownloadCardProps) => {
    
	const { 
		id,
		title, 
		url, 
		content, 
		delay_time, 
		images, 
		shortened_ads_url, 
		shortened_url, 
		shortened_url_button, 
		shortened_ads_button, 
		url_button 
	} = downloadPost;
	
	
	return (
			<article className="px-5 py-5 bg-white w-9/12 max-w-3xl min rounded-sm">
				
				<h1 className=" text-xl font-bold text-center">{title}</h1>
				<p className="mt-5">{content}</p>
				
				{/* <a href={url}>Hola</a> */}

			</article>
		);
}
