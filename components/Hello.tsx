import styles from './Hello.module.css'

export default function Hello() {
    return (
        <div className="flex grow items-center justify-center">
            <div className={`text-4xl ${styles.animate}`}>Hello</div>
        </div>
    )
}
