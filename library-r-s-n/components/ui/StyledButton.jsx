import clsx from "clsx";

const variants = {
  primary: "bg-violet-100 hover:bg-violet-300 hover:text-white",
  secondary: "bg-black text-violet-100 hover:bg-violet-300 text-white",
  //danger: "bg-red-500 text-white hover:bg-red-600",
  outline: "bg-transparent shadow-md hover:bg-violet-200",//For outline, specify text-color
  link: 'bg-transparent hover:text-violet-700 hover:underline',
};

const sizes = {
  sm: "py-1 px-2 text-sm",
  md: "py-2 px-4 text-md",
  lg: "py-3 px-6 text-lg",
};

export function StyledButton({
  children,
  onClick,
  className,
  variant = "primary",
  size = "md",
  type = "button",
}) {
    return (
  <button
    type={type}
    onClick={onClick}
    className={clsx(
      "rounded-md justify-center",//focus:ring-2 focus:ring-opacity-75
      variants[variant],
      sizes[size],
      className
    )}
  >
    {children}
  </button>
    )
}
