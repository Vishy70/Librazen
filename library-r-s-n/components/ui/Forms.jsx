import clsx from "clsx";
//For consistent forms througout the application, change UI here!

export function Form({ children, className, ...props }) {
  return (
    <form className={clsx("space-y-6", className)} {...props}>
      {children}
    </form>
  );
}

export function FormGroup({ children, className }) {
  return <div className={clsx("mb-4", className)}>{children}</div>;
}

export function FormLabel({ children, htmlFor, className }) {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx("block text-sm font-medium text-gray-700", className)}
    >
      {children}
    </label>
  );
}

export function Input({ className, ...props }) {
  return (
    <input
      className={clsx(
        "mt-1 block w-full px-3 py-3 border border-violet-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm placeholder-gray-400",
        className
      )}
      {...props}
    />
  );
}
