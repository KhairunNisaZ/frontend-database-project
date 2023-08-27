import { useEffect, useState } from "react";
import { StoreCard } from "../components/StoreCard";

interface Store {
  store_id: number;
  manager: number; //change later
  street: string;
  city: string;
  state: string;
  country: string;
}

const Home = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch("http://127.0.0.1:5000/stores");
    const jsonData = await res.json();
    setData(jsonData);
  };
  useEffect(() => {
    getData();
  }, []);

  const stores: Store[] = data;

  return (
    <>
      <div className="flex justify-center items-center py-56">
        <div className="flex flex-col bg-slate-200 px-20 py-5 rounded-lg shadow-sm space-y-4">
          <h1 className="m-auto text-2xl">Good Reading Bookstore</h1>
          <div className="h-96 overflow-auto">
            {stores.map((store) => (
              <a href={`/${store.store_id}`}>
                <StoreCard data={store} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
