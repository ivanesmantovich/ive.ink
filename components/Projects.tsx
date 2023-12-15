'use client'

import styles from './Projects.module.css'

import Snowdrop from './Snowdrop'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Loader from '@/components/Loader'
import { IoIosStar } from 'react-icons/io'

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
        <div className="flex grow justify-center">
            <div
                className={`flex flex-col h-full w-5/6 sm:w-4/6 ${styles.fadeIn}`}
            >
                <Link className="w-fit pt-10 sm:pt-28 pb-20" href="/menu">
                    <Snowdrop />
                </Link>

                <div>
                    <div className={'text-xl sm:text-2xl pb-6 text-gray-500'}>
                        2023
                    </div>
                    <div className={'pb-4'}>
                        <div
                            className={
                                'text-xl sm:text-2xl font-semibold text-[#007aff]'
                            }
                        >
                            Ichi
                        </div>
                        <div className={'text-gray-500'}>
                            <span>
                                Offline-first PWA Grocery Shopping List{' '}
                            </span>
                        </div>
                    </div>
                    <div className={'pb-4'}>
                        <Link
                            href={'https://ive.ink'}
                            className={
                                'text-xl sm:text-2xl font-semibold text-[#007aff]'
                            }
                        >
                            blog.ive.ink
                        </Link>
                        <div className={'text-gray-500'}>Blog</div>
                    </div>
                    <div className={'pb-4'}>
                        <Link
                            href={'https://ive.ink'}
                            className={
                                'text-xl sm:text-2xl font-semibold text-[#007aff]'
                            }
                        >
                            ive.ink
                        </Link>
                        <div className={'text-gray-500'}>Portfolio</div>
                    </div>
                    <div>
                        <div
                            className={
                                'text-xl sm:text-2xl font-semibold text-[#007aff] flex'
                            }
                        >
                            <Link
                                href={
                                    'https://github.com/ivanesmantovich/xkbswitch.nvim'
                                }
                            >
                                xkbswitch.nvim
                            </Link>
                            <div
                                className={
                                    'flex items-center pl-3 text-[#eac54f] text-xl sm:text-2xl'
                                }
                            >
                                <IoIosStar />
                            </div>
                            {starsLoading ? (
                                <Loader />
                            ) : (
                                <div
                                    className={
                                        'flex items-end text-[#eac54f] text-lg sm:text-xl font-medium'
                                    }
                                >
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
