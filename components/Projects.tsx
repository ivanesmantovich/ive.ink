'use client'

import styles from './Projects.module.css'

import Snowdrop from './Snowdrop'
import Link from 'next/link'

export default function Projects() {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div
                className={`flex flex-col h-full justify-center w-4/6 ${styles.fadeIn}`}
            >
                <Link className="absolute top-[15%]" href="/menu">
                    <Snowdrop />
                </Link>

                <div className="">
                    <div className={'text-3xl pb-8'}>2023</div>
                    <div className={'pb-4'}>
                        <div className={'text-2xl text-[#007aff]'}>Ichi</div>
                        <div className={'text-gray-400'}>
                            Offline-first PWA Grocery Shopping List
                        </div>
                    </div>
                    <div className={'pb-4'}>
                        <div className={'text-2xl text-[#007aff]'}>ive.ink</div>
                        <div className={'text-gray-400'}>Portfolio</div>
                    </div>
                    <div>
                        <div className={'text-2xl text-[#007aff]'}>
                            xkbswitch.nvim
                        </div>
                        <div className={'text-gray-400'}>
                            Smart automatic keyboard layout switching in 100 LOC
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
