import styles from './About.module.css'

import Interests from './Interests'
import Snowdrop from './Snowdrop'

export default function About() {
    return (
        <div className={`w-4/6 h-4/6 ${styles.fadeIn}`}>
            <Snowdrop withCaret={false} />

            <div className="mt-32 text-3xl">
                <div>My name is Ivan.</div>
                <div>
                    I develop in{' '}
                    {/* TODO: Сделать ссылками, сделать плавное легкое затемнение при наведении. */}
                    <span
                        className={`${styles.bgSwift} text-white py-0.5 px-1 rounded`}
                    >
                        Swift
                    </span>{' '}
                    and{' '}
                    {/* TODO: Сделать ссылками, сделать плавное легкое затемнение при наведении. */}
                    <span
                        className={`${styles.bgReact} text-white py-0.5 px-1 rounded`}
                    >
                        React
                    </span>
                    .
                </div>
                <div>I love good UX and good Design.</div>
                <div className="flex">
                    <div>I am currently interested in&nbsp;</div>
                    <Interests />
                </div>
            </div>
        </div>
    )
}
