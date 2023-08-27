import { useState } from "react";

const EditBook = () => {
  const bookid = window.location.pathname.split("/")[1];
  const [bookNumber, setBookNumber] = useState("");
  const [bookName, setBookName] = useState("");
  const [pages, setPages] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [publisher, setPublisher] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      book_number: bookid,
      book_name: bookName,
      pages: parseInt(pages),
      publication_year: parseInt(publicationYear),
      pubname: publisher,
    };
    console.log(data);

    try {
      const response = await fetch(
        `http://127.0.0.1:5000/books/${data.book_number}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // "Book updated successfully"
      } else {
        console.log("Error:", response.statusText);
      }
    } catch (error) {
      console.log("Error:", error);
    }

    setBookNumber("");
    setBookName("");
    setPages("");
    setPublicationYear("");
    setPublisher("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label
          htmlFor="bookName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Book Name
        </label>
        <input
          type="text"
          id="bookName"
          value={bookName}
          onChange={(event) => setBookName(event.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Book Name"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="pages"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Pages
        </label>
        <input
          type="text"
          id="pages"
          value={pages}
          onChange={(event) => setPages(event.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Pages"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="publicationYear"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Publication Year
        </label>
        <input
          type="text"
          id="publicationYear"
          value={publicationYear}
          onChange={(event) => setPublicationYear(event.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Publication Year"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="publisher"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          Publisher
        </label>
        <input
          type="text"
          id="publisher"
          value={publisher}
          onChange={(event) => setPublisher(event.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Publisher"
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Update
      </button>
    </form>
  );
};

export default EditBook;
