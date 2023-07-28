'use client'

import styles from './Menu.module.css'
import asterisk from '@/public/asterisk.svg'

import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'

export default function Menu() {
    const [hoveredElement, setHoveredElement] = useState<
        'about' | 'projects' | 'email' | null
    >(null)

    const aboutMeEnter = () => {
        setHoveredElement('about')
    }

    const projectsEnter = () => {
        setHoveredElement('projects')
    }

    const emailEnter = () => {
        setHoveredElement('email')
    }

    const handleMouseout = () => {
        setHoveredElement(null)
    }

    return (
        <div className={`flex flex-col h-1/2 text-3xl ${styles.fadeIn}`}>
            <div
                className="py-7 flex flex-row cursor-pointer"
                onMouseOver={aboutMeEnter}
                onMouseOut={handleMouseout}
            >
                <Link href="/about" className="flex grow justify-center">
                    About me
                </Link>
                {/* TODO: Вынести в отдельный компонент */}
                {/* <Image
                    src={asterisk}
                    alt=""
                    className={`w-9 ${styles.pointerAsterisk} ${
                        styles.spinning
                    } ${
                        hoveredElement === 'about' ? 'opacity-100' : 'opacity-0'
                    }`}
                /> */}
            </div>

            <div
                className="py-7 flex flex-row cursor-pointer"
                onMouseOver={projectsEnter}
                onMouseOut={handleMouseout}
            >
                <div className="flex grow justify-center">Projects</div>
                {/* <Image
                    src={asterisk}
                    alt=""
                    className={`w-9 ${styles.pointerAsterisk} ${
                        styles.spinning
                    } ${
                        hoveredElement === 'projects'
                            ? 'opacity-100'
                            : 'opacity-0'
                    }`}
                /> */}
            </div>

            <div
                className="py-7 flex flex-row cursor-pointer"
                onMouseOver={emailEnter}
                onMouseOut={handleMouseout}
            >
                <div className="flex grow justify-center">Portfolio</div>
                {/* <Image
                    src={asterisk}
                    alt=""
                    className={`w-9 ${styles.pointerAsterisk} ${
                        styles.spinning
                    } ${
                        hoveredElement === 'email' ? 'opacity-100' : 'opacity-0'
                    }`}
                /> */}
            </div>
            <div className="py-7 flex justify-center">
                <Image
                    src={asterisk}
                    alt=""
                    className={`w-24 ${styles.pointerAsterisk} ${
                        styles.spinning
                    } ${hoveredElement === null ? 'opacity-100' : 'opacity-0'}`}
                />
            </div>
        </div>
    )
}
