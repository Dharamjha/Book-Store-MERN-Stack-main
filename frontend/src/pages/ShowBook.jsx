import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/books/${id}`);
        setBook(response.data);
      } catch (err) {
        setError('Failed to fetch book details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl font-bold my-4">Book Details</h1>
      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="text-red-600 text-center mt-4">{error}</div>
      ) : book ? (
        <div
          className="flex flex-col border-2 border-sky-400 rounded-xl p-6 shadow-md bg-white"
          style={{ maxWidth: '500px', wordWrap: 'break-word', overflowY: 'auto' }}
        >
          <div className="my-4">
            <span className="text-lg font-medium text-gray-500">ID:</span>
            <span className="ml-4">{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-lg font-medium text-gray-500">Title:</span>
            <span className="ml-4">{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-lg font-medium text-gray-500">Author:</span>
            <span className="ml-4">{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-lg font-medium text-gray-500">Publish Year:</span>
            <span className="ml-4">{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-lg font-medium text-gray-500">Created At:</span>
            <span className="ml-4">{new Date(book.createdAt).toLocaleString()}</span>
          </div>
          <div className="my-4">
            <span className="text-lg font-medium text-gray-500">Last Updated:</span>
            <span className="ml-4">{new Date(book.updatedAt).toLocaleString()}</span>
          </div>
          {book.description && (
            <div className="my-4">
              <span className="text-lg font-medium text-gray-500">Description:</span>
              <span className="ml-4">
                {book.description.length > 200
                  ? book.description.substring(0, 200) + '...'
                  : book.description}
              </span>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center mt-4 text-gray-600">No book found.</div>
      )}
    </div>
  );
};

export default ShowBook;
