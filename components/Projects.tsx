'use client'

import styles from './Projects.module.css'

import screenshot from '@/public/screenshot.png'
import appStoreDownload from '@/public/appStoreDownload.svg'
import webIcon from '@/public/webIcon.svg'
import reactIcon from '@/public/reactIcon.svg'
import swiftIcon from '@/public/swiftIcon.svg'
import screencast from '@/public/screencast.gif'

import Snowdrop from './Snowdrop'
import Preview from './Preview'
import Image from 'next/image'
import { useState } from 'react'

export default function Projects() {
    const [selectedLang, setSelectedLang] = useState<'swift' | 'react'>('swift')
    return (
        <div className={`flex grow flex-col ${styles.fadeIn}`}>
            <div className="self-center flex justify-between items-center w-2/3 pt-4">
                <Snowdrop small={true} />
                <div
                    className={`flex py-1 px-2 rounded-full border border-white ${styles.bgNav}`}
                >
                    <div>
                        <div
                            className={`p-2 mr-1 rounded-full ${
                                styles.bgTransition
                            } ${styles.langButton} ${
                                selectedLang === 'swift'
                                    ? styles.selectedButton
                                    : ''
                            }`}
                            onClick={() => {
                                setSelectedLang('swift')
                            }}
                        >
                            <Image src={swiftIcon} alt="" className="w-7" />
                        </div>
                    </div>
                    <div
                        className={`p-2 rounded-full ${styles.bgTransition} ${
                            styles.langButton
                        } ${
                            selectedLang === 'react'
                                ? styles.selectedButton
                                : ''
                        }`}
                        onClick={() => {
                            setSelectedLang('react')
                        }}
                    >
                        <Image src={reactIcon} alt="" className="w-7" />
                    </div>
                </div>
            </div>
            <div className="flex grow self-center w-2/3 h-100">
                <div className="flex grow flex-wrap items-center justify-between">
                    <div
                        className={`${styles.previewContainer} ${styles.enlarge}`}
                    >
                        <div className={`${styles.preview}`}>
                            <Image alt="" src={screencast} fill={true} />
                        </div>
                        <div
                            className={`flex grow flex-col items-start pl-6 text-sm border-t border-gray-300`}
                        >
                            <div className="py-2">
                                <div>Reminders</div>
                                <div className="font-semibold">
                                    App that reminds you stuff
                                </div>
                            </div>
                            <Image
                                alt=""
                                src={appStoreDownload}
                                height={40}
                                width={119}
                            />
                        </div>
                    </div>

                    <div
                        className={`${styles.previewContainer} ${styles.enlarge}`}
                    >
                        <div className={`${styles.preview}`}>
                            <Image alt="" src={screenshot} fill={true} />
                        </div>
                        <div className="flex grow flex-col items-start pl-6 text-sm border-t border-gray-300">
                            <div className="py-2">
                                <div>Reminders</div>
                                <div className="font-semibold">
                                    App that reminds you stuff
                                </div>
                            </div>
                            <Image
                                alt=""
                                src={appStoreDownload}
                                height={40}
                                width={119}
                            />
                        </div>
                    </div>

                    <div
                        className={`${styles.previewContainer} ${styles.enlarge}`}
                    >
                        <div className={`${styles.preview}`}>
                            <Image alt="" src={screenshot} fill={true} />
                        </div>
                        <div className="flex grow flex-col items-start pl-6 text-sm border-t border-gray-300">
                            <div className="py-2">
                                <div>Reminders</div>
                                <div className="font-semibold">
                                    App that reminds you stuff
                                </div>
                            </div>
                            <Image
                                alt=""
                                src={appStoreDownload}
                                height={40}
                                width={119}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
