import styles from './Projects.module.css'

import Link from 'next/link'
import Snowdrop from './Snowdrop'
import Preview from './Preview'

export default function Projects() {
    return (
        <div
            className={`flex grow flex-col border-2 border-black ${styles.fadeIn}`}
        >
            <div className="self-center flex grow flex-wrap items-center justify-between w-8/12 border-2 border-emerald-300">
                <div className={`${styles.preview}`}></div>
                <div className={`${styles.preview}`}></div>
                <div className={`${styles.preview}`}></div>
            </div>
        </div>
    )
}
