import Image from 'next/image'
import asterisk from '@/public/asterisk.svg'
import Caret from './Caret'

type SnowdropProps = {
    withCaret: boolean
}

export default function SnowdropCaret(props: SnowdropProps) {
    return (
        <div className="flex">
            <Image src={asterisk} alt="" className="w-28" />
            {props.withCaret ? <Caret /> : null}
        </div>
    )
}
