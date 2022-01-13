import Link from 'next/link'
import React from 'react'

interface HeaderData {
    title: string
}

export const Header = ({title} : HeaderData) => {
    return (
        <header className=" pb-10 w-100">
            <div className="flex justify-between  m-auto">
                <Link href={'/'} >
                    <a className="text-white text-center font-extrabold p-3 inline-block rounded flex-1 bg-gray-900">
                        {title}
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