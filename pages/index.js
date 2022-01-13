import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'

export default function Home() {
  return (
		<div className="bg-gray-800 h-screen container">
			<Header />

			<main className="flex justify-center">
				<article className="px-5 py-5 bg-white w-9/12 max-w-md min rounded-sm">
					<h1 className="text-xl font-bold text-center">Filmora X</h1>
				</article>
			</main>

		</div>
	);
}
