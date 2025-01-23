import React from 'react';

const Table = ({ data, columns }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="px-4 py-2 border border-gray-300 text-left text-gray-600 font-medium"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
            >
              {columns.map((col) => (
                <td
                  key={col.accessor}
                  className="px-4 py-2 border border-gray-300 text-gray-600"
                >
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Example usage
const App = () => {
  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },
    { header: 'Email', accessor: 'email' },
  ];

  const data = [
    { name: 'Alice', age: 25, email: 'alice@example.com' },
    { name: 'Bob', age: 30, email: 'bob@example.com' },
    { name: 'Charlie', age: 35, email: 'charlie@example.com' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Dynamic Table Example</h1>
      <Table data={data} columns={columns} />
    </div>
  );
};

export default App;
