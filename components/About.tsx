import styles from './About.module.css'

import Link from 'next/link'

import Snowdrop from './Snowdrop'

export default function About() {
    function linkProjects() {
        return (
            <Link href={'/projects'} className="link">
                make
            </Link>
        )
    }

    function linkBlog() {
        return (
            <Link href={'/blog'} className="link">
                write
            </Link>
        )
    }

    return (
        <div className="flex grow justify-center">
            <div
                className={`flex flex-col h-full w-5/6 sm:w-4/6 ${styles.fadeIn}`}
            >
                <Link className="w-fit pt-10 sm:pt-28 pb-20" href="/menu">
                    <Snowdrop visible static />
                </Link>

                <div className="text-lg sm:text-2xl">
                    <div className={'pb-8'}>
                        <div className={'pb-1'}>My name is Ivan.</div>
                        <div>
                            I am a web developer currently living in Voronezh,
                            Russia.
                        </div>
                    </div>

                    <div className={'pb-8'}>
                        <div className={'pb-1'}>
                            I {linkProjects()} long-lasting, easy-to-use,
                            aesthetic software.
                        </div>
                        <div>
                            I {linkBlog()} about UX, design, web performance,
                            tools for developers and some other stuff.
                        </div>
                    </div>

                    <div className={'font-medium'}>I love the Internet.</div>
                </div>
            </div>
        </div>
    )
}
