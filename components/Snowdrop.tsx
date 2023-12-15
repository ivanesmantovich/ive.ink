import styles from './Snowdrop.module.css'

import Image from 'next/image'
import asterisk from '@/public/asterisk.svg'

type SnowdropProps = {
    size?: 'small' | 'normal'
}

export default function Snowdrop(props: SnowdropProps) {
    return (
        <div className={'w-fit'}>
            <Image
                src={asterisk}
                alt=""
                className={`
                    w-16 min-[380px]:w-28
                    ${props.size === 'small' ? 'w-16' : ''}
                    ${styles.spinning}
                `}
            />
        </div>
    )
}
