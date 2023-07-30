import styles from './Projects.module.css'

import Link from 'next/link'
import Snowdrop from './Snowdrop'
import Preview from './Preview'

export default function Projects() {
    return (
        <div
            className={`h-full w-full flex items-center justify-center ${styles.fadeIn}`}
        >
            <div className="flex flex-col mt-10 w-10/12">
                <div
                    className={`flex flex-wrap justify-between ${styles.previewRow}`}
                >
                    <Preview />
                    <Preview />
                    <Preview />
                </div>
            </div>
        </div>
    )
}
