import Banner from './Banner'

interface PageWrapperProps {
    children: React.ReactNode
    isLanding: boolean
    title: string
    backgroundImage: string
    contentClassName?: string
}

export default function PageWrapper({
    children,
    isLanding,
    title,
    backgroundImage,
    contentClassName = '',
}: PageWrapperProps) {
    return (
        <div className="flex flex-col w-full">
            <Banner
                isLanding={isLanding}
                title={title}
                backgroundImage={backgroundImage}
            />
            {!isLanding ? (
                <div
                    className={`flex flex-col gap-8 md:gap-16 w-full h-fit px-2.5 py-10 md:p-32 ${contentClassName}`}
                >
                    {children}
                </div>
            ) : (
                <>{children}</>
            )}
        </div>
    )
}
