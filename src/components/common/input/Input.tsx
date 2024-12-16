import { useId } from 'react';

export default function Input({ label = '', ...inputProps }) {
  const id = useId();
  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className="block text-base font-medium text-indigo-900 dark:text-gray-300 mb-2"
        >
          {label}
        </label>
      )}
      <input id={id} {...inputProps} />
    </>
  );
}
