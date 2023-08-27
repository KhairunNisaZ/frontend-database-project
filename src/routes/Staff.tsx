import { useEffect, useState } from "react";

interface Staff {
  staff_number: number;
  staff_name: string;
  hire_date: number;
  gender: string;
  addressnumber: number;
  storenumber: number;
}

const Home = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const data = await fetch("http://127.0.0.1:5000/staff");
    const jsonData = await data.json();
    setData(jsonData.items);
    console.log(jsonData.items);
  };

  useEffect(() => {
    getData();
  }, []);

  const staff: Staff[] = data;

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Staff Number
            </th>
            <th scope="col" className="px-6 py-3">
              Staff Name
            </th>
            <th scope="col" className="px-6 py-3">
              Hire Date
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Address Number
            </th>
            <th scope="col" className="px-6 py-3">
              Store Number
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((staff: any, index: any) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
              <td className="px-6 py-4">{staff.staff_number}</td>
              <td className="px-6 py-4">{staff.staff_name}</td>
              <td className="px-6 py-4">{staff.hire_date}</td>
              <td className="px-6 py-4">{staff.gender}</td>
              <td className="px-6 py-4">{staff.addressnumber}</td>
              <td className="px-6 py-4">{staff.storenumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
