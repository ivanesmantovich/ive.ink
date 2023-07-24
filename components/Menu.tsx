'use client'

import styles from './Menu.module.css'
import Image from 'next/image'
import asterisk from '@/public/asterisk.svg'
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
                <div className="mr-5">About me</div>
                <Image
                    src={asterisk}
                    alt=""
                    className={`w-9 ${styles.pointerAsterisk} ${
                        styles.spinning
                    } ${
                        hoveredElement === 'about' ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            </div>

            <div
                className="py-7 flex flex-row cursor-pointer"
                onMouseOver={projectsEnter}
                onMouseOut={handleMouseout}
            >
                <div className="mr-5">Projects</div>
                <Image
                    src={asterisk}
                    alt=""
                    className={`w-9 ${styles.pointerAsterisk} ${
                        styles.spinning
                    } ${
                        hoveredElement === 'projects'
                            ? 'opacity-100'
                            : 'opacity-0'
                    }`}
                />
            </div>

            <div
                className="py-7 flex flex-row cursor-pointer"
                onMouseOver={emailEnter}
                onMouseOut={handleMouseout}
            >
                <div className="mr-5">Write me an E-Mail</div>
                <Image
                    src={asterisk}
                    alt=""
                    className={`w-9 ${styles.pointerAsterisk} ${
                        styles.spinning
                    } ${
                        hoveredElement === 'email' ? 'opacity-100' : 'opacity-0'
                    }`}
                />
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
