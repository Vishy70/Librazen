

export function Header({ title, label })
{
    return (
        <div className="h-full flex flex-col gap-y-2 items-center justify-center">
            <h1 className="text-3xl font-semibold">
                {title}
            </h1>
            <p className="text-gray-500 text-sm">
                {label}
            </p>
        </div>
    )
}