interface DataTableProps {
  headers: string[];
  data: Array<{ [key: string]: string | number }>;
  variant?: 'default' | 'compact';
}

export default function DataTable({ headers, data, variant = 'default' }: DataTableProps) {
  const padding = variant === 'compact' ? 'px-4 py-3' : 'px-6 py-4';

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gradient-to-r from-sky-500 to-blue-600">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className={`${padding} text-left text-sm font-semibold uppercase tracking-wider text-white`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-sky-50 transition-colors duration-150"
              >
                {headers.map((header, colIndex) => (
                  <td key={colIndex} className={`${padding} text-sm text-gray-700`}>
                    {row[header.toLowerCase().replace(' ', '_')] || row[header.toLowerCase()]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
