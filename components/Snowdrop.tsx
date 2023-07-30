import styles from './Snowdrop.module.css'

import Image from 'next/image'
import asterisk from '@/public/asterisk.svg'

type SnowdropProps = {
    small?: boolean
}

export default function Snowdrop(props: SnowdropProps) {
    return (
        <div>
            <Image
                src={asterisk}
                alt=""
                className={`${props.small ? 'w-16' : 'w-28'} ${
                    styles.spinning
                }`}
            />
        </div>
    )
}
