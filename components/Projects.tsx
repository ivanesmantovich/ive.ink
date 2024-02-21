'use client'

import styles from './Projects.module.css'

import Snowdrop from './Snowdrop'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Loader from '@/components/Loader'
import { IoIosStarOutline } from 'react-icons/io'
import useSWR from 'swr'

interface Repo {
    id: number
    name: string
    stargazers_count: number
}

export default function Projects() {
    const fetcher = (url: string) => fetch(url).then((r) => r.json())
    const {
        data: repos,
        error: reposError,
        isLoading: reposIsLoading,
    } = useSWR('https://api.github.com/users/ivanesmantovich/repos', fetcher)

    function getProjectStars(projectId: number) {
        if (reposIsLoading) return <Loader />
        return (
            <>
                <div
                    className={
                        'flex items-center pl-2 text-[#eac54f] text-xl sm:text-2xl'
                    }
                >
                    <IoIosStarOutline />
                </div>
                {reposIsLoading ? (
                    <Loader />
                ) : (
                    <div
                        className={
                            'flex items-end text-[#eac54f] text-lg sm:text-xl font-normal'
                        }
                    >
                        {reposError
                            ? '?'
                            : repos.find((repo: Repo) => repo.id === projectId)
                                  ?.stargazers_count}
                    </div>
                )}
            </>
        )
    }

    return (
        <div className="flex grow justify-center">
            <div
                className={`flex flex-col h-full w-5/6 sm:w-2/5 slide-enter-content`}
            >
                <Link className="w-fit pt-10 sm:pt-28 pb-20" href="/menu">
                    <Snowdrop visible static />
                </Link>

                <div className={'text-xl sm:text-2xl pb-2 text-gray-500'}>
                    2024
                </div>

                <div className='pb-8'>
                    <Link
                        href={'https://blog.ive.ink'}
                        target={'_blank'}
                        className={'text-xl sm:text-2xl font-medium link'}
                    >
                        blog.ive.ink
                    </Link>
                    <div className="description">Blog</div>
                </div>

                <div className={'text-xl sm:text-2xl pb-2 text-gray-500'}>
                    2023
                </div>

                <div className='pb-4'>
                    <Link
                        href={'https://ichi.ive.ink'}
                        target={'_blank'}
                        className={'text-xl sm:text-2xl font-medium link'}
                    >
                        Ichi
                    </Link>
                    <div className="description">
                        Offline-first PWA Grocery Shopping List
                    </div>
                </div>

                <div className='pb-4'>
                    <Link
                        href={'https://ive.ink'}
                        target={'_blank'}
                        className={'text-xl sm:text-2xl font-medium link'}
                    >
                        ive.ink
                    </Link>
                    <div className="description">Portfolio</div>
                </div>

                <div className='pb-4'>
                    <div className={'text-xl sm:text-2xl font-medium flex'}>
                        <Link
                            href={
                                'https://github.com/ivanesmantovich/xkbswitch.nvim'
                            }
                            target={'_blank'}
                            className="link"
                        >
                            xkbswitch.nvim
                        </Link>
                        {getProjectStars(603240504)}
                    </div>
                    <div className="description">
                        Smart automatic keyboard layout switcher for Neovim
                        in 100 LOC
                    </div>
                </div>
            </div>
        </div>
    )
}
