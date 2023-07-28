import styles from './Hello.module.css'
import Wrapper from './Wrapper'

export default function Hello() {
    return (
        <Wrapper>
            <div className={`text-3xl ${styles.animate}`}>
                Hello
            </div>
        </Wrapper>
    )
}
