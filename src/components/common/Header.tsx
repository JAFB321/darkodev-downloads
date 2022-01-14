import Link from 'next/link'

export const Header = () => {
    return (
        <header className=" pb-10 w-100">
            <div className="flex justify-center m-auto bg-gray-900">
                <Link href={'/'} >
                    <a className="text-white text-center font-extrabold p-3 inline-block rounded ">
                        Darko Dev
                    </a>
                </Link>

                <nav>
                    {/* <Link href={'/'}>
                        <a className="text-white p-3 inline-block rounded bg-gray-700">
                            {title}
                        </a>
                    </Link> */}
                </nav>
            </div>
        </header>
    )
}