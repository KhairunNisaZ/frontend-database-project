import { useEffect, useState } from "react";

interface Store {
  store_number: number;
  manager_staffnum: number;
  address_number: string;
}

const Home = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const data = await fetch("http://127.0.0.1:5000/store");
    const jsonData = await data.json();
    setData(jsonData.items);
    console.log(jsonData.items);
  };

  useEffect(() => {
    getData();
  }, []);

  const store: Store[] = data;

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Store Number
            </th>
            <th scope="col" className="px-6 py-3">
              Manager's Staff Number
            </th>
            <th scope="col" className="px-6 py-3">
              Address Number
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((store: any, index: any) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
              <td className="px-6 py-4">{store.store_number}</td>
              <td className="px-6 py-4">{store.manager_staffnum}</td>
              <td className="px-6 py-4">{store.address_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
