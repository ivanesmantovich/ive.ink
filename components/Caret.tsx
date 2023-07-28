import styles from './Caret.module.css'

export default function Caret() {
    return <div className={`h-auto w-0.5 ml-1 bg-black ${styles.blink}`}></div>
}
