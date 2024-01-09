'use client'

import styles from './Menu.module.css'

import Link from 'next/link'

import { useState } from 'react'
import Snowdrop from './Snowdrop'

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
                    <div className="mr-5 font-medium">About me</div>
                    <Snowdrop
                        visible={hoveredElement === 'about'}
                        pointerMode
                    />
                </Link>

                <Link
                    href="/projects"
                    className="py-7 pl-14 flex flex-row cursor-pointer"
                    onMouseOver={projectsEnter}
                    onMouseOut={handleMouseout}
                >
                    <div className="mr-5 font-medium">Projects</div>
                    <Snowdrop
                        visible={hoveredElement === 'projects'}
                        pointerMode
                    />
                </Link>

                <Link
                    href="/resume"
                    className="py-7 pl-14 flex flex-row cursor-pointer"
                    onMouseOver={resumeEnter}
                    onMouseOut={handleMouseout}
                >
                    <div className="mr-5 font-medium">Résumé</div>
                    <Snowdrop
                        visible={hoveredElement === 'resume'}
                        pointerMode
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
                    <div className="mr-5 font-medium">Blog</div>
                    <Snowdrop visible={hoveredElement === 'blog'} pointerMode />
                </a>

                <a
                    href="mailto:mail@ive.ink"
                    className="py-7 pl-14 flex flex-row cursor-pointer"
                    onMouseOver={emailEnter}
                    onMouseOut={handleMouseout}
                >
                    <div className="mr-5 font-medium">Write me an E-Mail</div>
                    <Snowdrop
                        visible={hoveredElement === 'email'}
                        pointerMode
                    />
                </a>
                <div className="py-7 flex justify-center">
                    <Snowdrop visible={hoveredElement === null} />
                </div>
            </div>
        </div>
    )
}
