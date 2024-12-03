import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 border-2 border-gray-300 rounded-lg shadow-lg p-6 m-4 transition-transform transform hover:scale-105 hover:shadow-xl">
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 text-sm font-bold rounded-lg shadow-md">
        {book.publishYear}
      </h2>

      <h4 className="text-sm text-gray-600 font-mono mb-3">{book._id}</h4>

      <div className="flex items-center gap-x-2 mb-2">
        <PiBookOpenTextLight className="text-red-400 text-2xl" />
        <h2 className="text-lg font-semibold text-gray-800">{book.title}</h2>
      </div>

      <div className="flex items-center gap-x-2 mb-4">
        <BiUserCircle className="text-red-400 text-2xl" />
        <h2 className="text-md text-gray-700">{book.author}</h2>
      </div>

      <div className="flex justify-between items-center gap-x-4 mt-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer transition"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black transition" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black transition" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black transition" />
        </Link>
      </div>

      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default BookSingleCard;
