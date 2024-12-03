import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-white/80 shadow-lg rounded-lg p-4">
        <h1 className="text-4xl font-bold text-gray-800">📚 Books List</h1>
        <Link
          to="/books/create"
          className="flex items-center text-pink-600 hover:text-pink-800"
        >
          <MdOutlineAddBox className="text-4xl" />
          <span className="ml-2 font-semibold">Add Book</span>
        </Link>
      </div>

      {/* Toggle View Buttons */}
      <div className="flex justify-center gap-4 my-6">
        <button
          className={`px-4 py-2 text-white font-semibold rounded-lg transition ${
            showType === 'table'
              ? 'bg-purple-600 hover:bg-purple-700'
              : 'bg-purple-300 hover:bg-purple-400'
          }`}
          onClick={() => setShowType('table')}
        >
          Table View
        </button>
        <button
          className={`px-4 py-2 text-white font-semibold rounded-lg transition ${
            showType === 'card'
              ? 'bg-purple-600 hover:bg-purple-700'
              : 'bg-purple-300 hover:bg-purple-400'
          }`}
          onClick={() => setShowType('card')}
        >
          Card View
        </button>
      </div>

      {/* Content Section */}
      <div className="mt-4 bg-white/90 shadow-lg rounded-lg p-6">
        {loading ? (
          <Spinner />
        ) : showType === 'table' ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
    </div>
  );
};

export default Home;
