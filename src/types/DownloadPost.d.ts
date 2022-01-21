export default interface DownloadPost {
    id: number | string,
    attributes: {
		title: string,
		url: string,
		shortened_url?: string,
		shortened_ads_url?: string,
		content?: string,
		images?: string[],
		url_button: boolean,
		shortened_url_button: boolean,
		shortened_ads_button: boolean,
		delay_time?: number,
	}
}