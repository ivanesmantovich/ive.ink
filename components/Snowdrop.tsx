import styles from './Snowdrop.module.css'

import Image from 'next/image'
import asterisk from '@/public/asterisk.svg'

type SnowdropProps = {
    visible: boolean
    pointerMode?: boolean
    static?: boolean
}

export default function Snowdrop(props: SnowdropProps) {
    return (
        <div className={'w-fit'}>
            <Image
                src={asterisk}
                alt=""
                className={`
                    w-16 min-[380px]:w-20
                    ${props.pointerMode && '!w-9 mt-1'}
                    ${props.static ? styles.static : styles.menu}
                    ${props.visible ? 'opacity-100' : 'opacity-0'}
                `}
            />
        </div>
    )
}
