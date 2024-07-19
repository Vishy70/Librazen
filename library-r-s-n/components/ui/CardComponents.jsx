import clsx from 'clsx'

//TODO: Add customization to Card component
export function Card({ children, className }) {
  return (
    <div className={clsx("bg-violet-100 shadow-md rounded-lg hover:border-violet-400 hover:border-4 transition-colors overflow-hidden", className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={clsx("p-2 justify-center items-center", className)}>{children}</div>;
}


export function CardHeader({ children, className }) {
  return (
    <div className={clsx("flex p-2 rounded-t-lg w-full justify-center items-center", className)}>{children}</div>
  );
}


export function CardFooter({ children, className }) {
  return <div className={clsx("flex p-4 rounded-b-lg w-full justify-center items-center", className)}>{children}</div>;
}