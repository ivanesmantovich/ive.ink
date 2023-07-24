import styles from './SnowdropCaret.module.css'

import Image from 'next/image'
import asterisk from '@/public/asterisk.svg'

export default function SnowdropCaret() {
    return (
        <div className="flex">
            <Image src={asterisk} alt="" className="w-28" />
            <div className={`h-auto w-0.5 ml-1 bg-black ${styles.blink}`}></div>
        </div>
    )
}
