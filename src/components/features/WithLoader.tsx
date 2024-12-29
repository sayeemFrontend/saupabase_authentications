import Loader from './Loader';
import WithError from './WithError';
import { DefaultProps } from '../../types';

interface PropsType extends DefaultProps {
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
