import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[90%] max-w-[500px] bg-white rounded-xl p-6 shadow-lg relative"
      >
        <AiOutlineClose
          className="absolute right-4 top-4 text-3xl text-gray-500 hover:text-red-600 cursor-pointer transition-colors"
          onClick={onClose}
        />

        <h2 className="w-fit px-4 py-1 bg-red-200 text-red-800 rounded-lg font-semibold text-sm mb-4">
          {book.publishYear}
        </h2>

        <h4 className="text-sm text-gray-500 mb-2">ID: {book._id}</h4>

        <div className="flex items-center gap-2 mb-2">
          <PiBookOpenTextLight className="text-red-500 text-2xl" />
          <h2 className="text-xl font-semibold">{book.title}</h2>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <BiUserCircle className="text-red-500 text-2xl" />
          <h3 className="text-lg font-medium text-gray-700">{book.author}</h3>
        </div>

        <div className="mt-4">
          <h4 className="text-gray-700 font-semibold">Description:</h4>
          <p className="mt-2 text-gray-600 leading-relaxed">
            In *The Midnight Library* by Matt Haig, the protagonist Nora Seed finds herself in a magical library suspended between life and death, where every book represents a different version of her life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
