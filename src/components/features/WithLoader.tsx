import { ReactElement } from 'react';
import Loader from './Loader';
import WithError from './WithError';

interface PropsType {
  children: ReactElement;
  isLoading: boolean;
  isError: boolean | any;
}

export default function WithLoader({
  children,
  isLoading = false,
  isError = false,
}: PropsType) {
  return isLoading ? (
    <Loader />
  ) : isError ? (
    <WithError>{children}</WithError>
  ) : (
    children
  );
}
