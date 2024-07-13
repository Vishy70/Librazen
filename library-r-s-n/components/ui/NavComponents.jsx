import Link from "next/link";
import clsx from "clsx";

const variants = {
  light: "bg-white text-black",
  dark: "bg-blue-800 text-violet-100",
};

const sizes = {
  sm: "h-12",
  md: "h-16",
  lg: "h-20",
};

const alignments = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

export function Navbar({ children, className, variant = "dark", size = "md" }) {
  return (
    <nav
      className={clsx(
        "top-0 flex items-center justify-between px-10 mb-5 rounded-b-xl",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </nav>
  );
}

export function Brand({ children, className, href }) {
  return (
    <Link
      href={href}
      className={clsx(
        "text-3xl text-violet-200 font-extrabold transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-violet-500",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function Nav({ children, className, alignment = "right" }) {
  return (
    <div className={clsx("flex space-x-16", alignments[alignment], className)}>
      {children}
    </div>
  );
}

export function NavItem({ children, className, action }) {
  return (
    <form action={action} className={clsx("flex items-center", className)}>
      {children}
    </form>
  );
}

export function NavLink({ children, className, href }) {
  return (
    <Link
      href={href}
      className={clsx(
        "font-semibold text-xl text-violet-200 relative",
        'after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-full after:scale-x-0 after:bg-violet-700 hover:text-violet-500 after:transition-transform after:duration-300 after:ease-out',
        "hover:after:scale-x-100",
        className
      )}
    >
      {children}
    </Link>
  );
}
