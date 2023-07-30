import styles from './Projects.module.css'

import screenshot from '@/public/screenshot.png'
import appStoreDownload from '@/public/appStoreDownload.svg'
import webIcon from '@/public/webIcon.svg'
import swiftIcon from '@/public/swiftIcon.svg'

import Snowdrop from './Snowdrop'
import Preview from './Preview'
import Image from 'next/image'

export default function Projects() {
    return (
        <div className={`flex grow flex-col ${styles.fadeIn}`}>
            <div className="self-center flex items-center w-2/3 pt-4">
                <Snowdrop small={true} />
                <div className="flex grow justify-center">
                    <div className={`mr-6`}>
                        <Image
                            src={swiftIcon}
                            alt=""
                            className={`w-16 ${styles.bgTransition} ${styles.bgSwift}`}
                        />
                    </div>
                    <div>
                        <Image
                            src={webIcon}
                            alt=""
                            className={`w-16 ${styles.bgTransition} ${styles.bgReact}`}
                        />
                    </div>
                </div>
            </div>
            <div className="self-center flex flex-wrap items-center justify-between w-2/3">
                <div className={`${styles.previewContainer} ${styles.enlarge}`}>
                    <div className={`${styles.preview}`}>
                        <Image alt="" src={screenshot} fill={true} />
                    </div>
                    <div
                        className={`flex grow flex-col items-start pl-6 text-sm text-sm border-t border-gray-300`}
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

                <div className={`${styles.previewContainer} ${styles.enlarge}`}>
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

                <div className={`${styles.previewContainer} ${styles.enlarge}`}>
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
    )
}
