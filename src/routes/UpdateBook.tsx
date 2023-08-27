import { useEffect, useState } from "react";
import axios from "axios";

interface UpdateBook {
  book_name: string;
  book_number: number;
  category_name: string;
  pages: number;
  publication_year: number;
  pubname: string;
}

const UpdateBook = () => {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState([]);
  const getData = async () => {
    const data = await fetch("http://127.0.0.1:5000/books");
    const jsonData = await data.json();
    setData(jsonData.items);
    console.log(jsonData.items);
  };

  const handleDelete = async (book_number: number) => {
    axios
      .delete(`http://127.0.0.1:5000/books/${book_number}`)
      .then((response) => {
        console.log("Post deleted successfully", response);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };
  const handleQuery = async (book_number: number) => {
    setQuery(
      `SELECT b.book_number, b.book_name, b.pages, b.publication_year, b.pubname FROM book b WHERE b.book_number=${book_number}`
    );
    console.log(query);
  };
  useEffect(() => {
    getData();
  }, []);

  const books: UpdateBook[] = data;

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Book Number
            </th>
            <th scope="col" className="px-6 py-3">
              Book Name
            </th>

            <th scope="col" className="px-6 py-3">
              Pages
            </th>
            <th scope="col" className="px-6 py-3">
              Publication Year
            </th>
            <th scope="col" className="px-6 py-3">
              Publisher Name
            </th>
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((book: any, index: any) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              onClick={(e) => handleQuery(book.book_number)}
            >
              <td className="px-6 py-4">{book.book_number}</td>
              <td className="px-6 py-4">{book.book_name}</td>
              <td className="px-6 py-4">{book.pages}</td>
              <td className="px-6 py-4">{book.publication_year}</td>
              <td className="px-6 py-4">{book.pubname}</td>
              <td className="px-6 py-4">
                <a
                  href={`/${book.book_number}/editbook`}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={(e) => handleDelete(book.book_number)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          SQL Builder
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{query}</p>
      </a>
    </div>
  );
};

export default UpdateBook;
