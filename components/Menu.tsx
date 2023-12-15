'use client'

import styles from './Menu.module.css'
import asterisk from '@/public/asterisk.svg'

import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'

export default function Menu() {
    const [hoveredElement, setHoveredElement] = useState<
        'about' | 'projects' | 'resume' | 'blog' | 'email' | null
    >(null)

    const aboutMeEnter = () => {
        setHoveredElement('about')
    }

    const projectsEnter = () => {
        setHoveredElement('projects')
    }

    const resumeEnter = () => {
        setHoveredElement('resume')
    }

    const blogEnter = () => {
        setHoveredElement('blog')
    }

    const emailEnter = () => {
        setHoveredElement('email')
    }

    const handleMouseout = () => {
        setHoveredElement(null)
    }

    return (
        <div className="flex grow items-center justify-center">
            <div
                className={`flex flex-col text-2xl sm:text-4xl ${styles.fadeIn}`}
            >
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
                    href="/resume"
                    className="py-7 pl-14 flex flex-row cursor-pointer"
                    onMouseOver={resumeEnter}
                    onMouseOut={handleMouseout}
                >
                    <div>Résumé</div>
                    <Image
                        src={asterisk}
                        alt=""
                        className={`ml-5 w-9 ${styles.pointerAsterisk} ${
                            styles.spinning
                        } ${
                            hoveredElement === 'resume'
                                ? 'opacity-100'
                                : 'opacity-0'
                        }`}
                    />
                </Link>

                <a
                    href="https://blog.ive.ink"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="py-7 pl-14 flex flex-row cursor-pointer"
                    onMouseOver={blogEnter}
                    onMouseOut={handleMouseout}
                >
                    <div>Blog</div>
                    <Image
                        src={asterisk}
                        alt=""
                        className={`ml-5 w-9 ${styles.pointerAsterisk} ${
                            styles.spinning
                        } ${
                            hoveredElement === 'blog'
                                ? 'opacity-100'
                                : 'opacity-0'
                        }`}
                    />
                </a>

                <a
                    href="mailto:ivanesmantovich@gmail.com"
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
                </a>
                <div className="py-7 flex justify-center">
                    <Image
                        src={asterisk}
                        alt=""
                        className={`w-20 ${styles.pointerAsterisk} ${
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
