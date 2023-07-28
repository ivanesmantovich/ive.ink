type WrapperProps = {
    children: React.ReactNode
}

export default function Wrapper(props: WrapperProps) {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            {props.children}
        </div>
    )
}
