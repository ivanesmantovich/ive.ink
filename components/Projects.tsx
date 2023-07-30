import styles from './Projects.module.css'
import screenshot from '@/public/screenshot.png'
import appStoreDownload from '@/public/appStoreDownload.svg'

import Snowdrop from './Snowdrop'
import Preview from './Preview'
import Image from 'next/image'

export default function Projects() {
    return (
        <div className={`flex grow flex-col ${styles.fadeIn}`}>
            <div className="self-center flex grow flex-wrap items-center justify-between w-2/3">
                <div className={`${styles.previewContainer} ${styles.enlarge}`}>
                    <div className={`${styles.preview}`}>
                        <Image alt="" src={screenshot} fill={true} />
                    </div>
                    <div
                        className={`flex grow flex-col items-start pl-8 text-sm text-sm border-t border-gray-300`}
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
                    <div className="flex grow flex-col items-start pl-8 text-sm text-sm border-t border-gray-300">
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
                    <div className="flex grow flex-col items-start pl-8 text-sm border-t border-gray-300">
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
