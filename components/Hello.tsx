import styles from './Hello.module.css'

export default function Hello() {
    return (
        <div
            className={`flex h-screen w-screen items-center justify-center text-3xl ${styles.animate}`}
        >
            Hello
        </div>
    )
}
