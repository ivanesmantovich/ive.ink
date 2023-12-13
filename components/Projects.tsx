'use client'

import styles from './Projects.module.css'

import Snowdrop from './Snowdrop'
import Link from 'next/link'
import { FaStar } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import Loader from '@/components/Loader'

export default function Projects() {
    const [xkbStars, setXkbStars] = useState<number>()
    const [starsLoading, setStarsLoading] = useState(false)

    useEffect(() => {
        setStarsLoading(true)
        fetch('https://api.github.com/users/ivanesmantovich/repos')
            .then((response) => response.json())
            .then(
                (
                    data: {
                        id: number
                        name: string
                        stargazers_count: number
                    }[]
                ) => {
                    const xkbSwitch = data.find(
                        (project) => project.id === 603240504
                    )
                    if (xkbSwitch) setXkbStars(xkbSwitch.stargazers_count)
                }
            )
        setStarsLoading(false)
    }, [])

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div
                className={`flex flex-col h-full justify-center w-4/6 ${styles.fadeIn}`}
            >
                <Link className="absolute top-[15%]" href="/menu">
                    <Snowdrop />
                </Link>

                <div>
                    <div className={'text-3xl pb-8'}>2023</div>
                    <div className={'pb-4'}>
                        <div className={'text-2xl text-[#007aff]'}>Ichi</div>
                        <div className={'text-gray-500'}>
                            <span>
                                Offline-first PWA Grocery Shopping List{' '}
                            </span>
                        </div>
                    </div>
                    <div className={'pb-4'}>
                        <Link
                            href={'https://ive.ink'}
                            className={'text-2xl text-[#007aff]'}
                        >
                            ive.ink
                        </Link>
                        <div className={'text-gray-500'}>Portfolio</div>
                    </div>
                    <div>
                        <div className={'text-2xl text-[#007aff] flex'}>
                            <Link
                                href={
                                    'https://github.com/ivanesmantovich/xkbswitch.nvim'
                                }
                            >
                                xkbswitch.nvim
                            </Link>
                            <div
                                className={
                                    'flex pt-0.5 pl-3 pr-1 text-[#eac54f]'
                                }
                            >
                                <FaStar />
                            </div>
                            {starsLoading ? (
                                <Loader />
                            ) : (
                                <div className={'text-[#eac54f]'}>
                                    {xkbStars}
                                </div>
                            )}
                        </div>
                        <div className={'text-gray-500'}>
                            Smart automatic keyboard layout switcher for Neovim
                            in 100 LOC
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
