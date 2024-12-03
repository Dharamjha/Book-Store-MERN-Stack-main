import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-400 px-4 py-2 text-left">No</th>
            <th className="border border-gray-400 px-4 py-2 text-left">Title</th>
            <th className="border border-gray-400 px-4 py-2 text-left max-md:hidden">
              Author
            </th>
            <th className="border border-gray-400 px-4 py-2 text-left max-md:hidden">
              Publish Year
            </th>
            <th className="border border-gray-400 px-4 py-2 text-center">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book, index) => (
              <tr key={book._id} className="hover:bg-gray-100 transition duration-200">
                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{book.title}</td>
                <td className="border border-gray-300 px-4 py-2 max-md:hidden">{book.author}</td>
                <td className="border border-gray-300 px-4 py-2 max-md:hidden">{book.publishYear}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className="text-xl text-green-600 hover:text-green-800" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-xl text-yellow-600 hover:text-yellow-800" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-xl text-red-600 hover:text-red-800" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                className="text-center py-4 text-gray-500 font-medium"
              >
                No books found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
