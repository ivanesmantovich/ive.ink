import styles from './Snowdrop.module.css'

import Image from 'next/image'
import asterisk from '@/public/asterisk.svg'

export default function Snowdrop() {
    return (
        <div className="flex">
            <Image
                src={asterisk}
                alt=""
                className={`w-28 ${styles.spinning}`}
            />
        </div>
    )
}
