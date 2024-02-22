import Link from 'next/link'
import Snowdrop from './Snowdrop'
import Image from 'next/image'
import hello from '@/public/hello.svg'

export default function About() {
    function Projects() {
        return (
            <Link href={'/projects'} className="link">
                make
            </Link>
        )
    }

    function Blog() {
        return (
            <Link href={'/blog'} className="link">
                write
            </Link>
        )
    }

    function Location() {
        return (
            <Link
                href={'https://maps.app.goo.gl/FwKbSSGDmtk26SQB8'}
                className={'link'}
            >
                Voronezh, Russia
            </Link>
        )
    }

    return (
        <div className="flex grow justify-center">
            <div className={`flex flex-col h-full w-5/6 sm:w-2/5`}>
                <Link className="w-fit pt-10 sm:pt-28 pb-20" href="/menu">
                    <Snowdrop visible static />
                </Link>

                <div className="slide-enter-content text-lg sm:text-2xl">
                    <Image
                        src={hello}
                        width={320}
                        height={240}
                        alt="Hello animation"
                    />

                    <div className={'pb-8'}>
                        <div className={'pb-1'}>My name is Ivan.</div>
                        <div>
                            I am a Frontend Developer currently living in{' '}
                            <Location />.
                        </div>
                    </div>
                    <div className={'pb-8'}>
                        <div className={'pb-1'}>
                            I <Projects /> long-lasting, easy-to-use, aesthetic
                            software.
                        </div>
                        <div>
                            I <Blog /> about UX, design, web performance, tools
                            for developers and some other stuff.
                        </div>
                    </div>
                    <div className={'font-medium pb-10'}>
                        I love the Internet.
                    </div>
                </div>
            </div>
        </div>
    )
}
