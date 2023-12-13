import styles from './About.module.css'

import Link from 'next/link'

import Snowdrop from './Snowdrop'

export default function Portfolio() {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div
                className={`flex flex-col h-full w-5/6 sm:w-4/6 ${styles.fadeIn}`}
            >
                <Link className="pt-20" href="/menu">
                    <Snowdrop />
                </Link>

                <div
                    className={
                        'grid grid-rows-2 md:grid-rows-1 grid-cols-2 md:grid-cols-4  text-2xl pt-20 text-center'
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

                <div className={'pt-20 text-xl'}>
                    <div className={'pb-4 text-2xl font-semibold'}>
                        Experience
                    </div>
                    <div className={'font-medium'}>2021-2023</div>
                    <div>Goodt, Frontend Developer</div>
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

                <div className={'pt-20 text-xl'}>
                    <div className={'text-2xl pb-4 font-semibold'}>
                        Open-Source
                    </div>
                    <Link
                        href={
                            'https://github.com/ivanesmantovich/xkbswitch.nvim'
                        }
                        className={'text-[#007aff]'}
                    >
                        xkbswitch.nvim
                    </Link>
                    <div className={'text-gray-500'}>
                        Smart automatic keyboard layout switcher for Neovim in
                        100 LOC
                    </div>
                </div>

                <div className={'pt-20 text-xl'}>
                    <div className={'text-2xl pb-4 font-semibold'}>
                        Languages
                    </div>
                    <div>
                        <span className={'font-medium'}>English</span> - C1
                    </div>
                    <div>
                        <span className={'font-medium'}>Russian</span> - Native
                    </div>
                </div>

                <div className={'pt-20 pb-20 text-xl'}>
                    <div className={'text-2xl pb-4 font-semibold'}>
                        Education
                    </div>
                    <div>Voronezh State University</div>
                    <div className={'font-medium'}>BA Computer Science</div>
                </div>
            </div>
        </div>
    )
}
