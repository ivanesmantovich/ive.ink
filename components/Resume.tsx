import styles from './About.module.css'

import Link from 'next/link'

import Snowdrop from './Snowdrop'
import { IoIosDocument } from 'react-icons/io'

export default function Resume() {
    return (
        <div className="flex grow justify-center">
            <div
                className={`flex flex-col h-full w-5/6 sm:w-4/6 ${styles.fadeIn}`}
            >
                <Link className="w-fit pt-10 sm:pt-28 pb-20" href="/menu">
                    <Snowdrop visible static />
                </Link>

                <div
                    className={
                        'grid grid-rows-2 md:grid-rows-1 grid-cols-2 md:grid-cols-4 gap-y-3 text-xl sm:text-2xl text-center'
                    }
                >
                    <div>
                        <div className={'font-semibold'}>TypeScript</div>
                        <div>HTML</div>
                        <div>CSS</div>
                    </div>
                    <div>
                        <div className={'font-semibold'}>React</div>
                        <div>Next.js</div>
                        <div>Tailwind</div>
                    </div>
                    <div>
                        <div className={'font-semibold'}>Redux</div>
                        <div>Redux Toolkit</div>
                        <div>RTK Query</div>
                    </div>
                    <div>
                        <div className={'font-semibold'}>React Native</div>
                        <div>Reanimated</div>
                        <div>Skia</div>
                    </div>
                </div>

                <div className={'pt-20 text-lg sm:text-xl'}>
                    <div className={'pb-4 text-xl sm:text-2xl font-semibold'}>
                        Experience
                    </div>
                    <div className={'font-medium'}>2021-2023</div>
                    <div>
                        <a className="link" href={'https://goodt.me/'}>
                            Goodt
                        </a>
                        , Frontend Developer
                    </div>
                    <ul className={'pt-2'} style={{ listStyle: 'inside' }}>
                        <li>
                            Removed two thousand lines of JavaScript spaghetti
                            code from core components by moving the project to a
                            structured TypeScript service architecture
                        </li>
                        <li>
                            Developed reusable components that became a part of
                            the Ul library
                        </li>
                        <li>
                            Wrote utility scripts ot improve the API Developer
                            Experience
                        </li>
                    </ul>
                </div>

                <div className={'pt-20 text-lg sm:text-xl'}>
                    <div className={'text-xl sm:text-2xl pb-4 font-semibold'}>
                        Open-Source
                    </div>
                    <Link
                        href={
                            'https://github.com/ivanesmantovich/xkbswitch.nvim'
                        }
                        className="link"
                    >
                        xkbswitch.nvim
                    </Link>
                    <div className="description">
                        Smart automatic keyboard layout switcher for Neovim in
                        100 LOC
                    </div>
                </div>

                <div className={'pt-20 text-lg sm:text-xl'}>
                    <div className={'text-xl sm:text-2xl pb-4 font-semibold'}>
                        Languages
                    </div>
                    <div>
                        <span className={'font-medium'}>English</span> - C1
                    </div>
                    <div>
                        <span className={'font-medium'}>Russian</span> - Native
                    </div>
                </div>

                <div className={'pt-20 text-lg sm:text-xl'}>
                    <div className={'text-xl sm:text-2xl pb-4 font-semibold'}>
                        Education
                    </div>
                    <div>Voronezh State University</div>
                    <div className={'font-medium'}>BA Computer Science</div>
                </div>

                <a
                    className="flex my-20 w-fit font-semibold text-xl sm:text-2xl text-[#007aff] link"
                    href={'resume.pdf'}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                    download
                >
                    <div className={'pt-1'}>
                        <IoIosDocument />
                    </div>
                    <div>PDF</div>
                </a>
            </div>
        </div>
    )
}
