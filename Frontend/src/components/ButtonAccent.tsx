// interface ButtonAccentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

type SmallButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function ButtonAccent({
    className = '',
    children,
    ...props
}: SmallButtonProps) {
    return (
        <button
            className={`bg-accent-500 hover:bg-accent-600 text-neutral-100 w-fit px-4 py-2 rounded-3xl shrink-0 cursor-pointer ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
