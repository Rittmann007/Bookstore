import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

function Home() {
  const [books, setbooks] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    axios
      .get("/users/Books")
      .then((response) => {
        setbooks(response.data.data.books);
      })
      .catch((error) => {
        enqueueSnackbar("something went wrong",{variant:"error"})
        console.log(error);
      })
      .finally(() => {
        setloading(false);
      });
  }, []);

  return (
    <>
      <nav className="flex justify-evenly py-3">
        <div className="text-2xl font-bold">
          <h1>Book Store</h1>
        </div>
        <div className="border-2">
          <Link to={"/books/create"}>➕</Link>
        </div>
      </nav>
      {loading == true ? (
        <div className="font-bold">loading please wait....</div>
      ) : (
        <table className="responsive-table block md:table w-full bg-white shadow rounded-lg overflow-hidden">
          <thead className="hidden md:table-header-group bg-gray-100">
            <tr className="md:table-row">
              <th className="md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No
              </th>
              <th className="md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Author
              </th>
              <th className="md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Publish year
              </th>
              <th className="md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Operations
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {books.map((prop, index) => {
              return (
                <tr
                  key={prop._id}
                  className="block md:table-row border-b md:border-none md:hover:bg-gray-50 hover:bg-gray-100"
                >
                  <td
                    data-label="No"
                    className="block md:table-cell px-4 py-3 md:px-6 md:py-3 text-sm font-medium text-gray-800"
                  >
                    {index + 1}
                  </td>
                  <td
                    data-label="Title"
                    className="block md:table-cell px-4 py-3 md:px-6 md:py-3 text-sm text-gray-700"
                  >
                    {prop.title}
                  </td>
                  <td
                    data-label="Author"
                    className="block md:table-cell px-4 py-3 md:px-6 md:py-3 text-sm text-gray-700"
                  >
                    {prop.author}
                  </td>
                  <td
                    data-label="Publish year"
                    className="block md:table-cell px-4 py-3 md:px-6 md:py-3 text-sm text-gray-700"
                  >
                    {prop.publishyear}
                  </td>
                  <td
                    data-label="Operations"
                    className="block md:table-cell px-4 py-3 md:px-6 md:py-3 text-sm text-gray-700"
                  >
                    <Link
                      className="inline-flex items-center justify-center w-8 h-8 rounded hover:bg-gray-200 mx-1"
                      to={`/books/details/${prop._id}`}
                    >
                      ℹ️
                    </Link>
                    <Link
                      className="inline-flex items-center justify-center w-8 h-8 rounded hover:bg-gray-200 mx-1"
                      to={`/books/edit/${prop._id}`}
                    >
                      ✏️
                    </Link>
                    <Link
                      className="inline-flex items-center justify-center w-8 h-8 rounded hover:bg-red-100 mx-1 text-red-600"
                      to={`/books/delete/${prop._id}`}
                    >
                      ❌
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Home;
