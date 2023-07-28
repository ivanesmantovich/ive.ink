import styles from './Hello.module.css'
import Wrapper from './Wrapper'

export default function Hello() {
    return (
        <Wrapper>
            <div className={`text-4xl ${styles.animate}`}>Hello</div>
        </Wrapper>
    )
}
