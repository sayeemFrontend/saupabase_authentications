import { useRouteError } from 'react-router-dom';

export default function ErrorBoundary() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="text-center mx-auto w-[16rem] aspect-[1/.7] p-4 rounded-md shadow-2xl place-content-center">
      Uh oh!
      <p className="text-red-500">
        {error.statusText || JSON.stringify(error)}
      </p>
    </div>
  );
}
