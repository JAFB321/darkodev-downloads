import Link from 'next/link'
import React from 'react'

interface HeaderData {
    title: string
}

export const Header = ({title} : HeaderData) => {
    return (
        <header className=" py-5 w-100">
            <div className="flex w-10/12 max-w-5xl m-auto">
                <Link href={'/'}>
                    <a className="text-white p-3 inline-block rounded bg-gray-700">
                        {title}
                    </a>
                </Link>
                <nav></nav>
            </div>
        </header>
    )
}