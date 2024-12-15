export default function Input({ label = '', ...inputProps }) {
  return (
    <>
      {label && (
        <label className="mb-2 text-sm font-medium leading-[17px] text-black dark:text-white">
          {label}
        </label>
      )}
      <input {...inputProps} />
    </>
  );
}
