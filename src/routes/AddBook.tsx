import { useState } from "react";

const AddBook = () => {
  const [judul, setJudul] = useState("");
  const [halaman, setHalaman] = useState("");
  const [publicationyear, setPublicationyear] = useState("0");
  const [publisher, setPublisher] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      book_name: judul,
      pages: halaman,
      publication_year: publicationyear,
      pubname: publisher,
    };
    console.log(data);

    try {
      const response = await fetch(`http://127.0.0.1:5000/books`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // "Book added successfully"
      } else {
        console.log("Error:", response.statusText);
      }
    } catch (error) {
      console.log("Error:", error);
    }
    setJudul("");
    setHalaman("");
    setPublicationyear("");
    setPublisher("");
  };

  return (
    <div className="flex flex-row p-10 border justify-center">
      <form onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-slate-500 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Judul Buku"
            required
            onChange={(e) => {
              setJudul(e.target.value);
            }}
            value={judul}
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Judul Buku
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-slate-500 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Jumlah Halaman"
            required
            onChange={(e) => {
              setHalaman(e.target.value);
            }}
            value={halaman}
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Jumlah Halaman
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-slate-500 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Tahun Terbit"
              required
              onChange={(e) => {
                setPublicationyear(e.target.value);
              }}
              value={publicationyear}
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Tahun Terbit
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-slate-500 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Penerbit"
              required
              onChange={(e) => {
                setPublisher(e.target.value);
              }}
              value={publisher}
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Penerbit
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
