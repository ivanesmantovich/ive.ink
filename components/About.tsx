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
                <div className="mb-1">My name is Ivan Esmantovich</div>
                <div className="mb-1">I strive to make aesthetic, unobtrusive, <span className='underline'>useful</span> products</div>
                <div className="mb-1">I love the Internet</div>
                <div className="flex">
                    <div>I am currently interested in&nbsp;</div>
                    <Interests />
                </div>
            </div>
        </div>
    )
}
