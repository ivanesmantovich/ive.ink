import styles from './About.module.css'

import Link from 'next/link'

import Interests from './Interests'
import Snowdrop from './Snowdrop'

export default function About() {
    return (
        <div
            className={`flex flex-col h-full w-4/6 justify-center ${styles.fadeIn}`}
        >
            <Link className="self-start" href="/menu">
                <Snowdrop />
            </Link>

            <div className="mt-32 mb-60 text-3xl">
                <div className="mb-1">My name is Ivan.</div>
                <div className="mb-1">
                    I develop in{' '}
                    <span
                        className={`${styles.bgTransition} ${styles.bgSwift} text-white py-0.5 px-1 rounded cursor-pointer`}
                    >
                        Swift
                    </span>{' '}
                    and {/* TODO: Сделать ссылками */}
                    <span
                        className={`${styles.bgTransition} ${styles.bgReact} text-white py-0.5 px-1 rounded cursor-pointer`}
                    >
                        React
                    </span>
                    .
                </div>
                <div className="mb-1">I love good UX and good Design.</div>
                <div className="flex">
                    <div>I am currently interested in&nbsp;</div>
                    <Interests />
                </div>
            </div>
        </div>
    )
}
