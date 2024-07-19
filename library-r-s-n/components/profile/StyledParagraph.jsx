export function StyledParagraph({ label, id, text }) {
  return (
    <>
      <label htmlFor="email" className="font-semibold text-violet-400 hover:underline">{`${label}: `}</label>
      <div
        id={id}
        className={`justify-center w-fit text-md text-gray-600 font-medium leading-relaxed tracking-wide rounded-full p-1 hover:bg-violet-300 hover:text-white transition-colors cursor-pointer`}
      >
        {text}
      </div>
    </>
  );
}
