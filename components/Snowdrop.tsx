import styles from './Snowdrop.module.css'

export default function Snowdrop() {
    return (
        <div>
            <div className="text-xl">Unicode, can not change font-weight</div>
            <div
                className={`flex w-screen justify-center items-center text-9xl ${styles.spinning}`}
            >
                ✱
            </div>
            <div className="text-xl">
                Just a asterisk, can change font-weight
            </div>
            <div
                className={`flex w-screen justify-center items-center text-9xl ${styles.spinning} font-mono font-bold`}
            >
                *
            </div>
        </div>
    )
}
