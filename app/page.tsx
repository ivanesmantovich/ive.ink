'use client'

import Hello from '@/components/Hello'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
    const { push } = useRouter()

    useEffect(() => {
        const timer = setTimeout(() => {
            push('/menu')
        }, 4500)
        return () => clearTimeout(timer)
    }, [])

    return <Hello />
}
