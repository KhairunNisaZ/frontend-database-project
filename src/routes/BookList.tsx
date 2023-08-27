import { useEffect, useState } from "react";

interface Books {
  book_name: string;
  book_number: number;
  category_name: string;
  pages: number;
  publication_year: number;
  pubname: string;
}

const Home = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const data = await fetch("http://127.0.0.1:5000/books");
    const jsonData = await data.json();
    setData(jsonData.items);
    console.log(jsonData.items);
  };

  useEffect(() => {
    getData();
  }, []);

  const books: Books[] = data;

  return (
    <div className="flex flex-col space-y-4">
      {books.map((book, index) => (
        <div className="">
          <h1 className="text-3xl">{book.book_name}</h1>
          <p className="text-xl text-slate-400">{book.category_name}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
