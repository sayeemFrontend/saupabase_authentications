import UserTable from '../components/features/tables/UserTable';
import WithLoader from '../components/features/WithLoader';
import useFetch from '../hooks/useFetch';

export default function Home() {
  const { isError, isLoading } = useFetch('/auth/v1/user', {
    method: 'get',
  });

  return (
    <WithLoader isError={isError} isLoading={isLoading}>
      <UserTable
        dataSet={[
          { id: 1, title: 'jahsjas', name: 'sdsdsd' },
          { id: 3, title: 'jahsjas', name: 'sdsdsd' },
          { id: 2, title: 'jahsjas', name: 'sdsdsd' },
        ]}
      />
    </WithLoader>
  );
}
