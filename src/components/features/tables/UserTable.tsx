export default function UserTable({
  dataSet = [],
}: {
  dataSet: { [key: string]: any }[];
}) {
  const keys = Object.keys(dataSet[0]);

  return (
    <div className="flex flex-col">
      <meta name="author " contextMenu="Jhon" />
      <title>New title</title>
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  {keys?.map((head, i) => (
                    <th
                      key={i}
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataSet?.map((item, i) => (
                  <tr key={i} className="bg-gray-100 border-b">
                    {keys?.map((col, i) => (
                      <td
                        key={i}
                        className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        {item[col]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
