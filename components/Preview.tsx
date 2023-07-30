import Image from 'next/image'
import styles from './Preview.module.css'

import screenshot from '@/public/screenshot.png'
import remindersLogo from '@/public/remindersLogo.svg'

export default function Preview() {
    return (
        <div
            className={`
                        overflow-hidden
                        rounded-3xl
                        ${styles.previewContainer}
                        ${styles.enlarge}`}
        >
            <div className={`relative ${styles.screencast}`}>
                <Image alt="" fill={true} src={screenshot} />
            </div>

            <div className="flex py-2">
                <div className="w-1/6 relative">
                    <Image alt="" fill={true} src={remindersLogo} />
                </div>
                <div>
                    <div>Reminders</div>
                    <div className="font-semibold">
                        App that reminds you stuff
                    </div>
                </div>
            </div>
        </div>
    )
}
