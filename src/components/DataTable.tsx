interface DataTableProps {
  headers: string[];
  data: Array<{ [key: string]: string | number }>;
}

export default function DataTable({ headers, data }: DataTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
        <thead className="bg-blue-600 text-white">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {headers.map((header, colIndex) => (
                <td key={colIndex} className="px-6 py-4 text-sm text-gray-700">
                  {row[header.toLowerCase().replace(' ', '_')] || row[header.toLowerCase()]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
