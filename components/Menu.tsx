'use client'

import styles from './Menu.module.css'
import asterisk from '@/public/asterisk.svg'

import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'

export default function Menu() {
    const [hoveredElement, setHoveredElement] = useState<
        'about' | 'projects' | 'portfolio' | 'email' | null
    >(null)

    const aboutMeEnter = () => {
        setHoveredElement('about')
    }

    const projectsEnter = () => {
        setHoveredElement('projects')
    }

    const portfolioEnter = () => {
        setHoveredElement('portfolio')
    }

    const emailEnter = () => {
        setHoveredElement('email')
    }

    const handleMouseout = () => {
        setHoveredElement(null)
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className={`flex flex-col text-4xl ${styles.fadeIn}`}>
                <Link
                    href="/about"
                    className="py-7 pl-14 flex flex-row cursor-pointer"
                    onMouseOver={aboutMeEnter}
                    onMouseOut={handleMouseout}
                >
                    <div>About me</div>
                    {/* TODO: Вынести в отдельный компонент */}
                    <Image
                        src={asterisk}
                        alt=""
                        className={`ml-5 w-9 ${styles.pointerAsterisk} ${
                            styles.spinning
                        } ${
                            hoveredElement === 'about'
                                ? 'opacity-100'
                                : 'opacity-0'
                        }`}
                    />
                </Link>

                <Link
                    href="/projects"
                    className="py-7 pl-14 flex flex-row cursor-pointer"
                    onMouseOver={projectsEnter}
                    onMouseOut={handleMouseout}
                >
                    <div>Projects</div>
                    <Image
                        src={asterisk}
                        alt=""
                        className={`ml-5 w-9 ${styles.pointerAsterisk} ${
                            styles.spinning
                        } ${
                            hoveredElement === 'projects'
                                ? 'opacity-100'
                                : 'opacity-0'
                        }`}
                    />
                </Link>

                <Link
                    href="/portfolio"
                    className="py-7 pl-14 flex flex-row cursor-pointer"
                    onMouseOver={portfolioEnter}
                    onMouseOut={handleMouseout}
                >
                    <div>Portfolio</div>
                    <Image
                        src={asterisk}
                        alt=""
                        className={`ml-5 w-9 ${styles.pointerAsterisk} ${
                            styles.spinning
                        } ${
                            hoveredElement === 'portfolio'
                                ? 'opacity-100'
                                : 'opacity-0'
                        }`}
                    />
                </Link>

                <div
                    className="py-7 pl-14 flex flex-row cursor-pointer"
                    onMouseOver={emailEnter}
                    onMouseOut={handleMouseout}
                >
                    <div>Write me an E-Mail</div>
                    <Image
                        src={asterisk}
                        alt=""
                        className={`ml-5 w-9 ${styles.pointerAsterisk} ${
                            styles.spinning
                        } ${
                            hoveredElement === 'email'
                                ? 'opacity-100'
                                : 'opacity-0'
                        }`}
                    />
                </div>
                <div className="py-7 flex justify-center">
                    <Image
                        src={asterisk}
                        alt=""
                        className={`w-24 ${styles.pointerAsterisk} ${
                            styles.spinning
                        } ${
                            hoveredElement === null
                                ? 'opacity-100'
                                : 'opacity-0'
                        }`}
                    />
                </div>
            </div>
        </div>
    )
}
