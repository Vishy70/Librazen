import clsx from 'clsx'

export function Card({ children, className }) {
  return (
    <div className={clsx("bg-violet-50 shadow-md rounded-lg overflow-hidden", className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={clsx("p-5 justify-center items-center", className)}>{children}</div>;
}


export function CardHeader({ children, className }) {
  return (
    <div className={clsx("flex p-4 rounded-t-lg w-full justify-center items-center", className)}>{children}</div>
  );
}


export function CardFooter({ children, className }) {
  return <div className={clsx("flex p-4 rounded-b-lg w-full justify-center items-center", className)}>{children}</div>;
}